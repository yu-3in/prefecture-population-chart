import { useCallback, useEffect, useState } from 'react'
import { prefectureApi, useFetchPrefecturesQuery } from '../apis/prefectureApi'
import { Prefecture } from '../types/prefecture'
import { useAppDispatch } from '@/stores/store'

export const usePrefecture = (prefCode: number) => {
  const query = useFetchPrefecturesQuery()
  const { data: prefectures } = query
  const dispatch = useAppDispatch()
  const [prefecture, setPrefecture] = useState<Prefecture>()

  useEffect(() => {
    setPrefecture(
      prefectures?.find((queryPrefecture) => queryPrefecture.prefCode === prefecture?.prefCode)
    )
  }, [prefecture?.prefCode, prefectures, query.data])

  /**
   * 都道府県が選択されているかどうかを切り替える
   */
  const togglePrefectureSelection = useCallback(() => {
    dispatch(
      prefectureApi.util.updateQueryData('fetchPrefectures', undefined, (prevPrefectures) => {
        return prevPrefectures.map((prevPrefecture) =>
          prevPrefecture.prefCode === prefCode
            ? { ...prevPrefecture, isSelected: !prevPrefecture.isSelected }
            : prevPrefecture
        )
      })
    )
  }, [dispatch, prefCode])

  return { ...query, prefecture, togglePrefectureSelection }
}
