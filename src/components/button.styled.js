import styled from 'styled-components';
import { device } from '../assets/styles/media-query';

const Button = styled.button`
  cursor: pointer;
  font-size: 16px;
  border-radius: 8px;
  letter-spacing: .2px;
  font-weight: 600;
  color: ${({ textColor }) => textColor};


`;

export const ButtonNormal = styled(Button)`
  padding: 12px 20px;
  border: none;
  background: ${({ color }) => color};

  @media ${device.tablet} {
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export const ButtonOutlined = styled(Button)`
  padding: 8px 1px;
  border: 2px solid  ${({ color }) => color};
  background: transparent;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 15px;
  white-space: nowrap;

  @media ${device.tablet} {
    font-size: 15px;
  }
`;

export const ButtonGhost = styled(Button)`
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  padding: 0;
  text-transform: uppercase;
  border: none;
  background: transparent;

  @media ${device.tablet} {
    font-size: 18px;
  }
`;
