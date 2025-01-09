import {React,useState} from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const handleSubmit =async (e) => {
        e.preventDefault();
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
             props.setConfirmRidePopUpPanel(false)
            props.setRidePopUpPanel(false)
            navigate('/captain-riding', { state: { ride: props.ride } })
        }

       
    }

    const handleClickIgnore = () => {
        props.setConfirmRidePopUpPanel(false);
        props.setRidePopUpPanel(false);
    }








  return (
    <div>
    <h5 onClick={() => { props.setConfirmRidePopUpPanel(false) }} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
    <h3 className='text-2xl font-semibold mb-7'>This is Confirm Ride Pop-up Panel</h3>

    <div className='flex justify-between items-center mt-2 mb-4 bg-yellow-300 rounded-xl  '>
        <div className='flex items-center gap-2 h-20'>
            <img className='h-15 w-14 rounded-full object-cover pl-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" alt="" />
            <h4 className='text-lg font-semibold'>  {props.ride?.user.fullname.firstname+" "+props.ride?.user.fullname.lastname}</h4>
        </div>
        <h5>2.6KM</h5>
    </div>

    <div className='flex flex-col gap-4 justify-between items-center'>
        

        {/* pickup */}
        <div className='w-full flex items-center gap-3 border-b-2 mt-2 '>
            <i className=" text-3xl ri-map-pin-2-fill"></i>
            <div>
                <h4 className='font-semibold text-xl'>Pickup</h4>
                <p> {props.ride?.pickup} </p>
            </div>
        </div>
        {/* drop */}
        <div className='w-full flex items-center gap-3 border-b-2 mt-2 '>
            <i className=" text-3xl ri-map-pin-2-fill"></i>
            <div>
                <h4 className='font-semibold text-xl'>Destination</h4>
                <p> {props.ride?.destination} </p>
            </div>
        </div>
        {/* price */}
        <div className='w-full flex items-center gap-3  mt-2'>
            <i className="text-3xl ri-money-rupee-circle-fill"></i>
            <div>
                <h4 className='font-semibold text-xl'>Price</h4>
                <p>{props.ride?.fare} </p>
            </div>
        </div>
        <div className='mt-3 w-full'>

        <form  onSubmit={handleSubmit}>
        <input
         type="text" 
         value={otp}
         onChange={(e) => setOtp(e.target.value)}
         className='bg-[#eee] text-base px-5 py-3 rounded-lg mb-2 mt-1 font-semibold  w-full'
         placeholder="Enter OTP" />
        
        <button   className=' flex justify-center font-bold mt-3 bg-green-500 w-full py-2 px-13 rounded-lg text-white'>Accept</button>
        <button onClick={handleClickIgnore} className='font-bold mt-3 bg-red-500 w-full py-2 px-13 rounded-lg text-white'>Cancel</button>


        </form>

        </div>


    </div>
</div>
  )
}

export default ConfirmRidePopUp
