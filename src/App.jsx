import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Feed from './Components/Feed/Feed'
import { login, logout, selectUser } from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Components/LoginPage/Login'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

function App() {

  const user = useSelector(selectUser)
  const auth = getAuth()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   onAuthStateChanged(auth, userAuth => {
  //     if(userAuth) {
  //       //user logged in
  //       dispatch(login({
  //         email: userAuth.user.email,
  //         uid: userAuth.uid,
  //         displayName: userAuth.displayName,
  //         photoUrl: userAuth.photoURL
  //       }))
  //     } else {
  //       //user logged out
  //       dispatch(logout())
  //     }
  //   })
  // })

  return (
    <div className='app'>

      {/* Header */}
      <Header />

    {
      !user ? 
      (<Login />) 
      :
      <div className="app-body">
      {/* Left Sidebar */}
        <Sidebar />
        
          {/* Feed */}
          <Feed />
      
      {/* Right sidebar / Widgets */}
      <h4>Right Sidebar</h4>
      </div>

    }
      
      
    </div>
  )
}

export default App
