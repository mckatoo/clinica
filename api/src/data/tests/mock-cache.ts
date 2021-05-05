import { CacheStore } from '@/data/protocols/cache'
import { SavePatients } from '@/domain/usecases'

export class CacheStoreSpy implements CacheStore {
  actions: Array<CacheStoreSpy.Action> = []
  deleteKey: string = ''
  insertKey: string = ''
  insertValues: Array<SavePatients.Params> = []

  delete (deleteKey: string): void {
    this.actions.push(CacheStoreSpy.Action.delete)
    this.deleteKey = deleteKey
  }

  insert (insertKey: string, value: any): void {
    this.actions.push(CacheStoreSpy.Action.insert)
    this.insertKey = insertKey
    this.insertValues = value
  }

  replace (key: string, value: any): void {
    this.delete(key)
    this.insert(key, value)
  }

  simulateDeleteError (): void {
    jest.spyOn(CacheStoreSpy.prototype, 'delete').mockImplementationOnce(() => {
      this.actions.push(CacheStoreSpy.Action.delete)
      throw new Error()
    })
  }

  simulateInsertError (): void {
    jest.spyOn(CacheStoreSpy.prototype, 'insert').mockImplementationOnce(() => {
      this.actions.push(CacheStoreSpy.Action.insert)
      throw new Error()
    })
  }
}

export namespace CacheStoreSpy {
  export enum Action {
    delete,
    insert
  }
}
