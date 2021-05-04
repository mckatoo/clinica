import { CacheStore } from '@/data/protocols/cache'
import { SavePatients } from '@/domain'

import { LocalSavePatients } from './local-save-patient'

class CacheStoreSpy implements CacheStore {
  deleteCallsCount = 0
  insertCallsCount = 0
  deleteKey: string = ''
  insertKey: string = ''
  insertValues: Array<SavePatients.Params> = []

  delete (deleteKey: string): void {
    this.deleteCallsCount++
    this.deleteKey = deleteKey
  }

  insert (insertKey: string, value: any): void {
    this.insertCallsCount++
    this.insertKey = insertKey
    this.insertValues = value
  }

  simulateDeleteError (): void {
    jest.spyOn(CacheStoreSpy.prototype, 'delete').mockImplementationOnce(() => {
      throw new Error()
    })
  }

  simulateInsertError (): void {
    jest.spyOn(CacheStoreSpy.prototype, 'insert').mockImplementationOnce(() => {
      throw new Error()
    })
  }
}

type SutTypes = {
  sut: LocalSavePatients
  cacheStore: CacheStoreSpy
}

const mockPatient = (): Array<SavePatients.Params> => [
  {
    id: '1',
    name: 'John',
    address: 'Rua John',
    age: 111,
    pathology: 'doidão',
    telephne: 111111111
  },
  {
    id: '2',
    name: 'Maria',
    address: 'Rua Maria',
    age: 22,
    pathology: 'gripe',
    telephne: 222222222
  }
]

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
    await sut.save(mockPatient())
    expect(cacheStore.deleteCallsCount).toBe(1)
    expect(cacheStore.deleteKey).toBe('scheduled')
  })

  test('should not insert new Cache if delete fails', () => {
    const { sut, cacheStore } = makeSut()
    cacheStore.simulateDeleteError()
    const promise = sut.save(mockPatient())
    expect(cacheStore.insertCallsCount).toBe(0)
    expect(promise).rejects.toThrow()
  })
  
  test('should insert new Cache if delete succeeds', async () => {
    const { sut, cacheStore } = makeSut()
    await sut.save(mockPatient())
    expect(cacheStore.deleteCallsCount).toBe(1)
    expect(cacheStore.insertCallsCount).toBe(1)
    expect(cacheStore.insertKey).toBe('scheduled')
    expect(cacheStore.insertValues).toEqual(mockPatient())
  })
  
  test('should throw if insert throws', async () => {
    const { sut, cacheStore } = makeSut()
    cacheStore.simulateInsertError()
    const promise = sut.save(mockPatient())
    expect(promise).rejects.toThrow()
  })
})
