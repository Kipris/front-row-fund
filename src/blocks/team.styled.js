import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const TeamBlock = styled.div`
  padding: 56px 0 35px;
  background: ${Colors.grey};

  @media ${device.tablet} {
    padding: 56px 0 45px;
  }

  @media ${device.laptopL} {
    padding: 146px 0 65px;
  }
`;

export const TeamWrap = styled.div``;

export const Title = styled.h3`
  position: relative;
  font-weight: bold;
  margin-bottom: 52px;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -27px;
    width: 64px;
    height: 4px;
    border-radius: 24px;
    background-color: ${Colors.verdigris};
  }

  @media ${device.tablet} {
    margin-bottom: 57px;
  }
`;

export const AdvisorTitle = styled.h4`
  position: relative;
  font-weight: bold;
  margin: 31px 0 52px;
  letter-spacing: .7px;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -27px;
    width: 64px;
    height: 4px;
    border-radius: 24px;
    background-color: ${Colors.verdigris};
  }

  @media ${device.tablet} {
    margin: 61px 0 52px;
  }

  @media ${device.laptop} {
    margin: 39px 0 60px;
  }
`;

export const TeamList = styled.div`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 25px;
    row-gap: 24px;
  }

  @media ${device.tablet} {
    margin-bottom: 18px;
  }

  > div {
    position: relative;
  }
`;

export const TeamItem = styled.div`
  cursor: pointer;
  position: relative;
  display: grid;
  grid-template-columns: 30.232836vw 1fr;
  margin-bottom: 22px;
  column-gap: 20px;

  @media ${device.tablet} {
    grid-template-columns: 184px 1fr;
    background: ${Colors.white};
    border-radius: 8px;
    column-gap: 23px;
    margin-bottom: 18px;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    margin-bottom: 0;

    button {
      display: none;
    }

    &:before,
    &:after {
      border-radius: 0 0 8px 8px;
    }

    &:hover :last-child {
      transform: translateY(0);
    }
  }
`;

export const Shadow = styled.div`
  @media ${device.tablet} {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    &:before,
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 8px;
    }

    &:before {
      box-shadow: 0 1px 3px rgba(118, 139, 168, .2);
    }

    &:after {
      box-shadow: 0 1px 20px rgba(186, 195, 212, .25);
    }
  }
`;

export const TeamMoreInfo = styled.div`
  display: none;

  @media ${device.laptop} {
    transform: translateY(101%);
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(40, 50, 80, .9);
    z-index: 2;
    border-radius: 0 0 8px 8px;
    padding: 26px 26px 28px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: .2s ease-in;
  }
`;

export const MoreInfoDescription = styled.div`
  color: ${Colors.white};
  font-size: 14px;
  line-height: 18px;
  margin: 100% 0 16px;
`;

export const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: 26px 26px 26px;
  column-gap: 12px;

  > div {
    background: #828799;
    border-radius: 50%;
    width: 26px;
    height: 26px;
  }
`;

export const TeamPhoto = styled(LazyLoadImage)`
  position: relative;
  z-index: 1;
  min-width: 112px;
  width: 30.232836vw;
  height: auto;
  border-radius: 8px;

  @media ${device.tablet} {
    max-width: 184px;
    border-radius: 8px 0 0 8px;
  }

  @media ${device.laptop} {
    max-width: 100%;
    width: 100%;
    border-radius: 0;
  }
`;

export const TeamInfo = styled.div`
  @media ${device.tablet} {
    position: relative;
    z-index: 1;
    padding: 23px 5px 5px 0;
  }

  @media ${device.laptop} {
    padding: 26px 5px 16px 22px;
  }
`;

export const Name = styled.h6`
  margin: 0 0 3px;

  @media ${device.tablet} {
    margin: 0 0 6px;
  }
`;

export const Position = styled.div`
  font-size: 14px;
  color: #677D9F;
  margin-bottom: 11px;

  @media ${device.laptop} {
    font-size: 15px;
  }
`;

export const Description = styled.div`
  line-height: 20px;
  margin-bottom: 4px;

  @media ${device.laptop} {
    display: none;
  }
`;
