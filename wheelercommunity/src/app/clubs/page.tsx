import React from 'react';
import Link from 'next/link';
import Title from '@/app/components/Title';
import StyledLink from '@/app/components/StyledLink';
//import TextContainer from '@/app/components/TextContainer';
import Biggrid from '@/app/components/Biggrid';

const HomePage: React.FC = () => {
  return (
    
    <div >
            <Title>
                Clubs
            </Title>
            <StyledLink href="https://docs.google.com/forms/d/e/1FAIpQLSfejA6kxSsrRlXMfH8FyCXD1hD5WpDUlesNfdWAAxoTyWpw2w/viewform">
            Club Leaders: Click Here for the Meeting Sign Up Form
            </StyledLink>
            <h1> Click below to Access Club Padlets</h1>
            <Biggrid></Biggrid>
    </div>
  );
};

export default HomePage;