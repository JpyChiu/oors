export const dateToYyyymmdd = (date: Date): string => {
  const month = date.getMonth() + 1
  const mm = month < 10 ? `0${month}` : `${month}`
  return `${date.getFullYear()}${mm}${date.getDate()}`
}
