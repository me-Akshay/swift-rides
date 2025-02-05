const express=require('express')
const router=express.Router()
const {body}=require('express-validator')
const captainController=require('../controllers/captain.controller')
const authMiddleware=require('../middlewares/auth.middleware')


//register captain

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must atleast 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type')

], captainController.registerCaptain)

//login captain

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], captainController.loginCaptain)

//logout captain

router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain)

//protected route profile-page

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile)

//update ridecnt accepted
router.put('/update-ridecnt-accepted',authMiddleware.authCaptain,captainController.updateCaptainRidecntAccepted);

//update ridecnt rejected
router.put('/update-ridecnt-rejected',authMiddleware.authCaptain,captainController.updateCaptainRidecntRejected);






module.exports=router