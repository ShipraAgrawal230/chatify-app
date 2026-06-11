import express from 'express'

const router=express.Router()

router.get("/api/auth/signup",(req,res)=>{
    res.send("signup request")
})

router.get("/api/auth/login",(req,res)=>{
    res.send("login request")
})

router.get("/api/auth/logout",(req,res)=>{
    res.send("logout request")
})
export default router