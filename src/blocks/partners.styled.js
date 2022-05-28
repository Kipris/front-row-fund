import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const PartnersBlock = styled.div`

`;

export const PartnersWrap = styled.div`
  position: relative;
  padding: 19px 0;
  box-shadow: 0 1px 3px rgba(118, 139, 168, .2);
  box-sizing: border-box;
  background: ${Colors.white};

  @media ${device.tablet} {
    position: absolute;
    width: calc(100% - 78px);
    transform: translateY(-100px);
    background: ${Colors.white};
    border-radius: 8px;
    margin: 0 39px;
    padding: 24px 0;
    z-index: 1;
  }

  @media ${device.laptop} {
    position: absolute;
    max-width: 1128px;
    margin: 0 auto;
    padding: 24px 33px;
    left: 50%;
    transform: translate(-50%, -67px);
  }
`;

export const List = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  > a:last-child {
    position: relative;
    left: -17px;
  }

  > a:last-child button {
    padding: 10px 23px;
  }

  @media ${device.laptop} {
    > a:last-child {
      left: 0;
    }
  }
`;

export const ListItem = styled.div`
  margin: 8px 8px;

  &:first-child {
    margin-left: 0;
    width: 24vw;
  }
  &:nth-child(2) {
    max-width: 24.8vw;
  }
  &:nth-child(3) {
    margin-right: 0;
    max-width: 30.6666666667vw;
  }
  &:nth-child(4) {
    margin-right: 42px;
    max-width: 46.4vw;
  }

  img {
    width: 100%;
    height: auto;
  }

  @media ${device.tablet} {
    margin: 8px 20px;
    width: 25%;

    &:first-child {
      max-width: 149px;
    }
    &:nth-child(2) {
      max-width: 158px;
    }
    &:nth-child(3) {
      max-width: 218px;
    }
    &:nth-child(4) {
      max-width: 277px;
    }
  }
`;
