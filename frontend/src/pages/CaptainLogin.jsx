import React from 'react'
import { Link } from 'react-router-dom' 
import { useState } from 'react'

const CaptainLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setcaptainData] = useState({});//holds the user info


// handle submit
const handleSubmit = (e) => {
    e.preventDefault();
    setcaptainData({
        email:email,
        password:password
    })
    console.log(email,password);
    console.log(captainData);
    setEmail('');
    setPassword(''); 
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
