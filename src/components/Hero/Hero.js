import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal portfolio
      </SectionTitle>
      <SectionText>
        Hello Mr/Ms i am a front-end developer. I can develop web applications using React or Next.js frameworks. I am ready to work and improve your business!
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/akbarjon-abdulkhamidov-4181a2225/"} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;