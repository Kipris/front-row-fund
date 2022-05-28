import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const PortfolioBlock = styled.div`
  background-color: ${Colors.white};
  padding: 56px 0 23px;

  @media ${device.tablet} {
    padding: 64px 0;
  }
`;

export const PortfolioWrap = styled.div``;

export const Title = styled.h3``;

export const List = styled.div`
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 26px;
    row-gap: 16px;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 50px;
  }
`;

export const ListItem = styled.div`
  color: ${Colors.darkBlue};
  margin-bottom: 32px;
  width: 100%;

  @media ${device.tablet} {
    margin-bottom: 0;
  }
`;

export const LogoWrap = styled.div`
  position: relative;
  width: 100%;
  height: 148px;
  border-radius: 8px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: auto;
  }
`;

export const ClientTitle = styled.h6`
  margin: 16px 0 8px;

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 23px;
    margin: 24px 0 8px;
  }

  @media ${device.laptop} {
    margin: 27px 0 8px;
  }
`;

export const Description = styled.div`
  line-height: 20px;

  @media ${device.tablet} {
    line-height: 24px;
  }

  @media ${device.laptop} {
    font-size: 16px;
  }
`;
