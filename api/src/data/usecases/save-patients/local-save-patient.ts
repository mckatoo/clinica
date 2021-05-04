import { CacheStore } from '@/data/protocols/cache'

class LocalSavePatients {
  constructor (private readonly cacheStore: CacheStore) {}

  async save (): Promise<void> {
    this.cacheStore.delete('scheduled')
    this.cacheStore.insert('scheduled')
  }
}

export { LocalSavePatients }
