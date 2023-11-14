// @ts-check
import http from 'node:http'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import multer from 'multer'
import compression from 'compression'

import './database.mjs'
import { corsMiddleware } from './middlewares/cors.mjs'
import { rootTypeDefs, rootResolvers } from './schema.mjs'

const app = express()
const httpServer = http.createServer(app)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const server = new ApolloServer({
  typeDefs: rootTypeDefs,
  resolvers: rootResolvers,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer })
  ]
})
await server.start()

app.use(
  // @ts-ignore
  corsMiddleware(),
  morgan('dev'),
  json(),
  urlencoded({ extended: true }),
  multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.match(/jpg|jpeg|png|gif|webp$i/)) {
        // @ts-ignore
        cb(new Error('<<< File not supported!. >>>'), false)
      }
      cb(null, true)
    },
    dest: join(__dirname, '/public/temp'),
    limits: {
      fileSize: 1024 * 1024 * 2
    }
  }).single('image'),
  compression(),
  express.static(join(__dirname, 'public')),
  expressMiddleware(server)
)
app.disable('x-powered-by')

// @ts-ignore
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))
console.log('🚀 Server ready at http://localhost:4000')
