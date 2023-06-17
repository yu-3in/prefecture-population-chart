import Highcharts from 'highcharts'
import { HighchartsReact } from 'highcharts-react-official'
import { useHighCharts } from '../hooks/useHighChart'
import { PopulationLabel } from '../types/Population'
import { Skelton } from '@/components/skelton/Skelton'

export type PopulationLineChartProps = {
  category: PopulationLabel
}

export const PopulationLineChart: React.FC<PopulationLineChartProps> = ({ category }) => {
  const { options, isLoading } = useHighCharts(category)

  return isLoading ? (
    <Skelton width="100%" height="400px" variant="rounded" />
  ) : (
    <HighchartsReact highcharts={Highcharts} options={options} />
  )
}
