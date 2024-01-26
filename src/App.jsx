import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Feed from './Components/Feed/Feed'

function App() {

  return (
    <div className='app'>

      {/* Header */}
      <Header />

      <div className="app-body">
      {/* Left Sidebar */}
        <Sidebar />
        
          {/* Feed */}
          <Feed />
      
      {/* Right sidebar / Widgets */}
      <h4>Right Sidebar</h4>
      </div>
      
    </div>
  )
}

export default App
