import { postsRoutes } from './routes/posts.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
const app = express()
app.use(cors())
app.use(bodyParser.json())
postsRoutes(app)
app.get('/', (req, res) => {
res.send('Hello from Express!')
})
export { app }
