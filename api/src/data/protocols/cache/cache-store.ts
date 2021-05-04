export interface CacheStore {
  delete: (deleteKey: string) => void
  insert: (insertKey: string) => void
}