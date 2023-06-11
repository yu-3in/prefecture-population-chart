import { usePrefecture } from '../hooks/usePrefecture'
import { Prefecture } from '../types/Prefecture'
import { useCallback } from 'react'
import { useLazyFetchPopulationQuery } from '@/features/populations/apis/populationApi'
import { css } from '@emotion/react'

export type PrefectureCheckboxProps = { prefecture: Prefecture }

export const PrefectureCheckbox: React.FC<PrefectureCheckboxProps> = ({ prefecture }) => {
  const { togglePrefectureSelection } = usePrefecture(prefecture.prefCode)
  const [trigger] = useLazyFetchPopulationQuery()

  const handleChange = useCallback(async () => {
    await trigger(prefecture.prefCode, true)
    togglePrefectureSelection()
  }, [prefecture.prefCode])

  return (
    <div css={checkbox}>
      <input
        type="checkbox"
        name="prefecture"
        id={prefecture.prefCode.toString()}
        onChange={handleChange}
        checked={prefecture.isSelected}
        css={input}
      />
      <label css={label} htmlFor={prefecture.prefCode.toString()}>
        {prefecture.prefName}
      </label>
    </div>
  )
}

const checkbox = css``

const input = css`
  cursor: pointer;
`

const label = css`
  cursor: pointer;
  margin-left: 0.2em;
`
