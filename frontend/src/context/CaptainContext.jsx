// import { createContext, useState, useContext } from 'react';

// export const CaptainDataContext = createContext();


// const CaptainContext = ({ children }) => {

//     const [ captain, setCaptain ] = useState(null);
//     const [ isLoading, setIsLoading ] = useState(false);
//     const [ error, setError ] = useState(null);
//     const [tmp,setTmp]=useState('tmp value')

//     const updateCaptain = (captainData) => {
//         setCaptain(captainData);
//         console.log("inisde captain context")
//     };

//     const value = {
//         tmp,
//         setTmp,
//         captain,
//         setCaptain,
//         isLoading,
//         setIsLoading,
//         error,
//         setError,
//         updateCaptain
//     };

//     return (
//         <CaptainDataContext.Provider value={value}>
//             {children}
//         </CaptainDataContext.Provider>
//     );


// }

// export default CaptainContext;



import { createContext, useState, useContext, useEffect } from 'react';

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [ captain, setCaptain ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
   
    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };



    return (
        <CaptainDataContext.Provider value={{captain,setCaptain,isLoading,setIsLoading,error,setError,updateCaptain}}>
            {children}
        </CaptainDataContext.Provider>
    );

};

export default CaptainContext;