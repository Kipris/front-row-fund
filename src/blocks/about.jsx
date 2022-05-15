import React from 'react';
import { AboutBlock, AboutWrap, Feature, FeatureInfo, Title, Description, FeatureImage, FeatureImageWrap } from './about.styled';
import { Container } from '../components/container';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import dna from '../assets/img/dna.png';
import deal from '../assets/img/deal.png';

const About = () => {
  return (
    <AboutBlock id='about'>
      <Container>
        <AboutWrap>
          <Feature>
            <FeatureInfo>
              <Title>Operator led team focused on enabling companies to reach their next inflection point</Title>
              <Description>We help founders and management teams build for the future. With strong financial, transactional, and operational expertise, <strong>we help early companies prepare for growth</strong> and avoid the hurdles that inhibit early-stage success</Description>
            </FeatureInfo>
            <FeatureImage>
              <FeatureImageWrap>
                <LazyLoadImage src={dna} alt='Operator led team' />
              </FeatureImageWrap>
            </FeatureImage>
          </Feature>
          <Feature position='left'>
            <FeatureInfo>
              <Title position='left'>Broad technology and operations experience</Title>
              <Description position='left'>Having grown successful technology-enabled businesses we couple an understanding of critical technologies like <strong>AR/VR, AI and Machine Learning, Digital Ad-tech, Cloud Infrastructure, etc.</strong> with key operational pillars such as scaling, product development, logistics, customer success, financial modeling, go-to-market, governance and supply chain</Description>
            </FeatureInfo>
            <FeatureImage position='left'>
              <FeatureImageWrap position='left'>
                <LazyLoadImage src={deal} alt='Broad technology' />
              </FeatureImageWrap>
            </FeatureImage>
          </Feature>
        </AboutWrap>
      </Container>
    </AboutBlock>
  );
}

export default About;
