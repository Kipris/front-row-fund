import React from 'react';
import { BannerBlock, BannerWrap, Title, Subtitle } from './banner.styled';
import { Container } from '../components/container';
import { Button, ButtonColor } from '../components/button';
import { Link } from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import bannerBg from '../assets/img/banner-bg.png';

const Banner = () => {
  return (
    <BannerBlock id='banner'>
      <Container>
        <BannerWrap>
          <Title>We invest in founders and management teams <span>building the future</span></Title>
          <Subtitle>
            Our team partners with early-stage companies, preparing them for growth and helping them avoid the hurdles that inhibit success
          </Subtitle>
          <Link
            to='contact'
            smooth={true}
            duration={1000}
            offset={-70}
          >
            <Button
              color={ButtonColor.verdigris}
              textColor={ButtonColor.darkBlue}
            >
              Partner with us
            </Button>
          </Link>
        </BannerWrap>
      </Container>
      <LazyLoadImage
        alt='Global Aid Bg'
        effect='blur'
        src={bannerBg}
      />
    </BannerBlock>
  );
}

export default Banner;
