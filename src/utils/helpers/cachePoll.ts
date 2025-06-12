import axios from 'axios'

export async function pollForCacheValue(key: string, interval = 1000, maxAttempts = 30): Promise<string | null> {
  let attempts = 0

  return new Promise((resolve, reject) => {
    const poll = async () => {
      // console.info('pollForCacheValue key: ', key, 'interval:', interval, 'attempts', attempts)
      try {
        const cacheValue = await axios.get(`/api/result/${encodeURIComponent(key)}`).then((res) => res.data)

        if (cacheValue && cacheValue.message == 'Success') {
          resolve(JSON.parse(cacheValue.data))
        } else if (++attempts >= maxAttempts) {
          reject(new Error('Max attempts reached without result'))
        } else {
          setTimeout(poll, interval)
          interval *= 10
        }
      } catch (err) {
        console.error('error caught when polling: ', err)
        reject(err)
      }
    }

    poll()
  })
}
