import cache from '@/src/utils/helpers/cache'
import { sample } from '@/src/utils/sample_ai_response'
import { apiResponse, apiStatusCode } from '@/utils/constants/apiResponses'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { id } = await req.query
  if (id && !cache.has(id as string)) {
    // TODO: remove all this garbage! Cost saving during development
    cache.set(id as string, JSON.stringify(sample))
  }
  switch (req.method) {
    case 'GET':
      console.info('api retrieving cache for id: ', id)
      if (typeof id === 'string' && cache.has(id)) {
        res.status(apiStatusCode.OK).send({
          message: apiResponse.success,
          data: cache.get(id),
        })
      } else {
        res.status(apiStatusCode.NOT_FOUND).send({
          message: apiResponse.not_found,
        })
      }

    default:
      // Request is not recognized
      res.status(apiStatusCode.BAD_REQUEST).send({
        message: apiResponse.invalid_request,
      })
  }
}

export default handler
