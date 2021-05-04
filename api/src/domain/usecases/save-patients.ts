export interface SavePatients {
  save: (patient: Array<SavePatients.Params>) => Promise<void>
}

export namespace SavePatients {
  export type Params = {
    id: string
    name: string
    age: number
    telephne: number
    pathology: string
    address: string
  }
}
