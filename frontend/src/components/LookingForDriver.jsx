import React from 'react'

const LookingForDriver = (props) => {

    
  return (
    <div>
    <h5 onClick={()=>{props.setVehicleFound(false)}}  className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
    <h3 className='text-2xl font-semibold mb-5'>Loooking for Driver</h3>

    <div className='flex flex-col gap-2 justify-between items-center'>
    <img className='h-40' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
    
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
    
    
    </div>


</div>
  )
}

export default LookingForDriver
