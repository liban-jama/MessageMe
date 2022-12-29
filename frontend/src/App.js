import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './Axios';
function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    })
}, []);

  useEffect(() => { //once loads
  
    const pusher = new Pusher('b5855f25c31b03b2fa84', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    //cleanup function
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages])

  console.log(messages);

  return (
    <div className="app">
      <div className="app_body"> 
      <Sidebar/>
      <Chat messages = {messages}/>
      </div>
    </div>
  );
}

export default App;
