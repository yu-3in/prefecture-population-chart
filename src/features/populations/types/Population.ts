export type PrefecturePopulation = {
  prefCode: number
  boundaryYear: number
  data: Population[]
}

export type Population = {
  label: PopulationLabel
  data: PopulationData[]
}

export type PopulationLabel = '総人口' | '年少人口' | '生産年齢人口' | '老年人口'

export type PopulationData = {
  year: number
  value: number
}
