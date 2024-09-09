import mongoose from "mongoose";


export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"Restaurant-Reservation"
    }).then(()=>{
        console.log("Database connect Successfully")
    }).catch((err)=>{
        console.log("Database Error" + err.message)
    })
}

