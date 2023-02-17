import { Schema, model, models, connect, connection } from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'
import { database } from '../../database'

export default async function db(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  try {
    console.log('connecting to Mongo...')
    await connect(process.env.MONGOURI)
    console.log('connected to Mongo!')
    const mySchema = new Schema({
      taskTypes: [
        {
          id: Number,
          title: String,
          description: String,
          taskTests: [
            {
              id: Number,
              title: String,
              tasks: [
                {
                  id: Number,
                  title: String,
                  answers: [
                    {
                      id: Number,
                      text: String,
                      check: Boolean,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    })
    const Test = models['TESTS'] || model('TESTS', mySchema, 'TESTS')
    console.log('fetching data...')
    const result = await Test.findOne({ taskTypes: { $exists: true } })
    console.log('data fetched')
    // res.end(JSON.stringify(result))
    res.end('The database is migrated to Mongo')
  } catch (error) {
    console.log('URI: ', process.env.MONGOURI)
    console.log('My Error Message: ', error)
    res.end(JSON.stringify(error))
  }

  // fetchData().then((data) => res.end(JSON.stringify(data)))
  // res.end(JSON.stringify(database))
}
