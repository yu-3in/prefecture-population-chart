import { CardTab } from '@/components/card/CardTab'
import { CardTabs } from '@/components/card/CardTabs'
import { useAppSelector, useAppDispatch } from '@/stores/store'
import { selectPopulationCategory } from '../stores/SelectedPopulationCategory'
import { PopulationLabel } from '../types/Population'

export type PopulationCategoryCardTabsProps = {}

export const PopulationCategoryCardTabs: React.FC<PopulationCategoryCardTabsProps> = () => {
  const selectedPopulationCategory = useAppSelector(
    (state) => state.selectedPopulationCategory.selected
  )
  const dispatch = useAppDispatch()

  return (
    <CardTabs
      value={selectedPopulationCategory}
      onChange={(value) => dispatch(selectPopulationCategory(value as PopulationLabel))}>
      <CardTab value="総人口">総人口</CardTab>
      <CardTab value="年少人口">年少人口</CardTab>
      <CardTab value="生産年齢人口">生産年齢人口</CardTab>
      <CardTab value="老年人口">老年人口</CardTab>
    </CardTabs>
  )
}
