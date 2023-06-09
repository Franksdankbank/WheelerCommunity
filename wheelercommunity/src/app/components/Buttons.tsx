import React from 'react';
import Link from 'next/link';

interface ButtonsProps {
  text: string;
  linkTo: string;
}

const Buttons: React.FC<ButtonsProps> = ({ text, linkTo }) => {
  const buttonsStyles = {
    backgroundColor: '#E1D7F9',
    border: 'none',
    borderRadius: '8px',
    color: '#000000',
    fontSize: '24px',
    fontWeight: 'bold',
    padding: '12px 24px',
    margin: '20px',
    cursor: 'pointer',
    textDecoration: 'none', // Added for proper link styling
    width: '330px'
  };

  return (
    <Link href={linkTo}>
      <div style={buttonsStyles}>
        {text}
      </div>
    </Link>
  );
};

export default Buttons;