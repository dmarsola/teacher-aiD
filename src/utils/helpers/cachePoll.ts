import axios, { AxiosError } from 'axios'

export async function pollForCacheValue(key: string, interval = 1000, maxAttempts = 10): Promise<string | null> {
  let attempts = 0

  return new Promise((resolve, reject) => {
    const poll = async () => {
      // console.info('DM cachePoll - key: ', key, 'interval:', interval, 'attempts', attempts)
      const cacheValue = await axios
        .get(`/api/result/${encodeURIComponent(key)}`)
        .then((res) => res.data)
        .then((res) => {
          return res
        })
        .catch((err: AxiosError) => {
          if (err.status == 404 && ++attempts <= maxAttempts) {
            // keep trying
            setTimeout(poll, interval)
            interval = Math.floor(interval * 1.15)
          } else {
            reject(new Error('Cannot retrieve lesson plan'))
          }
        })
      if (cacheValue && cacheValue.message == 'Success') {
        resolve(JSON.parse(cacheValue.data))
      } else if (attempts >= maxAttempts) {
        reject(new Error('Cannot retrieve lesson plan'))
      }
    }

    poll()
  })
}
