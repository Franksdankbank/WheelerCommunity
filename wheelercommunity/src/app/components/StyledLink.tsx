import React, { ReactNode } from 'react';

interface StyledLinkProps {
  href: string;
  children: ReactNode;
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, children }) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15vh',
  };

  const linkStyle: React.CSSProperties = {
    color: '#F8F8FF',
    fontSize: '24px',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        {children}
      </a>
    </div>
  );
};

export default StyledLink;
