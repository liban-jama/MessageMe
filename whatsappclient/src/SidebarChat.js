import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarChat.css"
function SidebarChat() {
  return (
    <div className = "sidebarChat">
      <Avatar/>
      <div className = "sidebarChat_info">
        <h2>Room Name</h2>
        <p>Last message sent in room</p> 

      </div>
    </div>
  )
}

export default SidebarChat