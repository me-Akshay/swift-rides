import React, { useContext } from 'react'
import {Route, Routes} from 'react-router-dom'

import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import { UserDataContext } from './context/UserContext'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
// import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'


const App = () => {
  // const user =useContext(UserDataContext);
  // console.log(user)

  return (
    <div>
      <Routes>
        <Route path="/" element={ <Start />}/>
        {/* Captain Related Routes */}

        <Route path="/captain-signup" element={ <CaptainSignup />}/>
        <Route path="/captain-login" element={ <CaptainLogin />}/>
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
        <CaptainHome />
          </CaptainProtectWrapper>
        } />

        {/* <Route path='/captain-home' element={<CaptainHome />} />   */}



        {/* User Related Routes */}
        <Route path="/login" element={ <UserLogin />}/>
        <Route path="/signup" element={ <UserSignup />}/>
        <Route path="/home" element={ 
        <UserProtectWrapper>
          <Home />
        </UserProtectWrapper>     
}/>

  <Route path='/user/logout' element={
    <UserProtectWrapper>
      <UserLogout />
    </UserProtectWrapper>
  }/>







      </Routes>
    </div>
  )
}

export default App
