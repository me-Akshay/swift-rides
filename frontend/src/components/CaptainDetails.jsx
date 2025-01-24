import { React,useContext, useEffect }from 'react'

import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {

    const { captain, isLoading,tmp } = useContext(CaptainDataContext);

    // {console.log("details",captain)}

    


    return (
        <div>
            <div className='flex justify-between items-center mt-3'>

                <div className='flex items-center justify-start gap-5 m-2'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" alt="" />
                    <h4 className='text-lg font-semibold'> {captain.fullname.firstname} </h4>
                </div>

                <div className='p-2' >
                    <h4 className='text-xl text-center font-semibold'>{captain.vehicle.capacity}</h4>
                    <p>Max Capacity</p>
                </div>

            </div>

            <div className='flex justify-center items-center  gap-12 mt-4  p-2 bg-gray-100 rounded-full'>

                <div className='text-center'>
                   <i className=" text-2xl ri-taxi-fill"></i>
                    <h5 className='text-lg font-medium'>{captain.ridesCnt_accepted}</h5>
                    <p>Rides Accepted </p>
                </div>
                <div className='text-center'>
                <i className=" text-2xl ri-walk-line"></i>
                    <h5 className='text-lg font-medium'>{captain.ridesCnt_rejected}</h5>
                    <p>Rides Rejected</p>
                </div>
                {/* <div className='text-center'>
                    <i className="text-2xl ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>10.4</h5>
                    <p>Hours Online</p>
                </div> */}

            </div>
        </div>
    )
}

export default CaptainDetails



