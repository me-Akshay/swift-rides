import React from 'react'
import { createContext, useState } from 'react'

export const UserDataContext=createContext()

const UserContext = ({children}) => {

    const [user, setUser] = useState({
        email: "",
        fullName:{
            firstName: "",
            lastName: "",
        }
    })
    // const user="akki"
  return (
    <div>
     <UserDataContext.Provider values={user}>
     {children}
     </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
