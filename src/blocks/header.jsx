import React, { useState } from 'react';
import { HeaderBlock, HeaderWrap, Toggle, Navigation, Logo, List, ListItem, ToggleWrap, ToggleClose } from './header.styled';
import { Link } from 'react-scroll';
import { Container } from '../components/container';
import { Button, ButtonColor, ButtonType } from '../components/button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from '../assets/img/frlogo.svg';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Header = () => {
  const [ menuActive, toggleMenuActive ] = useState(false);
  const [ isSticky, setSticky ] = useState(false);

  const [ list, updateList ] = useState([
    { title: 'Home', scrollToElement: 'banner', isActive: true },
    { title: 'About us', scrollToElement: 'about', isActive: false },
    { title: 'Team', scrollToElement: 'team', isActive: false },
    { title: 'Portfolio', scrollToElement: 'portfolio', isActive: false },
    { title: 'Contact Us', scrollToElement: 'contact', isActive: false },
  ]);

  const handleNavigate = (i) => {
    const updatedList = [...list];
    updatedList.map((item, index) => {
      if (index === i) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
      return item;
    });
    toggleMenuActive(false);
    updateList(updatedList);
  };

  const toggleHeaderSticky = () => {
    if (window.scrollY >= 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  window.addEventListener('scroll', toggleHeaderSticky);

  return (
    <HeaderBlock
      active={menuActive.toString()}
      sticky={isSticky.toString()}
    >
      <Container>
        <HeaderWrap>
          <Logo
            href={window.location}
            sticky={isSticky.toString()}
          >
            <LazyLoadImage
              alt='Front Row Fund Logo'
              effect='blur'
              src={logo}
            />
          </Logo>
          <ToggleWrap
            onClick={() => toggleMenuActive(!menuActive)}
          >
            {menuActive ? (
              <ToggleClose
                sticky={isSticky.toString()}
              />
            ) : (
              <Toggle
                sticky={isSticky.toString()}
              />
            )}
          </ToggleWrap>
          <Navigation
            active={menuActive.toString()}
          >
            <List>
              {list.map(({ title, isActive, scrollToElement }, index) => (
                <ListItem
                  key={index}
                  active={isActive.toString()}
                  sticky={isSticky.toString()}
                  to={scrollToElement}
                  onClick={() => handleNavigate(index)}
                  smooth={true}
                  duration={1000}
                  offset={-70}
                >
                  {title}
                </ListItem>
              ))}
            </List>
            {/* <Link
              to='contact'
              smooth={true}
              duration={1000}
              offset={-70}
            >
              <Button
                color={ButtonColor.darkBlue}
                textColor={ButtonColor.darkBlue}
                type={ButtonType.outlined}
              >
                Get started
              </Button>
            </Link> */}
          </Navigation>
        </HeaderWrap>
      </Container>
    </HeaderBlock>
  );
}
