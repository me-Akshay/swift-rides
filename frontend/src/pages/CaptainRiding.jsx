import {React, useState,useRef} from 'react'
import { Link,useLocation } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LiveTracking from '../components/LiveTracking'

const CaptainRiding = () => {

const [finishRidePanel, setFinishRidePanel] = useState(false)
const finishRidePanelRef = useRef(null)
const location = useLocation()
const rideData = location.state?.ride //abstracted the ride data from the location state

//GSAP to open FinishRide panel
useGSAP(function () {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0%)',
      })
    }
  
    else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [finishRidePanel]);


  return (
    <div className='h-screen'>
       

    <div>

      <Link to='/captain/logout' className='fixed left-2 top-1 h-10 w-10 bg-white rounded-full flex items-center justify-center' >
        <i class="ri-logout-box-line"></i>
      </Link>

    </div>

    {/* map div */}

    <div className='h-4/5 '>
      {/* <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" srcset="" /> */}
      <LiveTracking/>
    </div>

    {/* drop-off div */}
    <div className='h-1/5 bg-yellow-400 flex items-center justify-between relative'>
    <h5 onClick={() => {setFinishRidePanel(true)}}  className='p-1 text-center w-[93%] absolute top-0'><i className="text-4xl text-black ri-arrow-up-wide-line"></i></h5>
        <h4 className=' p-2  ml-2 text-xl font-semibold'>4 KM Away</h4>
        <button onClick={() => {setFinishRidePanel(true)}} className='bg-green-500 text-white font-semibold rounded-lg p-3 px-10 mr-1'>Complete Ride</button>

    </div>


    {/* Finish Ride panel  */}
    <div ref={finishRidePanelRef} className='fixed w-full h-screen z-10 bottom-0  bg-white  px-3 py-10 pt-12  translate-y-full '>
      <FinishRide                     
      ride={rideData}
      setFinishRidePanel={setFinishRidePanel} /> 
      </div>




















  </div>
  )
}

export default CaptainRiding
