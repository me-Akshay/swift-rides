import React from 'react'

const CaptainDetails = () => {
    return (
        <div>
            <div className='flex justify-between items-center mt-3'>

                <div className='flex items-center justify-start gap-5 m-2'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" alt="" />
                    <h4 className='text-lg font-semibold'>Harsh Patel</h4>
                </div>

                <div className='p-2' >
                    <h4 className='text-xl font-semibold'>$233.6</h4>
                    <p>Earned Today</p>
                </div>

            </div>

            <div className='flex justify-center items-center  gap-5 mt-4  p-2 bg-gray-100 rounded-full'>

                <div className='text-center'>
                    <i className="text-2xl ri-time-line"></i>
                    <h5 className='text-lg font-medium'>10.4</h5>
                    <p>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-2xl ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>10.4</h5>
                    <p>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-2xl ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>10.4</h5>
                    <p>Hours Online</p>
                </div>

            </div>
        </div>
    )
}

export default CaptainDetails
