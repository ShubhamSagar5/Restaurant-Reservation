import mongoose from "mongoose";


const Connection = () => {
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"RestaurantReservation"
    })
    .then(()=>{
        console.log("Database Connected Successfully")
    })
    .catch((err)=>{
        console.log(err.message + err)
    })
}

export default Connection