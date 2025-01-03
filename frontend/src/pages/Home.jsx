import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import { use } from 'react'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false); //for pickup and drop panel
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);

  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);

  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);

  const [ waitingForDriver, setWaitingForDriver ] = useState(false)
  const waitingForDriverRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 20
        // opacity:1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
        // opacity:0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])


  // GSAP for vehicle Panel
  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0%)',
      })
    }

    else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehiclePanelOpen]);



  //GSAP for Confirm Ride Panel
  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0%)',
      })
    }

    else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePanel]);

  //GSAP for vehicle Found panel i.e looking for driver panel
  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0%)',
      })
    }

    else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehicleFound]);

  //GSAP for waiting for Driver panel
  useGSAP(function () {
    if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(waitingForDriverRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ waitingForDriver ])




  return (
    <div className=' h-screen  relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      {/* Image div background Screen */}
      <div className='h-screen w-screen  z-[-1]'>
        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" srcset="" />
      </div>

      {/* below Dialog box Div  and suggestion box */}

      <div className='  flex flex-col justify-end  h-screen absolute top-0  right-2 w-full p-3  '>

        {/* pickup and drop location input box */}
        <div className='h-[30%] p-5 bg-white '>

          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }} className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={handleSubmit}>
            <input
              className='bg-[#eee] text-base px-5 py-2 rounded-lg mb-3 mt-2  w-full'
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
              placeholder='Add your pickup location' />

            <input
              className='bg-[#eee]  text-base px-5 py-2 rounded-lg mb-2 mt-1 w-full'
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
              placeholder='Add your destination' />
          </form>
        </div>

        {/* suggestion box */}
        <div ref={panelRef} className='bg-white h-0  '>
          {/* logic for screen up before click h=0 after clic h=70% */}
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>



      </div>

      {/* Choose your ride box */}
      <div ref={vehiclePanelRef} className='fixed w-screen z-10 bg-white bottom-0 px-3 py-6  translate-y-full ' >

        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />

      </div>

      {/* confirmRidePanel */}
      <div ref={confirmRidePanelRef} className='fixed w-screen z-10 bg-white bottom-0 px-3 py-6  translate-y-full ' >

        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />

      </div>

      {/* vehicleFound Panel i.e Looking for driver */}
      <div ref={vehicleFoundRef} className='fixed w-screen z-10 bg-white bottom-0 px-3 py-6  translate-y-full ' >
        <LookingForDriver setVehicleFound={setVehicleFound}  setWaitingForDriver={setWaitingForDriver}/>
      </div>

      {/* Waiting for driver Panel */}
      <div ref={waitingForDriverRef} className='fixed w-full  z-10 bottom-0  bg-white px-3 py-6 pt-12 '>
                <WaitingForDriver
                    setVehicleFound={setVehicleFound}
                    setWaitingForDriver={setWaitingForDriver}
                     />
            </div>


    </div>
  )
}

export default Home