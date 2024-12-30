import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      
      <div className='h-screen pt-8 w-full flex flex-col justify-between  bg-center bg-cover bg-[url(https://www.shutterstock.com/shutterstock/photos/1898241121/display_1500/stock-vector-car-sharing-and-online-application-concept-human-hands-holding-smartphone-with-application-of-1898241121.jpg)] '>

        <img  className='w-16 ml-8'  src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' />

        <div className='bg-white py-5 px-5'>
           
            <h2 className='text-3xl font-bold'>Get Started with GoSwift Rides</h2>
            <Link  to="/login" className=' flex items-center justify-center bg-black text-white py-2 px-4 rounded-full w-full mt-4'>Continue</Link>

        </div>

   


      </div>


    </div>
  )
}

export default Start
