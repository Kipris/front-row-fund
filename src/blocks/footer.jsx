import React, { useState, useContext } from 'react';
import { FooterBlock, FooterWrap, Info, Logo, Navigation, Left, Right, Contacts, ListItem } from './footer.styled';
import { Container } from '../components/container';
import { Link } from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from '../assets/img/logo-white.svg';
import { DialogContext } from '../app';

const Footer = () => {
  const { activeDialog, setActiveDialog } = useContext(DialogContext);

  const [ leftNav ] = useState([
    { title: 'Home', scrollToElement: 'banner' },
    { title: 'About us', scrollToElement: 'about' },
    { title: 'Team', scrollToElement: 'team' },
    { title: 'Portfolio', scrollToElement: 'portfolio' },
    { title: 'Contact Us', scrollToElement: 'contact' },
  ]);

  const [ rightNav ] = useState([
    { title: 'Terms of Use', text: '', click: () => setActiveDialog({ id: 'terms-of-use', title: 'Terms of Use' }) },
    { title: 'Privacy Policy', text: '', click: () => setActiveDialog({ id: 'privacy-policy', title: 'Privacy Policy' }) },
    { title: 'Legal Disclaimer', text: '', click: () => setActiveDialog({ id: 'legal-disclaimer', title: 'Legal Disclaimer' }) },
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
                width='auto' height='auto'
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
              {rightNav.map(({ title, click }, index) => (
                <ListItem
                  key={index}
                  onClick={click}
                >
                  {title}
                </ListItem>
              ))}
            </Right>
          </Navigation>
          <Contacts>
            <a
              href='https://www.google.com/maps/place/503+Washington+Ave+%232c,+Newtown,+PA+18940,+%D0%A1%D0%A8%D0%90/@40.2291181,-74.9306173,17z/data=!3m1!4b1!4m5!3m4!1s0x89c154f334f3e707:0x285dd94510e9cccc!8m2!3d40.2291181!4d-74.9284286'
              target='_blank'
              rel='noreferrer'
            >
              503 E. Washington Ave. Ste. 2C Newtown, PA. 18940
            </a>
            <a href='mailto:hello@frontrowfund.com' target='_blank' rel='noreferrer'>hello@frontrowfund.com</a>
          </Contacts>
        </FooterWrap>
      </Container>
    </FooterBlock>
  );
}

export default Footer;
