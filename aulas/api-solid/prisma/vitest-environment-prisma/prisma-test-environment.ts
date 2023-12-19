import 'dotenv/config'

import { randomUUID } from 'node:crypto'
import { Environment } from 'vitest'

function generateDatabaseURL(schema: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('please provide DATABASE_URL env variable')
  }

  const url = new URL(process.env.DATABASE_URL)

  url.searchParams.set('schema', schema)

  return url.toString()
}

export default <Environment>{
  name: 'prisma',
  transformMode: 'web',
  async setup() {
    const schema = randomUUID()

    console.log(generateDatabaseURL(schema))

    return {
      teardown() {
        console.log('teardown')
      },
    }
  },
}
