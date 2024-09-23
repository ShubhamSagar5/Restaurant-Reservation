import mongoose from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name Must Be Contain At Least 3 Letter"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last Name Must Be Contain At Least 3 Letter"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please Provide Valid Email"]
    },
    phoneNumber:{
        type:String,
        required:true,
        minLength:[10],
        maxLength:[10]
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})

export const Reservation = mongoose.model("Reservation",reservationSchema)