import {React,useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom' 
import { useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'


const CaptainSignup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const [ vehicleColor, setVehicleColor ] = useState('')
    const [ vehiclePlate, setVehiclePlate ] = useState('')
    const [ vehicleCapacity, setVehicleCapacity ] = useState('')
    const [ vehicleType, setVehicleType ] = useState('')
  
  
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const navigate = useNavigate();





// handle submit
const handleSubmit = async(e) => {

    e.preventDefault();
const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }


    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (res.status === 201) {
      const data = res.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setfirstName('')
    setlastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')

}





  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img  className='w-20  mb-5'  src='https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-online-taxi-booking-travel-service-flat-design-illustration-via-mobile-app-png-image_4750926.png' />


<form onSubmit={handleSubmit}>
{/* Full name  */}
<div >
<h3 className='text-base  font-medium mt-0' >What's your Name?</h3>
{/* first name */}
<div className='flex  gap-4'>
<input  
required
className='bg-[#EEEFEE]  w-1/2 mb-5 py-1 px-4 rounded  border  mt-2 text-base :placeholder text-base' 
type="text"
value={firstName}
onChange={(e) => {setfirstName(e.target.value)}}
placeholder='Firstname' />

{/* Last name */}
<input  
required
className='bg-[#EEEFEE] w-1/2  mb-5 py-2 px-4 rounded  border  mt-2 text-lg :placeholder text-base' 
type="text"
value={lastName}
onChange={(e) => {setlastName(e.target.value)}}
placeholder='Lastname' />
</div>


</div>



<h3 className='text-base  font-medium mt--1' >What's your email</h3>
{/* email */}
<input  
required
className='bg-[#EEEFEE]  mb-3 py-2 px-4 rounded  border w-full mt-2 text-base :placeholder text-base' 
type="email"
value={email}
onChange={(e) => {setEmail(e.target.value)}}
placeholder='abc@example.com' />
<h3 className='text-base  font-medium mt-'>Password</h3>
{/* password */}
<input 
required
className='bg-[#EEEFEE]  mb-2 py-2 px-4 rounded  border w-full mt-3 text-base :placeholder text-base' 
value={password}
onChange={(e) => {setPassword(e.target.value)}}
type="password"

placeholder='password' />

{/* Vechile Details */}

<h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>

          {/* Color and plate number */}
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>

          {/* Capacity and type */}
          <div className='flex gap-4 mb-7'>
  <select
    required
    className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-base'
    value={vehicleCapacity}
    onChange={(e) => {
      setVehicleCapacity(e.target.value)
    }}
  >
    <option value="" disabled>Vehicle Capacity</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
  <select
    required
    className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-base'
    value={vehicleType}
    onChange={(e) => {
      setVehicleType(e.target.value)
    }}
  >
    <option value="" disabled>Vehicle Type</option>
    <option value="car">Car</option>
    <option value="auto">Auto</option>
    <option value="motorcycle">Motorcycle</option>
  </select>
</div>



<button
className='bg-[#111]  mb-5 py-2 px-4 rounded   w-full mt-2 text-lg text-white font-semibold' >Signup</button>

<p className='text-center'> Already part of fleet?  <Link to="/captain-login" className='text-blue-600'>Sign in </Link>  </p>


</form>

    </div>

    {/* <div>
      <p className='text-xs'>
      This site is protected by reCAPTCHA and the Google
Policy and Terms of Service apply.
Privacy


      </p>
    </div> */}

 
</div>
  )
}

export default CaptainSignup
