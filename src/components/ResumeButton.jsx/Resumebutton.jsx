import React from 'react';

const Resumebutton = () => {
  // Inline styles
  const containerStyle = {
    width: '100%',
    padding: '20px 0',
    textAlign: 'center',
  
  };

  const buttonStyle = {
    backgroundColor: '#000', // black background
    color: '#fff',           // white text
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={{ width: '100%', padding: '20px 0', textAlign: 'center' }}>
    <a href="/aman-pandya-resume.pdf" download style={buttonStyle}>
  Download Resume
</a>
    </div>
  );
};

export default Resumebutton;
