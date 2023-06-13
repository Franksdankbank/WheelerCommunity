import React from 'react';
import Link from 'next/link';
import Title from '@/app/components/Title';
import StyledLink from '@/app/components/StyledLink';
import TextContainer from '@/app/components/TextContainer';
import Image from 'next/image';


const HomePage: React.FC = () => {
  return (
    
    <div >
            <Title>
            Morning Assemblies (Days 1,3,5,7 in Isenberg) 
            </Title>
            <StyledLink href="https://docs.google.com/forms/d/e/1FAIpQLSfYy1Yq6VgXy9oMzYOPDBju1iJF3oeYuwUtXQLH-LErupfruQ/viewform">
            Use this link to sign up for an Assembly Announcement
            </StyledLink>
            <StyledLink href="https://driveuploader.com/upload/l7EzOh0FLl/">
            Use this link to sign up for an Assembly Announcement
            </StyledLink>
            <Image src="/images/MorningSchedule.jpg" alt="My Image" width={1200} height={500} />

            
    </div>
  );
};

export default HomePage;
