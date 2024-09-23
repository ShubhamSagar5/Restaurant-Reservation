import { Reservation } from "../Models/reservationModels.js"




export const sendReservation = async(req,res,next) => {
    
    
   
   
    try {
         const {firstName,lastName,email,phoneNo,time,date} = req.body

    
        

        if(!firstName || !lastName || !email || !phoneNo || !time || !date ){
            return res.status(400).json({
                success:false,
                message:"Please Provide All Details"
            })
        }

        const reservation = await Reservation.create({firstName:firstName,lastName:lastName,email:email,phoneNumber:phoneNo,time:time,date:date})

        return res.status(200).json({
            success:true,
            reservation,
            message :"Reservation Send Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,

        })
    }
}