import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const FooterBlock = styled.div`
  background: #080C1A;
  padding: 40px 0;
  color: ${Colors.white};
`;

export const FooterWrap = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
  }

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 16px;

    > div:first-child,
    > div:last-child {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  @media ${device.laptop} {
    > div:first-child {
      flex-direction: row;
    }
  }
`;

export const Info = styled.div`
  color: #929292;
  margin-bottom: 32px;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    padding-right: 50px;
  }

  > div > span:first-child {
    display: inline-block;
    margin-top: 6px;
  }

  @media ${device.tablet} {
    > div {
      padding-right: 0;
      margin-top: 15px;
    }
  }

  @media ${device.laptop} {
    > div {
      margin-top: 0;
      margin-left: 33px;
      position: relative;
    }

    > div:after {
      content: '';
      position: absolute;
      width: 1px;
      height: 52px;
      top: -3px;
      left: -16px;
      background: #C4C4C4;
      opacity: .4;
    }

    > div > span:first-child {
      margin-top: 10px;
    }
  }
`;

export const Logo = styled.a`
  display: block;
  width: 119px;
  height: 47px;

  > span,
  > span img {
    width: 100%;
    height: 100%;
  }
`;

export const Navigation = styled.div`
  font-weight: 500;
  margin-bottom: 17px;

  @media ${device.tablet} {
    margin-left: 14px;
  }

  @media ${device.laptop} {
    margin-left: -126px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  a {
    display: inline-block;
    margin-bottom: 13px;
  }

  @media ${device.tablet} {
    margin-right: 40px;

    a {
      margin-bottom: 16px;
    }
  }

  @media ${device.laptop} {
    margin-right: 100px;
  }
`;

export const Right = styled.div`
  padding-right: 59px;
  display: flex;
  flex-direction: column;

  > div {
    display: inline-block;
    margin-bottom: 13px;
  }

  @media ${device.tablet} {
    padding-right: 0;

    > div {
      margin-bottom: 16px;
    }
  }
`;

export const Contacts = styled.div`
  flex-direction: column;
  width: 206px;
  line-height: 18px;

  a {
    color: ${Colors.white};
    text-decoration: none;
  }

  a:first-child {
    display: inline-block;
    color: #929292;
    margin-bottom: 12px;
  }

  @media ${device.tablet} {
    text-align: right;

    a {
      display: inline-block;
    }

    a:first-child {
      margin-bottom: 8px;
    }

    a:last-child {
      width: 100%;
    }
  }
`;

export const ListItem = styled.div``;
