import React, { useState } from 'react';
import { FooterBlock, FooterWrap, Info, Logo, Navigation, Left, Right, Contacts, ListItem } from './footer.styled';
import { Container } from '../components/container';
import { Link } from 'react-scroll';
import { Button, ButtonColor, ButtonType } from '../components/button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from '../assets/img/logo-white.svg';

const Footer = () => {
  const [ leftNav ] = useState([
    { title: 'Home', scrollToElement: 'banner' },
    { title: 'About us', scrollToElement: 'about' },
    { title: 'Team', scrollToElement: 'team' },
    { title: 'Portfolio', scrollToElement: 'portfolio' },
    { title: 'Contact Us', scrollToElement: 'contact' },
  ]);

  const [ rightNav ] = useState([
    { title: 'Terms of Use', text: '' },
    { title: 'Privacy Policy', text: '' },
    { title: 'Legal Disclaimer', text: '' },
  ]);

  return (
    <FooterBlock id='footer'>
      <Container>
        <FooterWrap>
          <Info>
            <Logo
              href={window.location}
            >
              <LazyLoadImage
                alt='Front Row Fund Logo'
                effect='blur'
                src={logo}
              />
            </Logo>
            <div>
              <span>Copyright © 2022</span>
              <span>All rights reserved</span>
            </div>
          </Info>
          <Navigation>
            <Left>
              {leftNav.map(({ title, scrollToElement }, index) => (
                <Link
                  key={index}
                  to={scrollToElement}
                  smooth={true}
                  duration={1000}
                  offset={-70}
                >
                  {title}
                </Link>
              ))}
            </Left>
            <Right>
              {rightNav.map(({ title }, index) => (
                <ListItem
                  key={index}
                >
                  {title}
                </ListItem>
              ))}
            </Right>
          </Navigation>
          <Contacts>
            <a href='#' target='_blank' rel='noreferrer'>503 E. Washington Ave. Ste. 2C Newtown, PA. 18940</a>
            <a href='mailto:hello@frontrowfund.com' target='_blank' rel='noreferrer'>hello@frontrowfund.com</a>
          </Contacts>
        </FooterWrap>
      </Container>
    </FooterBlock>
  );
}

export default Footer;
