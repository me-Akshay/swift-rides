const express=require('express')
const router=express.Router()
const userController=require('../controllers/user.controller')
const {body}=require('express-validator')
const authMiddleware=require('../middlewares/auth.middleware')

//register

router.post('/register', [
    //req body validation
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
],
    userController.registerUser
)

//login 
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], userController.loginUser)


//logout 
router.get('/logout',authMiddleware.authUser,userController.logoutUser)

//protected route profile-page
router.get('/profile',authMiddleware.authUser,userController.getUserProfile)




module.exports=router