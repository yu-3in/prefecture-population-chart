import Highcharts from 'highcharts'
import { useCallback, useEffect, useState } from 'react'
import { useLazyFetchPopulationQuery } from '../apis/populationApi'
import { usePrefectures } from '@/features/prefectures/hooks/usePrefectures'
import { PopulationLabel } from '../types/Population'

// config
export const colors = ['#7FD13B', '#EA157A', '#00ADDC', '#FEB80A', '#6D83BF']
export const minYear = 1975
export const currentYear = new Date().getFullYear()
export const maxYear = currentYear - (currentYear % 5)
export const markerSymbols = ['circle', 'square', 'diamond', 'triangle', 'triangle-down']
export const createOptions = (category: PopulationLabel): Highcharts.Options => ({
  title: {
    text: undefined,
  },
  xAxis: {
    title: {
      text: '年度',
      style: {
        fontWeight: 'normal',
      },
    },
    gridLineWidth: 1,
    tickInterval: 5,
    min: minYear,
    max: maxYear,
    crosshair: true,
  },
  yAxis: {
    title: {
      text: `${category}（万人）`,
      style: {
        fontWeight: 'normal',
      },
    },
    minTickInterval: 50000,
    gridLineWidth: 1,
    labels: {
      formatter() {
        return `${(typeof this.value === 'number' ? this.value : parseInt(this.value)) / 10000}`
      },
    },
  },
  tooltip: {
    useHTML: true,
    // shared: true,
    headerFormat:
      '<table><tr><th colspan="2"><span style="font-size: 1.2em">{point.key}</span>年</th></tr>',
    pointFormatter() {
      const value = (Math.round((this.y as number) / 1000) / 10).toFixed(1)
      return `
        <tr style="color: ${this.series.color}">
          <td>${this.series.name}</td>
          <td>
            <b style="display: inline-flex; gap: .2em;">
              <span style="font-size: 1.3em;">${value}</span>
              <span>万人</span>
            </b>
          </td>
        </tr>
      `
    },
    footerFormat: '</table>',
  },
  plotOptions: {
    series: {
      events: {
        legendItemClick(e) {
          e.preventDefault()
        },
      },
    },
  },
  credits: { enabled: false },
  responsive: {
    rules: [
      {
        condition: {
          minWidth: 768,
        },
        chartOptions: {
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            itemMarginBottom: 12,
          },
        },
      },
    ],
  },
  series: [
    {
      type: 'line',
      data: [],
      showInLegend: true,
    },
  ],
})

export const useHighCharts = (category: PopulationLabel) => {
  const [trigger] = useLazyFetchPopulationQuery()
  const { data: prefectures, ...rest } = usePrefectures()
  const [options, setOptions] = useState<Highcharts.Options>(createOptions(category))

  const createSeries = useCallback(async () => {
    if (prefectures) {
      const newSeries: Highcharts.SeriesOptionsType[] = await Promise.all(
        prefectures
          .filter((prefecture) => prefecture.isSelected)
          .map(async (prefecture) => {
            const population = (await trigger(prefecture.prefCode, true)).data?.data
            const data = population
              ? population
                  .find(({ label }) => label === category)
                  ?.data.map(({ year, value }) => [year, value])
              : undefined

            return {
              id: prefecture.prefCode.toString(),
              index: prefecture.prefCode,
              type: 'line',
              name: prefecture.prefName,
              data,
              marker: {
                symbol: markerSymbols[prefecture.prefCode % markerSymbols.length],
              },
              color: colors[prefecture.prefCode % colors.length],
              showInLegend: true,
            }
          })
      )
      const newOptions = createOptions(category)
      setOptions({ ...newOptions, series: newSeries })
    }
  }, [prefectures, category, trigger])

  useEffect(() => {
    createSeries()
  }, [prefectures, category, createSeries])
  return { options, minYear, maxYear, ...rest }
}
