import React from 'react';
import Link from 'next/link';
import Title from '@/app/components/Title';
import StyledLink from '@/app/components/StyledLink';
import TextContainer from '@/app/components/TextContainer';


const HomePage: React.FC = () => {
  return (
    
    <div >
            <Title>
                Calendar
            </Title>
            
            
            <iframe
        src="https://calendar.google.com/calendar/embed?color=%23ac725e&src=c_tn7umt3k0gn0b7fuq1332i1bbo@group.calendar.google.com"
        style={{ border: 0 }}
        width="1200"
        height="600"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};

export default HomePage;