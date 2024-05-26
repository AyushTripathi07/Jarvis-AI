import React from 'react';

const Header = () => {
    return (
        <div style={{
            maxWidth: '100%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '2rem'
        }}>
            <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: '#1F1F39', 
            }}>Jarvis-AI</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2 style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: '#1F1F39', 
                    marginRight: '2rem' 
                }}>About Us</h2>
                <h2 style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: '#1F1F39', 
                }}>Pricing</h2>
            </div>
        </div>
    );
};

export default Header;
