import { CacheStoreSpy, mockPatient } from '@/data/tests'
import { SavePatients } from '@/domain/usecases'

import { LocalSavePatients } from './local-save-patient'

type SutTypes = {
  sut: LocalSavePatients
  cacheStore: CacheStoreSpy
}

const makeSut = (timestamp = new Date()): SutTypes => {
  const cacheStore = new CacheStoreSpy()
  const sut = new LocalSavePatients(cacheStore, timestamp)
  return {
    sut,
    cacheStore
  }
}

describe('LocalSavePatients', () => {
  let patients: Array<SavePatients.Params>

  beforeEach(() => {
    patients = []
    patients = mockPatient(10)
  })

  test('should not or insert delete cache on init', () => {
    const { cacheStore } = makeSut()

    expect(cacheStore.messages).toEqual([])
  })

  test('should not insert new Cache if delete fails', async () => {
    const { sut, cacheStore } = makeSut()
    cacheStore.simulateDeleteError()
    const promise = sut.save(patients)

    expect(cacheStore.messages).toEqual([CacheStoreSpy.Message.delete])
    await expect(promise).rejects.toThrow()
  })

  test('should insert new Cache if delete succeeds', async () => {
    const timestamp = new Date()
    const { sut, cacheStore } = makeSut(timestamp)
    await sut.save(patients)

    expect(cacheStore.messages).toEqual([
      CacheStoreSpy.Message.delete,
      CacheStoreSpy.Message.insert
    ])
    expect(cacheStore.deleteKey).toBe('scheduled')
    expect(cacheStore.insertKey).toBe('scheduled')
    expect(cacheStore.insertValues).toEqual({
      timestamp,
      value: patients
    })
  })

  test('should throw if insert throws', async () => {
    const { sut, cacheStore } = makeSut()
    cacheStore.simulateInsertError()
    const promise = sut.save(patients)

    expect(cacheStore.messages).toEqual([
      CacheStoreSpy.Message.delete,
      CacheStoreSpy.Message.insert
    ])
    await expect(promise).rejects.toThrow()
  })
})
