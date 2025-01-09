const rideService = require('../services/ride.service');
const {validationResult} = require('express-validator');
const mapService=require('../services/maps.service')
const {sendMessageToSocketId} = require('../socket');
const rideModel = require('../models/ride.model');

module.exports.createRide = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
        const {pickup,destination,vehicleType}=req.body;
    try{
        //ride created by the user
        const ride=await rideService.createRide({user:req.user._id,pickup,destination,vehicleType});
        res.status(201).json(ride);
        console.log("inside create-ride ,ride created")

        //get the coordinates of the pickup location
        const pickupCoordinates = await mapService.getAddressCoordinate(pickup);
        // pickupCoordinates.ltd=25.0507404;
        // pickupCoordinates.lng=75.828792;
        
        //just selecting the captains within the radius
        const captainsInRadius = await mapService.getCaptainsInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 200);
       

        ride.otp="" //to prevent sending otp to the captains

        //sending the ride message to all the captains In radius
        const rideWithUser = await rideModel.findOne({ _id: ride._id }).populate('user');
        //   console.log("ride with user",rideWithUser)
      console.log("captains in radius",captainsInRadius)
        captainsInRadius.map(captain=>{
            
            console.log("message is going to this captain ", captain.socketId)
            //sending msg through socket
            sendMessageToSocketId(captain.socketId,{
                event:'new-ride',
                data:rideWithUser
            });

        })





      
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }

}


//to get fare
module.exports.getFare = async (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });    
    }

    const {pickup,destination}=req.query;

    try{

        const fare=await rideService.getFare(pickup,destination);
        res.status(200).json(fare);

    }catch(err){
        return res.status(500).json({message:err.message});
    }


}

