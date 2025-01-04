import {React, useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {


const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
const ridePopUpPanelRef = useRef(null)

const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)
const confirmRidePopUpPanelRef = useRef(null)






//GSAP for ride Pop up panel

useGSAP(function () {
  if (ridePopUpPanel) {
    gsap.to(ridePopUpPanelRef.current, {
      transform: 'translateY(0%)',
    })
  }

  else {
    gsap.to(ridePopUpPanelRef.current, {
      transform: 'translateY(100%)',
    })
  }
}, [ridePopUpPanel]);


//GSAP for confirm Ride pop-up panel
useGSAP(function () {
  if (confirmRidePopUpPanel) {
    gsap.to(confirmRidePopUpPanelRef.current, {
      transform: 'translateY(0%)',
    })
  }

  else {
    gsap.to(confirmRidePopUpPanelRef.current, {
      transform: 'translateY(100%)',
    })
  }
}, [confirmRidePopUpPanel]);






  return (
    <div className='h-screen'>
       <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div>

        <Link to='/captain/logout' className='fixed right-2 top-1 h-10 w-10 bg-white rounded-full flex items-center justify-center' >
          <i class="ri-logout-box-line"></i>
        </Link>

      </div>


      <div className='h-3/5'>
        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" srcset="" />
      </div>

      <div className='h-2/5' >

      <CaptainDetails />
      </div>

      <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bottom-0  bg-white  px-3 py-10 pt-12  translate-y-full '>
      <RidePopUp setRidePopUpPanel={setRidePopUpPanel}  setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>

      <div ref={confirmRidePopUpPanelRef} className='fixed w-full h-screen z-10 bottom-0  bg-white  px-3 py-10 pt-12  translate-y-full '>
      <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  setRidePopUpPanel={setRidePopUpPanel} />
      </div>

















    </div>


 



     

  )
}

export default CaptainHome




