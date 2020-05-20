export const dateToYyyymmdd = (date: Date): string => {
  const month = date.getMonth() + 1
  const mm = month < 10 ? `0${month}` : `${month}`
  return `${date.getFullYear()}${mm}${date.getDate()}`
}

export const convertYyyymmddToDate = (yyyymmdd: string): Date => {
  const y = parseInt(yyyymmdd.slice(0, 4))
  const m = parseInt(yyyymmdd.slice(4, 6))
  const d = parseInt(yyyymmdd.slice(6, 8))
  return new Date(y, m, d)
}
