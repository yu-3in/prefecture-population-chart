import { Skelton } from '@/components/skelton/Skelton'
import { PrefectureCheckbox } from '@/features/prefectures/components/PrefectureCheckbox'
import { usePrefectures } from '@/features/prefectures/hooks/usePrefectures'
import { css } from '@emotion/react'

export type PrefectureSelectorProps = {
  //
}

export const PrefectureSelector: React.FC<PrefectureSelectorProps> = () => {
  const { data: prefectures, isLoading } = usePrefectures()
  return (
    <ul css={list}>
      {isLoading
        ? Array.from({ length: 47 }).map((_, index) => (
            // NOTE: skeltonなので獣助変更は行われない想定 = indexをkeyとすることを許容する
            <li key={index}>
              <Skelton width="100%" height="1.5rem" variant="rounded" />
            </li>
          ))
        : prefectures?.map((prefecture) => (
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
  gap: 1rem;
`
