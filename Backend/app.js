import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Connection from './src/Database/dbConnection.js'
import reservationRouter from "./src/Routes/reservationRoutes.js"


const app = express() 

dotenv.config({
    path:"./config/config.env"
})

app.use(cors({
    origin:[process.env.FRONTED_URL],
    methods:["POST"],
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("Hello ")
})
app.use("/api/v1/reservation",reservationRouter)


Connection()


export default app