import React, { useState } from 'react';
import { BenefitsBlock, BenefitsWrap, Title, BenefitList, Benefit, BenefitIcon, BenefitTitle, BenefitDescription } from './benefits.styled';
import { Container } from '../components/container';
import { Link } from 'react-scroll';
import { Button, ButtonColor, ButtonType } from '../components/button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import operator from '../assets/img/operator.svg';
import technology from '../assets/img/technology.svg';
import active from '../assets/img/active.svg';
import trusted from '../assets/img/trusted.svg';

const Benefits = () => {
  const [ benefitList ] = useState([
    { title: 'Operator focused', iconSrc: operator, description: 'We are a team of operators who have successfully grown and exited technology businesses' },
    { title: 'Technology Expertise', iconSrc: technology, description: 'We bring an understanding of crucial technology resources including UI/UX, mobile application development, back-end development, front-end development, digital marketing, etc.' },
    { title: 'Active and Engaged', iconSrc: active, description: 'We pride ourselves on being extremely active and having a direct impact. We prefer to be in constant communication with our portfolio companies helping in any way possible, whether building financial models, creating proper governance for the next funding round, planning for growth, discussing sales strategy, or leveraging our business network whatever way possible' },
    { title: 'Trusted and Go-To Partner', iconSrc: trusted, description: 'We are the management\'s team trusted, go-to partner. Working together with founder and management teams, we help them reach their next inflection point' },
  ]);

  return (
    <BenefitsBlock id='benefits'>
      <Container>
        <BenefitsWrap>
          <Title>Benefits</Title>
          <BenefitList>
            {benefitList.map(({ title, iconSrc, description }, index) => (
              <Benefit key={index}>
                <BenefitIcon src={iconSrc} alt={title} />
                <BenefitTitle>{title}</BenefitTitle>
                <BenefitDescription>{description}</BenefitDescription>
              </Benefit>
            ))}
          </BenefitList>
        </BenefitsWrap>
      </Container>
    </BenefitsBlock>
  );
}

export default Benefits;
