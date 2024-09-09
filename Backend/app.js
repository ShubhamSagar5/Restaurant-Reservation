import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnection } from './Database/dbConnection.js'
import restaurantReservation from './Router/ResRouter.js'

const app = express() 

dotenv.config({
    path:"config/config.env"
})

app.use(cors({
    origin:[process.env.FRONTED_URL],
    methods:["GET","PUT","POST","DELETE"],
    credentials:true

}))

app.use(express.json())
app.use(express.urlencoded({extended:true})) 

app.use("/api/v1/reservation",restaurantReservation)



dbConnection()


export default app