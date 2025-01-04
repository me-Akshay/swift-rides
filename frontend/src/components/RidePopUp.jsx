import React from 'react'

const RidePopUp = (props) => {


    const handleClick = () => {
       props.setConfirmRidePopUpPanel(true)
    }

    const handleClickIgnore = () => {
        props.setRidePopUpPanel(false)
    }



    return (
        <div>
            <h5 onClick={() => { props.setRidePopUpPanel(false) }} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Ride Available For You!</h3>

            <div className='flex justify-between items-center mt-2 mb-2 bg-yellow-300 rounded-xl  '>
                <div className='flex items-center gap-2 h-20'>
                    <img className='h-15 w-14 rounded-full object-cover pl-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" alt="" />
                    <h4 className='text-lg font-semibold'>Harshita Patel</h4>
                </div>
                <h5>2.6KM</h5>
            </div>

            <div className='flex flex-col gap-2 justify-between items-center'>
                

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
                <button onClick={handleClick} className='font-bold mt-3 bg-green-500 w-full py-2 px-13 rounded-lg'>Accept</button>
                <button onClick={handleClickIgnore} className='font-bold mt-3 bg-gray-300 w-full py-2 px-13 rounded-lg '>Ignore</button>

            </div>
        </div>
    )
}

export default RidePopUp
