import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const HelpBlock = styled.div`
  padding: 57px 0;
  background: ${Colors.grey};

  @media ${device.tablet} {
    padding: 65px 0;
  }

  @media ${device.laptop} {
    padding: 79px 0 93px;
  }
`;

export const HelpWrap = styled.div``;

export const Title = styled.h3`
  font-weight: 600;
  letter-spacing: .7px;
`;

export const HelpList = styled.div`
  position: relative;

  &:after {
    content: '';
    background-image: linear-gradient(to bottom left, #43BFB9, #A246CD);
    filter: blur(200px);
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: .22;
  }

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
    row-gap: 24px;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const HelpItem = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 8px;
  background: ${Colors.white};
  margin-bottom: 15px;
  padding: 24px;

  :last-child {
    margin-bottom: 0;
  }

  @media ${device.tablet} {
    margin-bottom: 0;
    min-height: 229px;
    padding: 43px 32px;
  }

  @media ${device.laptop} {
    min-height: auto;
    padding: 54px 10px 10px 32px;
  }
`;

export const HelpIcon = styled(LazyLoadImage)`
  margin-bottom: 4px;
`;

export const HelpTitle = styled.h5`
  @media ${device.tablet} {
    margin-bottom: 16px;
  }
`;

export const HelpDescription = styled.div`
  line-height: 20px;

  @media ${device.tablet} {
    line-height: 24px;
  }
`;
