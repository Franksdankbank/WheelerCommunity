import React from 'react';
import Link from 'next/link';
import Title from '@/app/components/Title';
import StyledLink from '@/app/components/StyledLink';
import TextContainer from '@/app/components/TextContainer';


const HomePage: React.FC = () => {
  return (
    
    <div >
            <Title>
                Mentoring Programs
            </Title>
            <StyledLink href="https://padlet.com/anniefunnell/writing-mentors-2022-23-vgw1naink36hat5b">
                Writing Mentors
            </StyledLink>
            <StyledLink href="https://padlet.com/sarahberthiaumeleduc/environmental-science-mentors-62yzr6ztzw9fxztg">
                Environmental Science
            </StyledLink>
            <StyledLink href="https://padlet.com/sarahberthiaumeleduc/chemistry-mentors-9gd9wzlqdcio9ypb">
                Chemistry
            </StyledLink>
            <StyledLink href="https://padlet.com/sarahberthiaumeleduc/biology-mentors-pzq3simyvvnm8rjq">
                Biology
            </StyledLink>
            <StyledLink href="https://padlet.com/sarahberthiaumeleduc/physics-mentors-q9ezmlq49dn2scin">
                Physics
            </StyledLink>
            <StyledLink href="https://padlet.com/johnhanson6/math-assistants-e3thcwvrojle7cs6">
                Math Assistants
            </StyledLink>
    </div>
  );
};

export default HomePage;