import { useCallback, useEffect, useState } from 'react'
import { prefectureApi, useFetchPrefecturesQuery } from '../apis/prefectureApi'
import { useAppDispatch } from '@/stores/store'

export const usePrefectures = () => {
  const query = useFetchPrefecturesQuery()
  const dispatch = useAppDispatch()
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    // 都道府県が１つでも選択されているか
    setIsSelected(query.data?.findIndex((prefecture) => prefecture.isSelected) !== -1)
  }, [query.data])

  /**
   * 都道府県が選択されているかどうかを切り替える
   */
  const togglePrefectureSelection = useCallback(
    (prefCode: number) => {
      dispatch(
        prefectureApi.util.updateQueryData('fetchPrefectures', undefined, (prevPrefectures) => {
          return prevPrefectures.map((prevPrefecture) =>
            prevPrefecture.prefCode === prefCode
              ? { ...prevPrefecture, isSelected: !prevPrefecture.isSelected }
              : prevPrefecture
          )
        })
      )
    },
    [dispatch]
  )

  return { ...query, togglePrefectureSelection, isSelected }
}
