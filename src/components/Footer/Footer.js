import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:010-2496-5221'>010-2496-5221</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:1543431a@gmail.com'>1543431a@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
      <SocialContainer>
        <SocialIcons href='https://github.com/akbarjon2000'>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://github.com'>
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/akbarjon-abdulkhamidov-4181a2225/'>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
