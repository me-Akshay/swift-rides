const mongoose =require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "First name must be  of at least 3 characters"]
        },
        lastname: {
            type: String
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [5, "Password must be at least 5 characters"],
        select: false
    },
    socketId: {
        type: String
    },
    vehicle: {
        color: {
            type:String,
            required: true,
            minlength: [3, "Color must be  of at least 3 characters"]
        },
        plate:{
            type:String,
            required: true,
            minlength: [3, "Plate must be  of at least 3 characters"]
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"],
            max: [4, "Capacity must be at most 4"]
        },
        vehicleType:{
            type:String,
            required: true,
            enum:['car','motorcycle','auto']
        }
    },
    status: {
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    location:{
        lat:{
            type: Number,
        },
        long:{
            type: Number,
        }

    }
})

//methods

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    return token    
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

//hashing of password

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}


//model
const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel