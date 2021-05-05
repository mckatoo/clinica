export interface CacheStore {
  delete: (deleteKey: string) => void
  insert: (insertKey: string, values: any) => void
  replace: (key: string, values: any) => void
}