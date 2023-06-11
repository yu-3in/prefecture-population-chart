import { usePrefecture } from '../hooks/usePrefecture'
import { Prefecture } from '../types/Prefecture'
import { useCallback } from 'react'
import { useLazyFetchPopulationQuery } from '@/features/populations/apis/populationApi'

export type PrefectureCheckboxProps = { prefecture: Prefecture }

export const PrefectureCheckbox: React.FC<PrefectureCheckboxProps> = ({ prefecture }) => {
  const { togglePrefectureSelection } = usePrefecture(prefecture.prefCode)
  const [trigger] = useLazyFetchPopulationQuery()

  const handleChange = useCallback(async () => {
    togglePrefectureSelection()
    await trigger(prefecture.prefCode, true)
  }, [prefecture.prefCode])

  return (
    <div>
      <input
        type="checkbox"
        name="prefecture"
        id={prefecture.prefCode.toString()}
        onChange={handleChange}
        checked={prefecture.isSelected}
      />
      <label htmlFor={prefecture.prefCode.toString()}>{prefecture.prefName}</label>
    </div>
  )
}
