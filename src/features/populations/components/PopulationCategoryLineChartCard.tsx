import { CardTab } from '@/components/card/CardTab'
import { CardTabs } from '@/components/card/CardTabs'
import { PopulationLabel } from '../types/Population'
import { PopulationLineChart } from './PopulationLineChart'
import { useCallback, useState } from 'react'
import { Card } from '@/components/card'

export type PopulationCategoryLineChartCardProps = {
  //
}

const categories: PopulationLabel[] = ['総人口', '年少人口', '生産年齢人口', '老年人口']

export const PopulationCategoryLineChartCard: React.FC<
  PopulationCategoryLineChartCardProps
> = () => {
  const [selectedCategory, setSelectedCategory] = useState<PopulationLabel>(categories[0])
  const handleChange = useCallback((value: string) => {
    // valueがPopulationLabel型かどうかをチェックする
    if (categories.includes(value as PopulationLabel)) {
      setSelectedCategory(value as PopulationLabel)
    }
  }, [])

  return (
    <Card>
      <CardTabs value={categories[0]} onChange={handleChange}>
        {categories.map((category) => (
          <CardTab value={category} key={category}>
            {category}
          </CardTab>
        ))}
      </CardTabs>
      <Card.Content>
        <PopulationLineChart category={selectedCategory} />
      </Card.Content>
    </Card>
  )
}
