import { PrefectureCheckbox } from '@/features/prefectures/components/PrefectureCheckbox'
import { usePrefectures } from '@/features/prefectures/hooks/usePrefectures'
import { css } from '@emotion/react'

export type PrefectureSelectorProps = {
  //
}

export const PrefectureSelector: React.FC<PrefectureSelectorProps> = () => {
  const { data: prefectures } = usePrefectures()
  return (
    <ul css={list}>
      {prefectures?.map((prefecture) => (
        <li key={prefecture.prefCode}>
          <PrefectureCheckbox prefecture={prefecture} />
        </li>
      ))}
    </ul>
  )
}

const list = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  list-style: none;
  padding-left: 0;
`
