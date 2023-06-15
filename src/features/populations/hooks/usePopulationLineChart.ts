import { usePrefectures } from '@/features/prefectures/hooks/usePrefectures'
import { removePrefectureSuffix } from '@/features/prefectures/libs/removePrefectureSuffix'
import { theme } from '@/theme'
import { useMemo } from 'react'
import { ReactGoogleChartEvent } from 'react-google-charts'

export const usePopulationLineChart = () => {
  const { data: prefectures, togglePrefectureSelection, isSelected } = usePrefectures()

  const chartData = useMemo(() => {
    const prefectureData = prefectures
      ? prefectures.map((prefecture) => [
          removePrefectureSuffix(prefecture.prefName),
          prefecture.isSelected ? 1 : 0,
        ])
      : []
    return [['都道府県', '選択'], ...prefectureData]
  }, [prefectures])

  const options = useMemo(
    () => ({
      region: 'JP',
      resolution: 'provinces',
      legend: false,
      sizeAxis: { maxValue: 1 },
      backgroundColor: theme.colors.background,
      datalessRegionColor: theme.colors.background,
      colors: isSelected ? ['#fff', 'green'] : ['#fff'],
      tooltip: {
        trigger: 'none', // ツールチップを非表示にする
      },
    }),
    [isSelected]
  )

  const changeEvent: ReactGoogleChartEvent[] = useMemo(
    () => [
      {
        eventName: 'select',
        callback({ chartWrapper }) {
          const selectionId = chartWrapper.getChart().getSelection()[0].row + 1
          togglePrefectureSelection(selectionId)
        },
      },
    ],
    [togglePrefectureSelection]
  )

  return { chartData, options, changeEvent }
}
