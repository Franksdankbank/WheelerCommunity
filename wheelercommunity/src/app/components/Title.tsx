import React, { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div
      style={{
        
        border: '2px solid black',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        width: '33%',
        margin: '20px auto',

      }}
    >
      <h1>{children}</h1>
    </div>
  );
};

export default Title;
