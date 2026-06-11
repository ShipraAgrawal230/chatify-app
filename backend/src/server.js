import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import messageRouter from './routes/message.route.js'

dotenv.config()

const app=express()

const port=process.env.PORT || 5000

app.use("/api/auth",authRouter)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})