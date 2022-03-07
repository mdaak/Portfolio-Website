import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range technologies in the web developer world.
      Form Back-end to Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Explore with <br/>
              React.js
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Explore with <br/>
              Nede.js and Databases
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        < DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Explore with <br/>
              React.js
            </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
