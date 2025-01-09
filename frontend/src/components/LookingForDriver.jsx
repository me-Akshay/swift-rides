import {React,useState,useEffect} from 'react'

const LookingForDriver = (props) => {

  const [url,setUrl]=useState('')
   
    
    useEffect(() => {
        const urls = {
            auto: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png',
            car: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png',
            moto: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png'
        }
        
        setUrl(urls[props.vehicleType] || '')
    }, [props.vehicleType])


    
  return (
    <div>
    <h5 onClick={()=>{props.setVehicleFound(false)}}  className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
    <h3 className='text-2xl font-semibold mb-5'>Loooking for Driver</h3>

    <div className='flex flex-col gap-2 justify-between items-center'>
    <img className='h-40' src={url}  alt="" />
    
    {/* pickup */}
    <div className='w-full flex items-center gap-3 border-b-2 mt-2 '>
    <i className=" text-3xl ri-map-pin-2-fill"></i>
    <div>
        <h4 className='font-semibold text-xl'>Pickup</h4>
        <p> {props.pickup} </p>
    </div>
    </div>
    {/* drop */}
    <div className='w-full flex items-center gap-3 border-b-2 mt-2 '>
    <i className=" text-3xl ri-map-pin-2-fill"></i>
    <div>
        <h4 className='font-semibold text-xl'>Destination </h4>
        <p> {props.destination} </p>
    </div>
    </div>
    {/* price */}
    <div className='w-full flex items-center gap-3  mt-2'>
    <i className="text-3xl ri-money-rupee-circle-fill"></i>
    <div>
        <h4 className='font-semibold text-xl'>Price </h4>
        <p> {props.fare[props.vehicleType]} </p>
    </div>
    </div>
    
    
    </div>


</div>
  )
}

export default LookingForDriver
