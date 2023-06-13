import React from 'react';
import Link from 'next/link';
import Title from '@/app/components/Title';
import StyledLink from '@/app/components/StyledLink';
import TextContainer from '@/app/components/TextContainer';


const HomePage: React.FC = () => {
  return (
    
    <div >
            <Title>
            Lunch Menu
            </Title>
            <iframe
        src="https://www.wheelerschool.org/parents/dining-experience/upcoming-menus/"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="yes"
      />
    </div>
  );
};

export default HomePage;