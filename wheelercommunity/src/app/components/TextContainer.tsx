import React from 'react';

interface TextContainerProps {
  children: React.ReactNode;
}

const TextContainer: React.FC<TextContainerProps> = ({ children }) => {
  const containerStyle: React.CSSProperties = {
    background: 'lightblue',
    padding: '10px',
  };

  const textStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
    whiteSpace: 'pre-wrap', // Preserve spaces and line breaks
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>{children}</div>
    </div>
  );
};

export default TextContainer;


