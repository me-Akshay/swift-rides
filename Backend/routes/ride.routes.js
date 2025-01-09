
const express=require('express')
const router=express.Router()
const rideController=require('../controllers/ride.controller')
const {body,query}=require('express-validator')
const authMiddleware=require('../middlewares/auth.middleware')

//to create ride
router.post('/create-ride',
authMiddleware.authUser,
body('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup Location'),  
body('destination').isString().isLength({min:3}).withMessage('Invalid Destination Location'),
body('vehicleType').isIn(['car','moto','auto']).withMessage('Invalid vehicle type'),
rideController.createRide
)

//to get fare details for all 3 vehicle types
router.get('/get-fare',
query('pickup').isString().isLength({min:3}),
query('destination').isString().isLength({min:3}),
authMiddleware.authUser,rideController.getFare
)




module.exports=router