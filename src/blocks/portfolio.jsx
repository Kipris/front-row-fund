import React, { useState } from 'react';
import { PortfolioBlock, PortfolioWrap, Title, List, ListItem, LogoWrap, ClientTitle, Description } from './portfolio.styled';
import { Container } from '../components/container';
import { Link } from 'react-scroll';
import { Button, ButtonColor, ButtonType } from '../components/button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import notiv from '../assets/img/notiv.webp';
import choice from '../assets/img/choice.webp';
import carealign from '../assets/img/care.webp';
import qoins from '../assets/img/qoins.webp';
import gatehouse from '../assets/img/gatehouse.webp';
import preshow from '../assets/img/preshow.webp';

const Portfolio = () => {
  const [ clients ] = useState([
    { name: 'Notiv (Exited to Dubber in 2021)', iconSrc: notiv, link: 'https://www.choiceworx.com/', background: '#EEFBF6', description: 'Notiv is a platform agnostic (Zoom, Webex, Google, Microsoft, Uber Conference, etc.) AI transcription and notetaking solution' },
    { name: 'ChoiceWORX', iconSrc: choice, link: 'https://www.choiceworx.com/', background: '#F0F9FF', description: 'ChoiceWORX is an AI software company focused on automation of End-User IT support and Robotic Process Automation (RPA) maintenance' },
    { name: 'CareAlign', iconSrc: carealign, link: 'https://www.choiceworx.com/', background: '#FAF7FE', description: 'CareAlign is a SaaS based, mobile patient management tool for clinicians' },
    { name: 'Qoins', iconSrc: qoins, link: 'https://www.choiceworx.com/', background: '#EDF4FF', description: 'Qoins is a financial wellness app focused on debt repayment that helps consumers achieve their financial goals by combining financial education and repayment automation' },
    { name: 'Gatehouse Bio', iconSrc: gatehouse, link: 'https://www.choiceworx.com/', background: '#FEF6ED', description: 'Gatehouse Bio is an AI and machine learning biotech company commercializing proprietary therapeutics' },
    { name: 'PrePlay', iconSrc: preshow, link: 'https://www.choiceworx.com/', background: '#F0F9FF', description: 'PreTechnology is an AI mobile-based media and entertainment platform allowing users to monetize their attention through watching advertisements' },
  ]);

  return (
    <PortfolioBlock id='portfolio'>
      <Container>
        <PortfolioWrap>
          <Title>Portfolio</Title>
          <List>
            {clients.map(({ name, iconSrc, link, background, description }, index) => (
              <ListItem
                key={index}
              >
                <LogoWrap style={{ background }}>
                  <LazyLoadImage src={iconSrc} alt={name} />
                </LogoWrap>
                <ClientTitle>{name}</ClientTitle>
                <Description>{description}</Description>
              </ListItem>
            ))}
          </List>
        </PortfolioWrap>
      </Container>
    </PortfolioBlock>
  );
}

export default Portfolio;
