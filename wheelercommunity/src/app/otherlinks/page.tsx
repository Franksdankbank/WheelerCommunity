import React from 'react';
import Link from 'next/link';
import Title from '@/app/components/Title';
import StyledLink from '@/app/components/StyledLink';
import TextContainer from '@/app/components/TextContainer';


const HomePage: React.FC = () => {
  return (
    
    <div >
            <Title>
                Other Resources
            </Title>
            <TextContainer> 8 Day Schedule Resources</TextContainer>
            <StyledLink href="https://docs.google.com/spreadsheets/d/16HJN2VBli9kEWxbQaz6Jn4KcXxFsXsrcggUpW5JS0wg/edit?usp=sharing">
                8 Day Schedule (Make a copy to Edit)
            </StyledLink>
            <StyledLink href="https://drive.google.com/file/d/1YKgxvDx6gbYiUMxquXYH8iA6j46Sb6sm/view">
                8 Day schedule PDF
            </StyledLink>
            <StyledLink href="https://drive.google.com/file/d/10tMNM_eDknNJoF06NLJ7hwugQK2AHUif/view">
                Morning Schedule by Grade
            </StyledLink>
            <TextContainer> Important US Information</TextContainer>
            <StyledLink href="https://docs.google.com/spreadsheets/d/1pVWh4XOqVjyWOjdU7Dl5UVUxT9mnP_4xQSse54pnk-I/edit#gid=1061597605">
                Weekly US Practice and Games Schedule
            </StyledLink>
            <StyledLink href="https://drive.google.com/file/d/12ZANsXXsu2mowqp0L4y-FTi7LuQzPR5x/view">
                Upper School Handbook
            </StyledLink>
            <StyledLink href="https://docs.google.com/document/d/16DxDN1iRxi0AcQJHUpWG54TLJX_M6npUmxtNAsPp8Fo/edit">
                Fire Drill Information
            </StyledLink>
            <StyledLink href="https://docs.google.com/presentation/d/1B2IZgHIbxLbK6ewAtxWykKhhL3cc9BqA1RbYlC2glj0/edit">
                Stay in place firedrill information
            </StyledLink>
    </div>
  );
};

export default HomePage;