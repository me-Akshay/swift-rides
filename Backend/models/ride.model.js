
const mongoose=require('mongoose');


const rideSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    captain:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'captain'
    },
    pickup:{
        type: String,
        required: true,

    },
    destination:{
        type: String,
        required: true,
    },
    fare :{
        type: Number,
        required: true
    },
    status :{
        type:String,
        enum:['pending','accepted','ongoing','cancelled','completed'],
        default:'pending'
    },
    duration:{
        type: Number,
        //in seconds
    },
    distance:{
        type: Number
        //in meter
    },
    paymentId :{
        type:String
    },
    orderId:{
        type:String,
    },
    signature:{
        type:String
    },
    otp:{
        type:String,
        select:false,
        required:true
    },
    tmp:{
        type:String
    }

    


})

//creating model 

const rideModel=mongoose.model('ride',rideSchema)

module.exports=rideModel