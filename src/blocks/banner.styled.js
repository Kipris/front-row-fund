import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const BannerBlock = styled.div`
  position: relative;
  height: 100vh;
  max-height: -webkit-fill-available;
  color: ${Colors.white};
  background-color: ${Colors.darkBlue};

  > span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  > span img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BannerWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: -webkit-fill-available;
  z-index: 1;

  @media ${device.laptop} {
    align-items: flex-start;
    text-align: left;
  }
`;

export const Title = styled.h1`
  position: relative;
  font-family: 'Inter', sans-serif;
  width: 92%;
  font-size: 32px;
  line-height: 44px;
  font-weight: 600;
  margin: 47px 0 0;

  > span {
    color: ${Colors.verdigris};
  }

  @media ${device.tablet} {
    width: 80%;
    font-size: 44px;
    line-height: 52px;
    margin: 7px 0 0;

    &:after {
      content: '';
      position: absolute;
      width: 4px;
      height: 54px;
      background: ${Colors.white};
      transform: translate(8px, -1px);
    }
  }

  @media ${device.laptop} {
    font-size: 48px;
    line-height: 58px;
    width: 100%;
    max-width: 1072px;
    margin: 53px 0 0;

    &:after {
      height: 62px;
      transform: translate(6px, 1px);
    }
  }
`

export const Subtitle = styled.small`
  display: inline-block;
  font-size: 16px;
  line-height: 24px;
  max-width: 450px;
  width: 90%;
  margin: 25px 0;

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 30px;
    max-width: 590px;
    width: 100%;
  }

  @media ${device.laptop} {
    font-size: 24px;
    line-height: 38px;
    max-width: 710px;
    margin: 27px 0 31px;
  }
`;
