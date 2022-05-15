import React, { useState } from 'react';
import { PartnersBlock, PartnersWrap, List, ListItem } from './partners.styled';
import { Button, ButtonColor } from '../components/button';
import { Link } from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import notiv from '../assets/img/notiv.png';
import preshow from '../assets/img/preshow.png';
import carealign from '../assets/img/care.png';
import gatehouse from '../assets/img/gatehouse.png';
import notivSmall from '../assets/img/notiv.svg';
import preshowSmall from '../assets/img/preshow.svg';
import carealignSmall from '../assets/img/carealign.svg';
import gatehouseSmall from '../assets/img/gatehouse.svg';

const Partners = () => {
  const [ partners ] = useState([
    { name: 'notiv', imgSrc: notiv, imgSmallSrc: notivSmall, link: '' },
    { name: 'preshow', imgSrc: preshow, imgSmallSrc: preshowSmall, link: '' },
    { name: 'carealign', imgSrc: carealign, imgSmallSrc: carealignSmall, link: '' },
    { name: 'gatehouse', imgSrc: gatehouse, imgSmallSrc: gatehouseSmall, link: '' },
  ]);

  return (
    <PartnersBlock id='partners'>
      <PartnersWrap>
        <List>
          {partners.map(({ imgSrc, imgSmallSrc, name, link }, index) => (
            <ListItem
              key={index}
              target='_blank'
              rel='noreferrer'
              href={link}
            >
              <LazyLoadImage src={imgSmallSrc} alt={name} />
            </ListItem>
          ))}
          <Link
            to=''
            smooth={true}
            duration={1000}
            offset={-70}
          >
            <Button
              color={ButtonColor.verdigris}
              textColor={ButtonColor.white}
            >
              More
            </Button>
          </Link>
        </List>
      </PartnersWrap>
    </PartnersBlock>
  );
}

export default Partners;
