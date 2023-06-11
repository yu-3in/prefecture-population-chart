import { usePrefecture } from '../hooks/usePrefecture'
import { Prefecture } from '../types/prefecture'

export type PrefectureCheckboxProps = { prefecture: Prefecture }

export const PrefectureCheckbox: React.FC<PrefectureCheckboxProps> = ({ prefecture }) => {
  const { togglePrefectureSelection } = usePrefecture(prefecture.prefCode)

  return (
    <div>
      <input
        type="checkbox"
        name="prefecture"
        id={prefecture.prefCode.toString()}
        onChange={togglePrefectureSelection}
        checked={prefecture.isSelected}
      />
      <label htmlFor={prefecture.prefCode.toString()}>{prefecture.prefName}</label>
    </div>
  )
}
