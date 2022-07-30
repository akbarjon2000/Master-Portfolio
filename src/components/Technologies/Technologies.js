import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { back_end, design, front_end } from '../../constants/constants';
const Technologies = () => {

  return (<Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Skills & Experience</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the web development world.
      From Front-end to design and Headless CMSs.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          {/* <ListParagraph>Experience with React.js</ListParagraph> */}
          <div className='skills'>
            {front_end.map(({ id, image, name }) => (
              <div className='skill-div'>
                <div className='skill'>
                  <img src={image} className='image' />
                </div>
                <ListParagraph style={{ marginBottom: "5px", textAlign: "center" }}>{name}</ListParagraph>
              </div>
            ))}
          </div>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          {/* <ListParagraph>Experience with React.js</ListParagraph> */}
          <div className='skills'>
            {back_end.map(({ id, image, name }) => (
              <div className='skill-div'>
                <div className='skill'>
                  <img src={image} className='image' />
                </div>
                <ListParagraph style={{ marginBottom: "5px", textAlign: "center" }}>{name}</ListParagraph>
              </div>
            ))}
          </div>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          {/* <ListParagraph>Experience with React.js</ListParagraph> */}
          <div className='skills'>
            {design.map(({ id, image, name }) => (
              <div className='skill-div'>
                <div className='skill'>
                  <img src={image} className='image' />
                </div>
                <ListParagraph style={{ marginBottom: "5px", textAlign: "center" }}>{name}</ListParagraph>
              </div>
            ))}
          </div>
        </ListContainer>
      </ListItem>
    </List>
  </Section>)
};

export default Technologies;
