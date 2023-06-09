import React, { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: '#fcba30',
        border: '5px solid white',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        width: '60%',
        margin: '20px auto',
        
      }}
    >
      <h1>{children}</h1>
    </div>
  );
};

export default Title;
