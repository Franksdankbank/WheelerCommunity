import React from 'react';
import Link from 'next/link';
import Title from '@/app/components/Title';
import StyledLink from '@/app/components/StyledLink';
//import TextContainer from '@/app/components/TextContainer';
//import Biggrid from '@/app/components/Biggrid';

const HomePage: React.FC = () => {
  return (
    
    <div >
            <Title>
                Enrichment Information
            </Title>
            <StyledLink href="https://docs.google.com/spreadsheets/d/1gnUksf6szR9VaunbD1iosDAIo6FYSF7r2O6wB2wZ3Cs/edit?resourcekey#gid=637726106">
            Semester II Aerie Enrichment Rosters and Locations
            </StyledLink>
            <StyledLink href="https://docs.google.com/document/d/1KLbv1u_h2_2DzmkvT4sDfJgfkEfOvEjv6YpfqbVQJtU/edit#">
            Semester II Aerie Enrichment Elective Catalog
            </StyledLink>
            <StyledLink href="https://docs.google.com/spreadsheets/d/1AFABPg6ovYRuYQzVK68oaHUKG8Wpuwv9WrSqfrvCJHY/edit#gid=2000171719">
            Semester II Aerie Enrichment Overview
            </StyledLink>
           
    </div>
  );
};

export default HomePage;