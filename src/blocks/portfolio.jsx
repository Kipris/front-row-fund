import React, { useState } from 'react';
import { PortfolioBlock, PortfolioWrap, Title, List, ListItem, LogoWrap, ClientTitle, Description } from './portfolio.styled';
import { Container } from '../components/container';
import { Link } from 'react-scroll';
import { Button, ButtonColor, ButtonType } from '../components/button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import notiv from '../assets/img/notiv.png';
import preshow from '../assets/img/preshow.png';
import carealign from '../assets/img/care.png';

const Portfolio = () => {
  const [ clients ] = useState([
    { name: 'Notiv (Exited to Dubber in 2021)', iconSrc: notiv, link: 'https://www.choiceworx.com/', background: '#EEFBF6', description: 'Notiv is a platform agnostic (Zoom, Webex, Google, Microsoft, Uber Conference, etc.) AI transcription and notetaking solution' },
    { name: 'ChoiceWORX', iconSrc: preshow, link: 'https://www.choiceworx.com/', background: '#F0F9FF', description: 'ChoiceWORX is an AI software company focused on automation of End-User IT support and Robotic Process Automation (RPA) maintenance' },
    { name: 'CareAlign', iconSrc: carealign, link: 'https://www.choiceworx.com/', background: '#FAF7FE', description: 'CareAlign is a SaaS based, mobile patient management tool for clinicians' },
    { name: 'Notiv (Exited to Dubber in 2021)', iconSrc: notiv, link: 'https://www.choiceworx.com/', background: '#EEFBF6', description: 'Notiv is a platform agnostic (Zoom, Webex, Google, Microsoft, Uber Conference, etc.) AI transcription and notetaking solution' },
    { name: 'ChoiceWORX', iconSrc: preshow, link: 'https://www.choiceworx.com/', background: '#F0F9FF', description: 'ChoiceWORX is an AI software company focused on automation of End-User IT support and Robotic Process Automation (RPA) maintenance' },
    { name: 'CareAlign', iconSrc: carealign, link: 'https://www.choiceworx.com/', background: '#FAF7FE', description: 'CareAlign is a SaaS based, mobile patient management tool for clinicians' },
    { name: 'Notiv (Exited to Dubber in 2021)', iconSrc: notiv, link: 'https://www.choiceworx.com/', background: '#EEFBF6', description: 'Notiv is a platform agnostic (Zoom, Webex, Google, Microsoft, Uber Conference, etc.) AI transcription and notetaking solution' },
    { name: 'ChoiceWORX', iconSrc: preshow, link: 'https://www.choiceworx.com/', background: '#F0F9FF', description: 'ChoiceWORX is an AI software company focused on automation of End-User IT support and Robotic Process Automation (RPA) maintenance' },
    { name: 'CareAlign', iconSrc: carealign, link: 'https://www.choiceworx.com/', background: '#FAF7FE', description: 'CareAlign is a SaaS based, mobile patient management tool for clinicians' },
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
                target='_blank'
                rel='noreferrer'
                href={link}
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
