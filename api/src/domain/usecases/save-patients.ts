export interface SavePatients {
  save: (patient: SavePatients.Params) => Promise<void>
}

namespace SavePatients {
  export type Params = {
    name: string
    age: number
    telephne: number
    pathology: string
    address: string
  }
}
