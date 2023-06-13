import React from 'react';
import Link from 'next/link';
import Title from '@/app/components/Title';
import StyledLink from '@/app/components/StyledLink';
import TextContainer from '@/app/components/TextContainer';


const HomePage: React.FC = () => {
  return (
    
    <div >
            <Title>
            Course Planning Information
            </Title>
            <TextContainer> Planning Information  </TextContainer>
            <StyledLink href="https://drive.google.com/file/d/1MJStSroDqmdtz_nt-DOVZVqdL0WYHfGH/view">
            Upper School Course Book 2023-2024
            </StyledLink>
            <StyledLink href="https://docs.google.com/document/d/1ZN3LTQgmVUOQEaSd9Ctgr29v1YUsb5ElR3YjXtWAjJk/edit">
            Course Planning Info Sheet for Students 
            </StyledLink>
            <StyledLink href="https://sites.google.com/wheelergmail.org/wheeler-math-department/math-course-sequence">
            Math Department Website
            </StyledLink>
            <Title>
            Applications ans Due Dates
            </Title>
            <TextContainer> Placement Change Applications (all due April 6)  </TextContainer>
            <StyledLink href="https://docs.google.com/document/d/1pqcdHYJGD7UvgmVtubATa0Qm1bfLz6-thrdmQ6PKqyk/edit">
            Language Placement Change
            </StyledLink>
            <StyledLink href="https://docs.google.com/document/d/1kJr0KowoHPmrD2nocBgFMG7MiNgBFMXXbxeUsxJ70NA/edit">
            Math Placement Change
            </StyledLink>
            <StyledLink href="https://docs.google.com/document/d/1DkF0kpFcPwul7h847_msu-us_c7weDHWPDkym45LOwg/edit">
            Science Placement Change
            </StyledLink>
            <StyledLink href="https://docs.google.com/document/d/1cY_VcnFc2o97J1zOCd42dmRCWq4dvh9w1nawerQ7pKg/edit">
            US History Honors Placement Change
            </StyledLink>
            <StyledLink href="https://docs.google.com/document/d/13tELb1DjgXDIYJtU01fh_56uLfxw9YjPmEQTiOPqWjg/edit">
            AP Economics Placement Change
            </StyledLink>
            <StyledLink href="https://docs.google.com/document/d/1dueRjazkozjiIsH4kII1CRGKpFc4cEsnmOwS_DGDVhs/edit#heading=h.gjdgxs">
            AP Computer Science Change
            </StyledLink>

            <Title>Course Applications (all due March 6th)</Title>

            <StyledLink href="https://docs.google.com/document/d/1_cYfFWFrTUGuax5UVD8VX-WSU4RHoAeHQZzMkAJAwrU/edit">
            Application for 7 Classes/4 APs 
            </StyledLink>
            <StyledLink href="https://docs.google.com/forms/d/e/1FAIpQLScLDbthVS_Hv6qKitmvA4fB1oIq9Y4YiCTznlL7YrZCLXZg2A/viewform">
            Molecular Biology Application
            </StyledLink>
            <StyledLink href="https://docs.google.com/document/d/1wiGslumockmDfxBsp6uran-1hvDcFePk6VTolNmZ8aw/edit">
            AP Art History Application       
            </StyledLink>
            <StyledLink href="https://docs.google.com/document/d/1AUMY-My7043AxLwcy6Vd29p5Ce_xZSZkBzzCZvR1vQc/edit">
            AP Calc AB Application (for Precalc students)        
            </StyledLink>
    </div>
  );
};

export default HomePage;