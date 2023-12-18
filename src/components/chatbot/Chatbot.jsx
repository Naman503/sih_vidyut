import * as React from 'react';
import chatbotlogo from '../images/chatbot.png';
import './chatbot.css'
import Button from '@mui/material/Button';


export default function FullScreenDialog() {
  return (
    <div className="floating-chatbot">
      <Button className="btngroup">
      <img src={chatbotlogo} className='chatbotlogo' alt="Chat With Me!" />
      </Button>
    </div>
  );
}