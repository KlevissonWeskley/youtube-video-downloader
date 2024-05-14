import express from 'express'
import { createServer } from 'node:http'
import path from 'node:path'
import url from 'node:url'
import routes from './routes.js'

const app = express()
const server = createServer(app)

const currentPath = url.fileURLToPath(import.meta.url)
const publicDir = path.join(currentPath, '../../', 'public')
app.use(express.static(publicDir))

app.use(routes)

server.listen(3333, () => {
    console.log('Http server running!')
})