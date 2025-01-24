import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import { useState,useContext } from 'react'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});//holds the user info

    const {user,setUser} =useContext(UserDataContext);//global variables
    const navigate = useNavigate();


// handle submit
const handleSubmit = async(e) => {
    e.preventDefault();

    const payload={
      email:email,
      password:password
    }

    //sending the data to backend
    const base = import.meta.env.VITE_BASE_URL;
    const res= await  axios.post(`${base}/users/login`,payload);

    if(res.status===200){
      //{token,user}
      
      setUser(res.data.user);
      
      localStorage.setItem('token',res.data.token);
      console.log("login token :" , res.data.token);
      navigate('/home');

    }

    // console.log(userData);


    setEmail('');
    setPassword(''); 
}







  return (
    
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img  className='w-20  mb-8'  src='https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-online-taxi-booking-travel-service-flat-design-illustration-via-mobile-app-png-image_4750926.png' />


<form onSubmit={handleSubmit}>

<h3 className='text-xl  font-medium' >What's your email</h3>
{/* email */}
<input  
required
className='bg-[#EEEFEE]  mb-5 py-2 px-4 rounded  border w-full mt-4 text-lg :placeholder text-xm' 
type="email"
value={email}
onChange={(e) => {setEmail(e.target.value)}}
  placeholder='abc@example.com' />
<h3 className='text-xl  font-medium'>Password</h3>
{/* password */}
<input 
required
className='bg-[#EEEFEE]  mb-5 py-2 px-4 rounded  border w-full mt-4 text-lg :placeholder text-xm' 
value={password}
onChange={(e) => {setPassword(e.target.value)}}
type="password"

placeholder='password' />

<button
className='bg-[#111]  mb-5 py-2 px-4 rounded   w-full mt-4 text-lg text-white font-semibold' >Login</button>

 <p className='text-center'> New here?  <Link to="/signup" className='text-blue-600'>Create Account </Link>  </p>


</form>

        </div>

        <div>
            <Link to={"/captain-login"} className='bg-[#10b461] flex items-center justify-center  mb-5 py-2 px-4 rounded   w-full mt-4 text-lg text-white font-semibold'>Sign in as Captain</Link>
        </div>

     
    </div>
  )
}

export default UserLogin
