class LocalSavePatients {
  constructor(private readonly cacheStore: CacheStore) {}

  async save(): Promise<void> {
    this.cacheStore.delete()
  }
}

interface CacheStore {
  delete: () => void
}

class CacheStore implements CacheStore {
  deleteCallsCount = 0

  delete(): void {
    this.deleteCallsCount++
  }
}

describe('LocalSavePatients', () => {
  test('should not delete cache on init', () => {
    const cacheStore = new CacheStore()
    new LocalSavePatients(cacheStore)
    expect(cacheStore.deleteCallsCount).toBe(0)
  })

  test('should delete old cache on save', async () => {
    const cacheStore = new CacheStore()
    const localSavePatients = new LocalSavePatients(cacheStore)
    await localSavePatients.save()
    expect(cacheStore.deleteCallsCount).toBe(1)
  })
})
