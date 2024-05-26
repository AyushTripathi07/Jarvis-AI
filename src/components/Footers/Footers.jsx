import React from 'react';

const Footers = () => {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', fontSize: '1.2rem' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)' }, '@media (min-width: 1024px)': { gridTemplateColumns: 'repeat(2, 1fr)' } }}>
                
                <div style={{ padding: '1rem', borderRight: '1px solid #fff', textAlign: 'left' }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Contact</h2>
                        <ul style={{ color: '#ffffff75', lineHeight: '1.4', margin: 0, padding: 0 }}>
                            <li>admin@jarvisAi.com</li>
                            <li>+91 1234 XXXXX</li>
                        </ul>
                    </div>
                </div>
                <div style={{ padding: '1rem', textAlign: 'left' }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Company</h2>
                        <ul style={{ color: '#ffffff75', lineHeight: '1.4', margin: 0, padding: 0 }}>
                            <li>About</li>
                            <li>Services</li>
                            <li>Careers</li>
                            <li>Blogs</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Discover</h2>
                        <ul style={{ color: '#ffffff75', lineHeight: '1.4', margin: 0, padding: 0 }}>
                            <li>Affiliate</li>
                            <li>Partner Program</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{ borderTop: '1px solid #221F35', display: 'flex', justifyContent: 'center', alignItems: 'left', marginTop: '2rem' }}>
                <div>
                    <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '0.5rem' }}>Copyright © 2023 JarvisAI. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footers;
