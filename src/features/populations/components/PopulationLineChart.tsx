import Highcharts from 'highcharts'
import { HighchartsReact } from 'highcharts-react-official'
import { useHighCharts } from '../hooks/useHighChart'
import { PopulationLabel } from '../types/Population'

export type PopulationLineChartProps = {
  category: PopulationLabel
}

export const PopulationLineChart: React.FC<PopulationLineChartProps> = ({ category }) => {
  const { options } = useHighCharts(category)

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
