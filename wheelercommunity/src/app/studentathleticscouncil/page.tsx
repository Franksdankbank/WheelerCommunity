import React from 'react';
import Link from 'next/link';
import Title from '@/app/components/Title';
import StyledLink from '@/app/components/StyledLink';
import TextContainer from '@/app/components/TextContainer';


const HomePage: React.FC = () => {
  return (
    
    <div >
            <Title>
            Student Athletics Council
            </Title>
            <StyledLink href="https://docs.google.com/spreadsheets/d/1pVWh4XOqVjyWOjdU7Dl5UVUxT9mnP_4xQSse54pnk-I/edit#gid=1061597605">
            Weekly US Practice and Game Schedule
            </StyledLink>
            <TextContainer> Co-Presidents:  Anand Heintz and Sarah Bader  </TextContainer>
            <TextContainer> Co-Vice Presidents: Nora Kiley and William Singer </TextContainer>
            <TextContainer> Gold Captains: Clara Bruno and William Wert </TextContainer>
            <TextContainer> Gold Vice Captains: Ameen Raissi and Sadie Martiesian </TextContainer>
    </div>
  );
};

export default HomePage;