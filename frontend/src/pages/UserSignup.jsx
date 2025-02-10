import {React,useContext} from 'react'
import { Link } from 'react-router-dom' 
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   // const [userData, setUserData] = useState({});//holds the user info
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const navigate = useNavigate();
    const {user,setUser} =useContext(UserDataContext);
// handle submit
const handleSubmit = async (e) => {
    e.preventDefault();
    const newUserData = {
      fullname: {
        firstname: fname,
        lastname: lname,
    },
        email: email,
        password: password,
    };
    //sending the data to backend
    const base = import.meta.env.VITE_BASE_URL

    const res=await axios.post(`${base}/users/register`,newUserData);
    if(res.status===201){

      setUser(res.data.newUser);
      localStorage.setItem('token',res.data.token);
      navigate('/home');
    
    }
   
    
    // Clear input fields
    setFname('');
    setLname('');
    setEmail('');
    setPassword('');

}

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img  className='w-20  mb-8'  src='https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-online-taxi-booking-travel-service-flat-design-illustration-via-mobile-app-png-image_4750926.png' />
       
<form onSubmit={handleSubmit}>
    {/* Full name  */}
    <div >
    <h3 className='text-base  font-medium' >What's your Name?</h3>
{/* first name */}
<div className='flex  gap-4'>
<input  
required
className='bg-[#EEEFEE]  w-1/2 mb-5 py-1 px-4 rounded  border  mt-2 text-base :placeholder text-base' 
type="text"
value={fname}
onChange={(e) => {setFname(e.target.value)}}
  placeholder='Firstname' />
{/* Last name */}
<input  
required
className='bg-[#EEEFEE] w-1/2  mb-5 py-2 px-4 rounded  border  mt-2 text-lg :placeholder text-base' 
type="text"
value={lname}
onChange={(e) => {setLname(e.target.value)}}
  placeholder='Lastname' />
</div>
    </div>
<h3 className='text-base  font-medium mt--1' >What's your email</h3>
{/* email */}
<input  
required
className='bg-[#EEEFEE]  mb-5 py-2 px-4 rounded  border w-full mt-2 text-base :placeholder text-base' 
type="email"
value={email}
onChange={(e) => {setEmail(e.target.value)}}
  placeholder='abc@example.com' />
<h3 className='text-base  font-medium mt-'>Password</h3>
{/* password */}
<input 
required
className='bg-[#EEEFEE]  mb-5 py-2 px-4 rounded  border w-full mt-4 text-base :placeholder text-base' 
value={password}
onChange={(e) => {setPassword(e.target.value)}}
type="password"
placeholder='password' />
<button
className='bg-[#111]  mb-5 py-2 px-4 rounded   w-full mt-4 text-lg text-white font-semibold' >Signup</button>
 <p className='text-center'> Already have an account?  <Link to="/login" className='text-blue-600'>Sign in </Link>  </p>
</form>
        </div>

        <div>
          <p className='text-xs'>
          This site is protected by reCAPTCHA and the Google
Policy and Terms of Service apply.
Privacy
          </p>
        </div>
     
    </div>
  )
}

export default UserSignup