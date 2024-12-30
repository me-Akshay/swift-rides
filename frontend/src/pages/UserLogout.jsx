import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const UserLogout = () => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const logout= async()=>{
        const res=await  axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (res.status === 200) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    }

    logout();

    return (
        <div>UserLogout</div>
    )
}

export default UserLogout
