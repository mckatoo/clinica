import { CacheStore } from '@/data/protocols/cache'
import { SavePatients } from '@/domain/usecases'

class LocalSavePatients implements SavePatients {
  constructor (
    private readonly cacheStore: CacheStore,
    private readonly timestamp: Date
  ) {}

  async save (patients: Array<SavePatients.Params>): Promise<void> {
    this.cacheStore.replace('scheduled', {
      timestamp: this.timestamp,
      value: patients
    })
  }
}

export { LocalSavePatients }
