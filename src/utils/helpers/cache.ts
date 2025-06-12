// this is a backend cache for the values to be retrieved later
// the frontend should call the endpoint api/result/[id]

const cache: Map<string, string> = new Map()

export default {
  get(key: string) {
    console.info('cache get: ', key)
    return cache.get(key)
  },
  set(key: string, value: string): boolean {
    console.info('cache set key:', key)
    try {
      cache.set(key, value)
      return true
    } catch (err) {
      // log error
      console.error(err)
    }
    return false
  },
  has(key: string): boolean {
    console.info('cache has: ', key)
    return cache.has(key)
  },
  delete(key: string): boolean {
    console.info('cache delete: ', key)
    try {
      cache.delete(key)
      return true
    } catch (err) {
      // log error
      console.error(err)
    }
    return false
  },
  clear() {
    console.info('cache clear!')
    cache.clear()
  },
}
