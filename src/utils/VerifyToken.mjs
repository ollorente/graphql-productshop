// @ts-check
import { env } from 'node:process'
import JWT from 'jsonwebtoken'

export default (headers) => {
  const token = headers.authorization
  if (!token) throw new Error('Access denied')

  try {
    const bearer = token.split(' ')[1]
    const verified = JWT.verify(bearer, env.SECRET_KEY || '')

    return verified
  } catch (error) {
    console.log(error)
    throw new Error('Invalid token')
  }
}