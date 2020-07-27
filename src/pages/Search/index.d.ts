export interface FormValues {
  category: any[],
  taxArea: any[],
  dispatchArea: any[],
  keyword: string,
  collation: string,
  current: number,
  pageSize: number,
  total: number,
}

export interface LocationSimple {
  state: {
    value: string
  }
}