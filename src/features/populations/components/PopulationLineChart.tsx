import Highcharts from 'highcharts'
import { HighchartsReact } from 'highcharts-react-official'
import { useHighCharts } from '../hooks/useHighChart'
import { Skelton } from '@/components/skelton/Skelton'

export type PopulationLineChartProps = {
  //
}

export const PopulationLineChart: React.FC<PopulationLineChartProps> = () => {
  const { options, isLoading } = useHighCharts()

  return isLoading ? (
    <Skelton width="100%" height="400px" variant="rounded" />
  ) : (
    <HighchartsReact highcharts={Highcharts} options={options} />
  )
}
