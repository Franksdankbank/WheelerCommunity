import React from 'react';
import Link from 'next/link';
import Title from '@/app/components/Title';
import StyledLink from '@/app/components/StyledLink';
import TextContainer from '@/app/components/TextContainer';


const HomePage: React.FC = () => {
  return (
    
    <div >
            <Title>
                Student Senate
            </Title>
            <StyledLink href="https://docs.google.com/forms/d/e/1FAIpQLSf2kv5fggeCVQLM1riwY4cP0L2u3y2XcQ-Pxnr3eRhQ0amXdA/viewform">
            Google Form: Submit your ideas to the Student Senate
            </StyledLink>
            <TextContainer>Senate President: Sophia Olivares (sophia.olivares@wheelergmail.org)</TextContainer>
            <TextContainer>Senate Vice-President: Luke Nelson (luke.nelson@wheelergmail.org)</TextContainer>
            <TextContainer>12th Grade Senators:  Wyatt Greenberg and Alex Advani</TextContainer>
            <TextContainer>11th Grade Senators:  Sanjana Maddipudi and Ameen Raissi</TextContainer>
            <TextContainer>10th Grade Senators: Selina Kao and Owen Baill</TextContainer>
            <TextContainer>9th Grade Senators: Zoey Frank and Will Warner</TextContainer>
            <iframe
        src="https://docs.google.com/document/d/1tRpFjhCiE5p09ljG3CH_LnWD911MLYnhtuQqGLDbQv4/preview"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default HomePage;
