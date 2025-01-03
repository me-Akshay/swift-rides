import React from 'react'

const CaptainLogout = () => {

    const token=localStorage.getItem('token')

    if(!token){
        navigate('/captain-login')
    }

    //we will first check that this token is of captain not user

    const logout=async()=>{
        const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if(res.status===200){
            localStorage.removeItem('token')
            navigate('/captain-login')
        }
    }

    logout();



  return (
    <div>
      CaptainLogout
    </div>
  )
}

export default CaptainLogout
