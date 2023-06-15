/**
 * 都道府県からsuffixの"県"や"府"、"都"を除外する
 * ただし、デフォルトでは"道"は例外として除外しない設定としている（GeoChartの都合上）
 */
export const removePrefectureSuffix = (
  prefName: string,
  suffixes: string[] = ['県', '府', '都']
) => {
  const matchingSuffix = suffixes.find((suffix) => prefName.endsWith(suffix))
  if (matchingSuffix) {
    return prefName.slice(0, -matchingSuffix.length)
  }
  return prefName
}
