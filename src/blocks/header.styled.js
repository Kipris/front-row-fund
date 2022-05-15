import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';
import { Link } from 'react-scroll';

export const HeaderBlock = styled.div`
  position: ${({ sticky }) => sticky === 'true' ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  background: ${Colors.white};
  box-shadow: ${({ sticky }) => sticky === 'true' ? '0 1px 2px rgba(0, 0, 0, .1)' : 'none'};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: ${({ sticky }) => sticky === 'true' ? '0 2px 4px rgba(0, 0, 0, .15)' : 'none'};
    height: 4px;
  }
`;

export const HeaderWrap = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    padding: 32px 0;
  }

  @media ${device.laptop} {
    padding: 19px 0;
  }
`;

export const ToggleWrap = styled.div`
  position: relative;
  top: -1px;
  cursor: pointer;
  width: 54px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.grey};
  border-radius: 8px;

  @media ${device.laptop} {
    display: none;
  }
`;

export const Toggle = styled.div`
  position: relative;
  width: 24px;
  height: 3px;
  background: ${Colors.darkBlue};

  :before,
  :after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background: inherit;
    left: 0;
  }
  :before {
    top: -7px;
  }
  :after {
    bottom: -7px;
  }
`;

export const ToggleClose = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 32px;

  :before,
  :after {
    content: '';
    position: absolute;
    width: 24px;
    height: 3px;
    background: ${Colors.darkBlue};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  :before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  :after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const Navigation = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  background: ${Colors.white};
  flex-direction: column;
  left: 0;
  top: 89px;
  height: calc(100vh - 89px);
  transform: ${({ active }) => active === 'true' ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform .2s ease-in;

  a {
    display: flex;
    justify-content: center;
    height: 34px;
  }

  button {
    width: 124px;
    height: inherit;
  }

  @media ${device.laptop} {
    position: relative;
    width: auto;
    flex-direction: row;
    background: transparent;
    left: auto;
    top: auto;
    height: auto;
    transform: translateX(0);
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding-left: 13.488889vw;
  }
`;

export const Logo = styled.a`
  display: block;
  width: 119px;
  min-width: 119px;
  height: 47px;

  > span,
  > span img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

export const List = styled.div`
  display: flex;
  padding: 0 9px;
  flex-direction: column;
  width 50%;
  margin: 30px auto 0;
  text-align: center;

  @media ${device.laptop} {
    flex-direction: row;
    width auto;
    margin: 0;
  }
`;

export const ListItem = styled(Link)`
  cursor: pointer;
  position: relative;
  padding: 20px 10px;
  color: ${({ active }) => active === 'true' ? Colors.verdigris : Colors.darkBlue};
  font-weight: ${({ active }) => active === 'true' ? 600 : 500};
  z-index: 10;
  font-size: 15px;
  max-width: 300px;
  margin: 0 auto;
  white-space: nowrap;
  align-items: center;
  text-transform: uppercase;

  :hover {
    color: ${Colors.verdigris};
  }

  :after {
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    left: 0;
    top: -19px;
    height: 4px;
    background-color: ${({ active }) => active === 'true' ? Colors.verdigris : 'transparent'};
  }

  @media ${device.laptop} {
    padding: 20px 15px;
  }
`;
