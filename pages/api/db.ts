import { NextApiRequest, NextApiResponse } from 'next'
import { database } from '../../database'

export default function db(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(database))
}
