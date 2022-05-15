import React, { useState } from 'react';
import { HelpBlock, HelpWrap, Title, HelpList, HelpItem, HelpIcon, HelpTitle, HelpDescription } from './help.styled';
import { Container } from '../components/container';
import { Link } from 'react-scroll';
import { Button, ButtonColor, ButtonType } from '../components/button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import investment from '../assets/img/investment.svg';
import hierarchy from '../assets/img/hierarchy.svg';
import scaling from '../assets/img/scaling.svg';
import hiring from '../assets/img/hiring.svg';
import constant from '../assets/img/constant.svg';
import design from '../assets/img/design.svg';

const Help = () => {
  const [ helpList ] = useState([
    { title: 'Business Modeling', iconSrc: investment, description: 'We help teams build detailed operating financial models enabling founders to track runway, cash burn and key KPIs' },
    { title: 'Governance', iconSrc: hierarchy, description: 'We help portfolio companies establish the correct investment documents, corporate structure and necessary components for future fundraising rounds' },
    { title: 'Scaling Strategy', iconSrc: scaling, description: 'We are in constant collaboration with management teams to chart a path for successful growth' },
    { title: 'Hiring', iconSrc: hiring, description: 'We help portfolio companies tap into our network of thought leaders, executives and third-party talent acquisition agencies' },
    { title: 'Constant communication', iconSrc: constant, description: 'We meet with key members of the leadership team on a weekly or bi-weekly cadence' },
    { title: 'Technology resources', iconSrc: design, description: 'We connect portfolio companies with key technical resources in UI/UX, mobile app development, front and back-end development and digital marketing' },
  ]);

  return (
    <HelpBlock id='help'>
      <Container>
        <HelpWrap>
          <Title>How we can help?</Title>
          <HelpList>
            {helpList.map(({ title, iconSrc, description }, index) => (
              <HelpItem key={index}>
                <HelpIcon src={iconSrc} alt={title} />
                <HelpTitle>{title}</HelpTitle>
                <HelpDescription>{description}</HelpDescription>
              </HelpItem>
            ))}
          </HelpList>
        </HelpWrap>
      </Container>
    </HelpBlock>
  );
}

export default Help;
