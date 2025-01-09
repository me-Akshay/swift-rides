import {React,useContext, useEffect} from 'react'
import { Link , useNavigate} from 'react-router-dom' 
import { useState } from 'react'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { captain,updateCaptain,setCaptain} = useContext(CaptainDataContext)




// handle submit
// const handleSubmit = async(e) => {
//     e.preventDefault();
//     const payload = {
//         email: email,
//         password
//       }

//       const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, payload)

//       if (res.status === 200) {
//         const data = res.data
        
  
//         // setCaptain(data.captain)
//        await updateCaptain(data.captain) ;
//        console.log("inside login ",captain);
        
//         localStorage.setItem('token', data.token)
//         navigate('/captain-home')
  
//       }


//     setEmail('');
//     setPassword(''); 
// }


const handleSubmit = async (e) => {
  e.preventDefault();
  const payload = {
    email: email,
    password
  }

  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, payload)

  if (response.status === 200) {
    const data = response.data
     
setCaptain(data.captain)
     
    localStorage.setItem('token', data.token)
    navigate('/captain-home')

  }

  setEmail('')
  setPassword('')
}







  return (

    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img  className='w-20  mb-8'  src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' />


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

<p className='text-center'> Join a fleet ?  <Link to="/captain-signup" className='text-blue-600'>Register as a Captain</Link>  </p>


</form>

    </div>

    <div>
        <Link to={"/login"} className='bg-[#d5622d] flex items-center justify-center  mb-5 py-2 px-4 rounded   w-full mt-4 text-lg text-white font-semibold'>Sign in as User</Link>
    </div>

 
</div>

  )
}

export default CaptainLogin
