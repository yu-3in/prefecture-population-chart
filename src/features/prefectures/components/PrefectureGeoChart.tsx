import { Chart } from 'react-google-charts'
import { css } from '@emotion/react'
import { usePopulationLineChart } from '@/features/populations/hooks/usePopulationLineChart'

export const PrefectureGeoChart: React.FC = () => {
  const { chartData, options, changeEvent } = usePopulationLineChart()

  return (
    <Chart
      chartType="GeoChart"
      data={chartData}
      options={options}
      width="100%"
      height="500px"
      chartEvents={changeEvent}
      css={geoChart}
    />
  )
}

const geoChart = css`
  overflow: hidden;
  & > div {
    left: -10%;
    top: -15%;
  }
  svg,
  svg > g > g {
    scale: 1.3;
  }
`
