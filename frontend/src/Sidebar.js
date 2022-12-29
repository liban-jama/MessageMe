import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import {Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className = 'sidebar'>
    <div className='sidebar_header'>
      <Avatar src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"/>
      <div className='sidebar_headerRight'>
        <IconButton>
          <DonutLargeIcon/>
        </IconButton>
        <IconButton>
          <ChatIcon/>
        </IconButton>
        <IconButton>
          <MoreVertIcon/>
        </IconButton>
      </div>
    </div>

    <div className = "sidebar_search">
      <div className = "sidebar_searchContainer">
        <SearchIcon/>
        <input placeholder = "Search or start new chat" type = "text" />
      </div>
    </div>

    <div className = "sidebar_chats">
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
    </div>

    </div>
  )
}

export default Sidebar