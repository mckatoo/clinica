import { CacheStore } from '@/data/protocols/cache'
import { SavePatients } from '@/domain/usecases'

export class CacheStoreSpy implements CacheStore {
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