import React from 'react';
import heroImage from './hero.png';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div style={{
            maxWidth: '100%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            padding: ' 2rem'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                backgroundColor: '#1F1F39',
                borderRadius: '1rem'
            }}>
                <span style={{ width: '94px', height: '1px' }}> </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ flex: '1', marginRight: '2rem' }}>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                        marginBottom: '3rem',
                        lineHeight: '1.2',
                        textAlign: 'center'
                    }}>Your AI-Powered <br /> Virtual Assistant</h2>
                    <p style={{ marginBottom: '1rem', textAlign: 'center' }}>Meet Jarvis-AI, your automated chatbot ready to assist you 24/7. From answering questions to providing personalized recommendations, Jarvis is here to make your life easier.</p>
                    <Link to="/HomePage" style={{ textDecoration: 'none' }}>
                        <button style={{
                            textTransform: 'uppercase',
                            fontFamily: 'Source Sans Pro',
                            backgroundColor: '#1F1F39',
                            color: '#fff',
                            padding: '0.5rem 1rem', 
                            borderRadius: '0.5rem', 
                            fontSize: '1.2rem', 
                            cursor: 'pointer',
                            border: 'none',
                            width: 'fit-content', 
                            marginLeft : '200px'
                        }}>Chat with Jarvis</button>
                    </Link>
                </div>
                <div style={{ flex: '1' }}>
                    <img src={heroImage} style={{ maxWidth: '100%', height: 'auto' }} alt="Hero" />
                </div>
            </div>
        </div>
    );
};

export default Main;
