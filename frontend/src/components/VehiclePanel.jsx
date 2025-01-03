import React from 'react'

const VehiclePanel = (props) => {
  
   
  
    return (
    <div>
      
      <h5 onClick={() => {props.setVehiclePanelOpen(false)} }  className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

<h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
          {/* auto */}
  <div  onClick={() => {props.setConfirmRidePanel(true)} } className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
        <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
        <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Auto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 mins away </h5>
            <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹192.30</h2>
    
    
    </div>      

          {/*car  */}
    <div  onClick={() => {props.setConfirmRidePanel(true)} } className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
        <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
        <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Car <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 mins away </h5>
            <p className='font-normal text-xs text-gray-600'>Affordable Car rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹192.30</h2>
    
    
    </div>     
    {/* motorbike */}
    <div onClick={() => {props.setConfirmRidePanel(true)} } className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
        <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png" alt="" />
        <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>MotorBike <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 mins away </h5>
            <p className='font-normal text-xs text-gray-600'>Affordable Moto rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹192.30</h2>
    
    
    </div>   


    </div>
  )
}

export default VehiclePanel
