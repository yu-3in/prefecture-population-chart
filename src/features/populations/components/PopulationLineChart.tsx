import Highcharts from 'highcharts'
import { HighchartsReact } from 'highcharts-react-official'
import { useHighCharts } from '../hooks/useHighChart'

export type PopulationLineChartProps = {
  //
}

export const PopulationLineChart: React.FC<PopulationLineChartProps> = () => {
  const { options } = useHighCharts()

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
