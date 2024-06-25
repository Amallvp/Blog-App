import React from 'react'
import './Settings.css'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Profile from '../../Component/Profile/Profile'

function Settings() {
  return (
    <div className="settings">
      <Profile />
      <Sidebar />
    </div>
  )
}

export default Settings