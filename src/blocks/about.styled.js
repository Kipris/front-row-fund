import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const AboutBlock = styled.div`
  padding: 40px 0 1px;
  background-image: linear-gradient(to bottom, ${Colors.grey}, ${Colors.white});

  @media ${device.tablet} {
    padding: 110px 0 0;
  }

  @media ${device.laptop} {
    padding: 175px 0 33px;
  }
`;

export const AboutWrap = styled.div``;

export const Feature = styled.div`
  margin: 0 0 40px;

  @media ${device.tablet} {
    display: flex;
    margin: 0 0 56px;

    &:nth-child(2) {
      > div:first-child {
        order: 2;
        margin: 0 0 0 25px;
      }
    }
  }

  @media ${device.laptop} {
    margin: 0 0 68px;

    &:nth-child(2) {
      > div:first-child {
        margin: 36px 0 0 44px;
      }
    }
  }
`;

export const FeatureInfo = styled.div`
  @media ${device.tablet} {
    margin: 0 20px 0 0 ;
  }

  @media ${device.laptop} {
    margin: 0 20px 0 0;
  }
`;

export const Title = styled.h4`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -29px;
    width: 64px;
    height: 4px;
    border-radius: 24px;
    background-color: ${Colors.red};
  }

  @media ${device.tablet} {
    &:after {
      bottom: ${({ position }) => position === 'left' ? '-27px' : '-36px'};
    }
  }

  @media ${device.laptop} {
    max-width: 660px;
  }
`;

export const Description = styled.div`
  display: inline-block;
  font-size: 16px;
  line-height: 24px;
  margin: 25px 0 0;

  @media ${device.tablet} {
    font-size: 18px;
    margin: ${({ position }) => position === 'left' ? '30px 0 0' : '41px 0 0'};
    width: ${({ position }) => position === 'left' ? '100%' : '92%'};
  }

  @media ${device.laptop} {
    line-height: 28px;
  }
`;

export const FeatureImage = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    margin:  ${({ position }) => position === 'left' ? '0 0 0 25px' : '10px 24px 0 0'};

    img {
      position: relative;
      width: 32.6822916667vw;
      max-width: 325px;
      height: auto;
      z-index: 1;
    }
  }

  @media ${device.laptop} {
    margin:  ${({ position }) => position === 'left' ? '0 0 0 25px' : '-29px 31px 0 0'};
  }
`;

export const FeatureImageWrap  = styled.div`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    max-width: 232px;
    max-height: 232px;
    width: 23.4375vw;
    height: 23.4375vw;
    background: ${Colors.white};
    box-shadow: 0 2px 44px rgba(0, 0, 0, .14);
    left: ${({ position }) => position === 'left' ? '-25px' : 'auto'};
    right: ${({ position }) => position === 'left' ? 'auto' : '-25px'};
    bottom: -15px;
    border-radius: ${({ position }) => position === 'left' ? '0 0 0 40px' : '0 0 40px 0'};
  }
`;
