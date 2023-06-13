import React from 'react';
import Link from 'next/link';
import Title from '@/app/components/Title';
import StyledLink from '@/app/components/StyledLink';
import TextContainer from '@/app/components/TextContainer';


const HomePage: React.FC = () => {
  return (
    
    <div >
            <Title>
                Affinity Groups and Ally Group
            </Title>
            <StyledLink href="https://docs.google.com/forms/d/e/1FAIpQLSfejA6kxSsrRlXMfH8FyCXD1hD5WpDUlesNfdWAAxoTyWpw2w/viewform">
                Group Leaders CLICK HERE for meeting sign up form
            </StyledLink>
            <TextContainer>Adopted Affinity  					Leaders:  Abby Butlin  </TextContainer>
            <TextContainer>Asian/Asian American Affinity  	Leaders:  Myles Chang, Daniel Hu, Isabelle Mitchell, Josh Shin, and Harry Feng  </TextContainer>
            <TextContainer>Black Affinity 					Leaders:  Beyanca Guilme   </TextContainer>
            <TextContainer>Jewish Affinity					Leaders:  Alivia Deitcher, Grayson Sparr, and Skye Davis   </TextContainer>
            <TextContainer>Latinx Affinity  					Leaders:  Daniel Rogers, Mateo Smith, Nina Gonzalez, and Sophia Olivares  </TextContainer>
            <TextContainer>Middle Eastern Affinity 			Leaders:  Ameen Raissi, Peter Morocco, and Samara Gaudioso  </TextContainer>
            <TextContainer>Multiracial Affinity  				Leaders:  Beatrice Schroeder and Sophia Olivares  </TextContainer>
            <TextContainer>Queer Affinity  					Advisor: Christine Perkins  </TextContainer>
            <TextContainer>South Asian Affinity  				Leaders:  Adil Khan, Sanjana Maddipudi, and Vijay Shah  </TextContainer>
            <TextContainer>White Allies in Action 				Leaders:  Samantha Flum and Wyatt Greenberg  </TextContainer>
    </div>
  );
};

export default HomePage;
