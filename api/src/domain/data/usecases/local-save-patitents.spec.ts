class LocalSavePatients {
  constructor(private readonly cacheStore: CacheStore) {}
}

interface CacheStore {

}

class CacheStore implements CacheStore {
  deleteCallsCount = 0
}

describe('LocalSavePatients', () => {
  test('should not delete cache on init', () => {
    const cacheStore = new CacheStore()
    
    const localSavePatients = new LocalSavePatients(cacheStore)
    expect(cacheStore.deleteCallsCount).toBe(0)
  })
})
