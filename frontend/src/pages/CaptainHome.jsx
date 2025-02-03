import {React, useState,useRef,useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { CaptainDataContext } from '../context/CaptainContext'
import { SocketContext } from '../context/SocketContext'
import axios from 'axios'
import LiveTracking from '../components/LiveTracking'

const CaptainHome = () => {


const [ridePopUpPanel, setRidePopUpPanel] = useState(false)
const ridePopUpPanelRef = useRef(null)

const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)
const confirmRidePopUpPanelRef = useRef(null)

const [ride,setRide]=useState(null) //store all  details about the ride


const {captain}=useContext(CaptainDataContext)
const {socket}=useContext(SocketContext)


//to send message to the server
useEffect(() => {
  //joining of captain with the socket
  socket.emit('join', {
      userId: captain._id,
      userType: 'captain'
  })
  //real time updating the captain loaction after every 10 seconds
  const updateLocation = () => {
      
      if (navigator.geolocation) {

          navigator.geolocation.getCurrentPosition(position => {

              socket.emit('update-location-captain', {
                  userId: captain._id,
                  location: {
                      ltd: position.coords.latitude,
                      lng: position.coords.longitude
                  }
              })
          })
      }
  }

  const locationInterval = setInterval(updateLocation, 10000)
  updateLocation()

  // return () => clearInterval(locationInterval)
}, [])

//to listen message fromt he server(ride-details)
socket.on('new-ride', (data) => {
 // console.log("ride info for captain :", data);
   setRide(data)
  setRidePopUpPanel(true)

})


//To confirm the ride requested by the user
async function confirmRide() {

  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {

      rideId: ride._id,
      captainId: captain._id,


  }, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })

  setRidePopUpPanel(false)
  setConfirmRidePopUpPanel(true)

}



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

        <Link to='/captain/logout' className='fixed left-2 top-1 h-10 w-10 bg-white rounded-full flex items-center justify-center z-10' >
          <i class="ri-logout-box-line"></i>
        </Link>

      </div>


      <div className='h-3/5'>
        {/* <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" srcset="" /> */}
        <LiveTracking/>
      </div>

      <div className='h-2/5' >

      <CaptainDetails />
      </div>

      <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bottom-0  bg-white  px-3 py-10 pt-12  translate-y-full '>
      <RidePopUp 
      ride={ride}
      setRidePopUpPanel={setRidePopUpPanel} 
      confirmRide={confirmRide}
       setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>

      <div ref={confirmRidePopUpPanelRef} className='fixed w-full h-screen z-10 bottom-0  bg-white  px-3 py-10 pt-12  translate-y-full '>
      <ConfirmRidePopUp  ride={ride} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  setRidePopUpPanel={setRidePopUpPanel} />
      </div>

















    </div>


 



     

  )
}

export default CaptainHome





