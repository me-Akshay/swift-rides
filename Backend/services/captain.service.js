const captainModel=require('../models/captain.model')




module.exports.createCaptain=async ({firstname,lastname,email,password,plate,color,capacity,vehicleType})=>{

if(!firstname || !lastname || !email || !password || !plate || !color || !capacity || !vehicleType){

    // console.log("dfsdfsdfsdf")
    // console.log(firstname,lastname,email,password,plate,color,capacity,vehicleType)
    throw new Error('All fields are required');
}

//to add user in db
const captain = await captainModel.create({
    fullname: {
        firstname: firstname,
        lastname: lastname
    },
    email,
    password,
    vehicle: {
        plate,
        color,
        capacity,
        vehicleType
    }
})

return captain

}