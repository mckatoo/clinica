import { CacheStore } from '@/data/protocols/cache'
import { LocalSavePatients } from './local-save-patient'

class CacheStoreSpy implements CacheStore {
  deleteCallsCount = 0
  key: string = ''

  delete (key: string): void {
    this.deleteCallsCount++
    this.key = key
  }
}

type SutTypes = {
  sut: LocalSavePatients
  cacheStore: CacheStoreSpy
}

const makeSut = (): SutTypes => {
  const cacheStore = new CacheStoreSpy()
  const sut = new LocalSavePatients(cacheStore)
  return {
    sut,
    cacheStore
  }
}

describe('LocalSavePatients', () => {
  test('should not delete cache on init', () => {
    const { cacheStore } = makeSut()
    expect(cacheStore.deleteCallsCount).toBe(0)
  })

  test('should delete old cache on save', async () => {
    const { sut, cacheStore } = makeSut()
    await sut.save()
    expect(cacheStore.deleteCallsCount).toBe(1)
    expect(cacheStore.key).toBe('scheduled')
  })
})
