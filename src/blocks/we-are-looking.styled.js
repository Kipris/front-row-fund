import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';
import option from '../assets/img/option.svg';

export const WeAreLookingBlock = styled.div`
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 14px rgba(0, 0, 0, .06);
  background-color: ${Colors.white};

  button {
    width: 100%;
  }

  @media ${device.tablet} {
    button {
      width: auto;
      min-width: 170px;
    }
  }

  @media ${device.laptopL} {
    height: 512px;
    box-sizing: border-box;

    > div:last-child {
      position: absolute;
      background: ${Colors.white};
      z-index: 1;
      top: 80px;
      right: 0;
      max-width: 900px;
      border-radius: 30px 0 0 30px;
      padding: 40px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, .06);
      box-sizing: border-box;
    }

    button {
      font-size: 16px;
    }
  }
`;

export const WeAreLookingWrap = styled.div`
  padding: 24px 28px;

  @media ${device.tablet} {
    padding: 32px 0px;
  }

  @media ${device.laptopL} {
    padding: 0;
  }
`;

export const Banner = styled.div`
  background: #283250;
  position: relative;
  overflow: hidden;

  .lazy-load-image-background {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .lazy-load-image-background img {
    width: inherit;
    height: auto;
  }

  @media ${device.laptopL} {
    height: inherit;
  }
`;

export const BannerTitle = styled.h3`
  padding: 40px 0;
  color: ${Colors.white};
  margin 0 45px;
  text-align: center;
  font-weight: 500;

  @media ${device.tablet} {
    padding: 58px 0 39px;
    font-size: 32px;
    line-height: 38px;
    margin: 0 73px;
  }

  @media ${device.laptopL} {
    max-width: 350px;
    text-align: left;
    font-size: 40px;
    line-height: 47px;
    margin: 0 163px;
    padding: 78px 0 39px;
  }
`;

export const Info = styled.div``;

export const Description = styled.div`
  line-height: 20px;
  margin-bottom: 24px;

  @media ${device.tablet} {
    line-height: 24px;
  }

  @media ${device.laptopL} {
    font-size: 16px;
    max-width: 674px;
  }
`;

export const Title = styled.h5`
  margin-bottom: 16px;

  @media ${device.tablet} {
    margin-bottom: 12px;

    & + div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 25px;
      row-gap: 24px;
    }
  }

  @media ${device.laptopL} {
    & + div {
      margin-right: 90px;
    }
  }
`;

export const Option = styled.div`
  position: relative;
  padding-top: 44px;
  margin-bottom: 24px;
  line-height: 20px;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: url(${option});
    width: 32px;
    height: 32px;
  }

  @media ${device.tablet} {
    line-height: 24px;
  }

  @media ${device.laptopL} {
    font-size: 16px;
  }
`;
