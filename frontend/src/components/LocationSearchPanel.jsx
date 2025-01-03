import React from 'react'

const LocationSearchPanel = (props) => {

    const {setPanelOpen,setVehiclePanelOpen}=props
    
    const locations=[
        "IIT KOTA Boys Hostel Ranpur",
        "IIIT Surat Boys Hostel,Gujrat",
        "IIIT Bhagalpur Boys Hostel Bihar"
    ]

const handleClick=()=>{
    setVehiclePanelOpen(true)
    setPanelOpen(false)
}

    return (

        <div>
            {
            
            locations.map((loc,index) => {
                return (
                    
                    <div key={index} onClick={handleClick} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'> {loc}</h4>
                    </div>
                )
            
            })


            }
             
        </div>
    )
}

export default LocationSearchPanel