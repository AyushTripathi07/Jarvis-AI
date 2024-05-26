import React, { useState } from 'react';
import bot from '../assets/bot.svg';
import user from '../assets/user.svg';

function HomePage() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = { text: inputValue, isUser: true };
    setMessages([...messages, newMessage]);
    setInputValue('');

    const response = await fetch('http://localhost:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: inputValue,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const botResponse = data.bot.trim();
      const botMessage = { text: botResponse, isUser: false };
      setMessages([...messages, botMessage]);
    } else {
      setMessages([...messages, { text: 'Something went wrong', isUser: false }]);
      alert('Something went wrong');
    }
  };

  return (
    <div className="app" style={styles.app}>
        <h1 style={{
    background: '#40414f',
    color: '#dcdcdc',
    fontSize: '18px',
    padding: '10px',
    borderRadius: '10px',
    maxWidth: '70%',
    wordWrap: 'break-word',
  }}> Jarvis - AI</h1>
  
      <div className="chat-container" style={styles.chatContainer}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`} style={styles.message}>
            <div className="profile" style={styles.profile}>
              <img src={message.isUser ? user : bot} alt={message.isUser ? 'user' : 'bot'} style={styles.image} />
            </div>
            <div className="text" style={styles.text}>{message.text}</div>
          </div>
        ))}
      </div>
      <div className="form-container" style={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            rows="1"
            placeholder="Ask Jarvis-AI..."
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.button}>SEND</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  app: {
    width: '100vw',
    height: '100vh',
    background: '#343541',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  chatContainer: {
    flex: 1,
    width: '100%',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  message: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '10px',
  },
  profile: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  text: {
    background: '#40414f',
    color: '#dcdcdc',
    fontSize: '18px',
    padding: '10px',
    borderRadius: '10px',
    maxWidth: '70%',
    wordWrap: 'break-word',
  },
  formContainer: {
    width: '100%',
    maxWidth: '600px',
    marginTop: '20px',
    padding: '10px',
    background: '#40414f',
  },
  textarea: {
    flex: 1,
    minHeight: '50px', 
    color: '#fff',
    fontSize: '16px',
    padding: '10px',
    background: 'transparent',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#5436da',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default HomePage;
