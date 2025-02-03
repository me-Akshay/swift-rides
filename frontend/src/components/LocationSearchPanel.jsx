import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanelOpen, setPanelOpen, setPickup, setDestination, activeField }) => {

  
        
    const handleSuggestionClick = (suggestion) => {
      //  console.log('inside handleSuggestionClick')
        if (activeField === 'pickup') {
            setPickup(suggestion)
        } else if (activeField === 'destination') {
            setDestination(suggestion)
        }
        // setVehiclePanel(true)
        // setPanelOpen(false)
    }

    return (

        <div className="max-h-[70vh] overflow-y-auto" >

            {
            suggestions.map((loc,index) => {
                return (
                    
                    <div key={index} onClick={ ()=> handleSuggestionClick(loc.description) } className='flex gap-3 border-2 p-2 bg-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'> {loc?.description}</h4>
                    </div>
                )
            
            })
            }
             
        </div>
    )
}

export default LocationSearchPanel