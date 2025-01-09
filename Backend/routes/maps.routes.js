const express=require('express')
const router=express.Router()
const mapsController=require('../controllers/maps.controller')
const authMiddleware=require('../middlewares/auth.middleware')

const {query}=require('express-validator')


//to get coordinates

router.get('/get-coordinates',
query('address').isString().isLength({min:3}),
authMiddleware.authUser,mapsController.getCoordinates)

//to get distance b/w origin and dest AND their time

router.get('/get-distance',
query('origin').isString().isLength({min:3}),
query('destination').isString().isLength({min:3}),
authMiddleware.authUser,mapsController.getDistanceTime)

//get  auto complete suggestions

router.get('/get-suggestions',
query('input').isString().isLength({min:3}),
authMiddleware.authUser,mapsController.getAutoCompleteSuggestions)



module.exports=router