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
    const result = await Test.findOne({ taskTypes: { $exists: true } })
    res.end(JSON.stringify(result))
  } catch (error) {
    console.log('My Error Message: ', error)
    res.end(JSON.stringify(error))
  }

  // fetchData().then((data) => res.end(JSON.stringify(data)))
  // res.end(JSON.stringify(database))
}
