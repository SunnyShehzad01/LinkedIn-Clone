import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  return (
    <div className='app'>

      {/* Header */}
      <Header />

      <div className="app-body">
      {/* Left Sidebar */}
        <Sidebar />

          {/* Feed */}
          <h1>LinkedIn Clone soon ...</h1>
      
      {/* Right sidebar / Widgets */}
      </div>
      
    </div>
  )
}

export default App
