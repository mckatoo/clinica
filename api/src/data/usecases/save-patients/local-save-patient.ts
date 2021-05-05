import { CacheStore } from '@/data/protocols/cache'
import { SavePatients } from '@/domain/usecases';

class LocalSavePatients implements SavePatients {
  constructor (private readonly cacheStore: CacheStore) {}

  async save (patients: Array<SavePatients.Params>): Promise<void> {
    this.cacheStore.delete('scheduled')
    this.cacheStore.insert('scheduled', patients)
  }
}

export { LocalSavePatients }
