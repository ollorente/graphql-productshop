// @ts-check
import { env } from 'node:process'
import { connect } from 'mongoose'

export default connect(env.MONGODB || 'mongodb://127.0.0.1/productshopDevelop', {})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err))
