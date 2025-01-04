import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CaptainLogout = () => {

    const token=localStorage.getItem('token')
    const navigate=useNavigate()
    console.log(token);
    if(!token){
        navigate('/captain-login')
    }

    //we will first check that this token is of captain not user

    const logout=async()=>{
      console.log("from frontend in log-out page")

      // const res1=await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
      //   headers: {
      //       Authorization: `Bearer ${token}`
      //   }
      // });

      // if(res1.status===200){


        const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if(res.status===200){
            localStorage.removeItem('token')
            navigate('/captain-login')
        }
      // }
   
    }

    useEffect(()=>{
        logout()
    },[])

 


  return (
    <div>
    
    </div>
  )
}

export default CaptainLogout
