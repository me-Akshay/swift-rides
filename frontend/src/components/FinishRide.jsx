import React from 'react'
import {Link} from 'react-router-dom'

const FinishRide = (props) => {





  return (
    <div>
    <h5 onClick={() => { props.setFinishRidePanel(false) }} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
    <h3 className='text-2xl font-semibold mb-7'>Finish This Ride</h3>

    <div className='flex justify-between items-center mt-2 mb-4 bg-yellow-300 rounded-xl  '>
        <div className='flex items-center gap-2 h-20'>
            <img className='h-15 w-14 rounded-full object-cover pl-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" alt="" />
            <h4 className='text-lg font-semibold'>Harshita Patel</h4>
        </div>
        <h5>2.6KM</h5>
    </div>

    <div className='flex flex-col gap-4 justify-between items-center'>
        

        {/* pickup */}
        <div className='w-full flex items-center gap-3 border-b-2 mt-2 '>
            <i className=" text-3xl ri-map-pin-2-fill"></i>
            <div>
                <h4 className='font-semibold text-xl'>562/11-A</h4>
                <p>IIIT Koota Boys Hostel</p>
            </div>
        </div>
        {/* drop */}
        <div className='w-full flex items-center gap-3 border-b-2 mt-2 '>
            <i className=" text-3xl ri-map-pin-2-fill"></i>
            <div>
                <h4 className='font-semibold text-xl'>562/11-A</h4>
                <p>IIIT Koota Boys Hostel</p>
            </div>
        </div>
        {/* price */}
        <div className='w-full flex items-center gap-3  mt-2'>
            <i className="text-3xl ri-money-rupee-circle-fill"></i>
            <div>
                <h4 className='font-semibold text-xl'>562/11-A</h4>
                <p>IIIT Koota Boys Hostel</p>
            </div>
        </div>
        <div className='mt-5 w-full'>

        
        <Link to='/captain-home'  className=' flex justify-center font-bold  text-lg mt-3 bg-green-500 w-full py-4 px-13 rounded-lg text-white'>Complete Ride</Link>

        </div>


    </div>
</div>
  )
}

export default FinishRide
