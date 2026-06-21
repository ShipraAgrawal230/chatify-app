import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import messageRouter from './routes/message.route.js'
import path from 'path'

dotenv.config()

const app=express()
const __dirname=path.resolve()

const port=process.env.PORT || 5000

app.use("/api/auth",authRouter)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.get("*", (_, res) => {
  res.sendFile(
    path.join(__dirname, "frontend", "dist", "index.html")
  );
});
}

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
