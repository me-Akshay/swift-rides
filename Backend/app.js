const dotenv= require('dotenv')
dotenv.config();


const express=require('express')

const cors=require('cors')
const app=express()
const connectToDb = require('./db/db')
connectToDb();

const cookieParser = require('cookie-parser')



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const userRoutes  =require('./routes/user.routes')
const captainRoutes=require('./routes/captain.routes')
const mapsRoutes=require('./routes/maps.routes')
const rideRoutes=require('./routes/ride.routes')


app.get("/",(req,res)=>{
    res.json("Hello PC")
})


app.use('/users',userRoutes)
app.use('/captains',captainRoutes)
app.use('/maps',mapsRoutes)
app.use('/rides',rideRoutes)

module.exports=app