import express from 'express'
import 'express-async-errors'
import {json} from 'body-parser'
import {currentUserRouter} from './routes/current-user'
import {signinRouter} from './routes/signin'
import {signoutRouter} from './routes/signout'
import {signupRouter} from './routes/signup'
import {errorHandler} from './middlewares/error-handlers'
import {NotFoundError} from './errors/not-found-error'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express()
app.use(json())

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)
//put before error handler
app.all('*',async()=>{
throw new NotFoundError()
})
app.use(errorHandler)
app.listen(3000,()=>{
  console.log(`Listening on Ports 3000`)
})
