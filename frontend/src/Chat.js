import { Avatar, IconButton} from '@mui/material'
import React from 'react'
import "./Chat.css"
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
function Chat({ messages }) {
  return (
    <div className = "chat">
      <div className = "chat_header">
        <Avatar/>

        <div className = "chat_headerinfo">
          <h3> Room name</h3>
          <p> Last Seen At... </p> 
        </div>

        <div className = "chat_headerRight">
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <IconButton>
          <AttachFileIcon/>
        </IconButton>
        <IconButton>
          <MoreVertIcon/>
        </IconButton>
        </div>
      </div>

      <div className = "chat_body">
        {messages.map((message) => (
           <p className = {`chat_message ${message.received ? "chat_receiver" : ""}`}>
           
           <span className = "chat_name">{message.name}</span>
           {message.message}
           <span className = "chat_time">
             {message.timeStamp}
           </span>
         </p>

        ))}
    
          <p className = "chat_message chat_receiver">
            <span className = "chat_name">Liban</span>
            This is a message!
            <span className = "chat_time">
              {new Date().toUTCString()}
            </span>
          </p>
        </div>
        <div className = "chat_footer"> 
          <InsertEmoticonIcon/>
          <form>
            <input placeholder = "Type a message" type = "text" />
            <button type = "submit"> Send a message</button>
          </form>
          <MicIcon/>
          </div>
    </div>
  )
}

export default Chat