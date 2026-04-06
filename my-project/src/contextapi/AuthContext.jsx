import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { createContext, useState } from 'react'
import { _Auth } from '../Backend/Backend'

export let Auth = createContext()

const AuthContext = ({ children }) => {

  const [userdata, setuserdata] = useState(null)

  onAuthStateChanged(_Auth, (user) => {
    if (user && user.emailVerified === true) {
      setuserdata(user)
    } else {
      setuserdata(null)
    }
  })

  const logout = () => {
    signOut(_Auth)
  }

  return (
    <Auth.Provider value={{ userdata, logout }}>
      {children}
    </Auth.Provider>
  )
}

export default AuthContext