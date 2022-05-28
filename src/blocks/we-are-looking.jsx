import React from 'react';
import { WeAreLookingBlock, WeAreLookingWrap, Banner, BannerTitle, Info, Description, Title, Option } from './we-are-looking.styled';
import { Container } from '../components/container';
import { Link } from 'react-scroll';
import { Button, ButtonColor, ButtonType } from '../components/button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import weAreLooking from '../assets/img/we-are-looking.webp';

const WeAreLooking = () => {
  return (
    <WeAreLookingBlock id='we-are-looking'>
      <Banner>
        <LazyLoadImage
          alt='We are looking Bg'
          effect='blur'
          src={weAreLooking}
        />
        <BannerTitle>
          We are looking to invest in companies where we can have an immediate and direct impact
        </BannerTitle>
      </Banner>
      <Container>
        <WeAreLookingWrap>
          <Info>
            <Description>We’ve started companies where we have seen what works and what leads to failures and want to bring that knowledge to portfolio companies. We want to leverage what we have learned so early-stage companies don’t have to endure the same growing pains</Description>
            <Title>What we looking for</Title>
            <div>
              <Option>Technology companies that have the <strong>potential to disrupt a large market</strong> with a TAM in excess of $1bn or will grow to $1bn+. We look for companies that have the potential to scale to global markets and that provide a business model or technology that will revolutionize or modernize existing sectors</Option>
              <Option>Companies that are on the <strong>edge of growth that have an Minimum Viable Product (MVP) with customer traction</strong> and early product market fit. We look for companies that have early revenue and/or a strong pipeline</Option>
            </div>
          </Info>
          <Link
            to=''
            smooth={true}
            duration={1000}
            offset={-70}
          >
            <Button>
              Contact us
            </Button>
          </Link>
        </WeAreLookingWrap>
      </Container>
    </WeAreLookingBlock>
  );
}

export default WeAreLooking;
