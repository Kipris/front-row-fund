import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const BenefitsBlock = styled.div`
  padding: 40px 0 35px;
  background-image: linear-gradient(to bottom right, #1B9690 -30%, #7E1FAB);
  color: ${Colors.white};

  @media ${device.tablet} {
    padding: 56px 0 53px;
  }

  @media ${device.laptop} {
    padding: 74px 0 70px;
  }
`;

export const BenefitsWrap = styled.div``;

export const Title = styled.h3`
  letter-spacing: .6px;

  @media ${device.laptop} {
    margin-bottom: 22px;
  }
`;

export const BenefitList = styled.div`
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
    row-gap: 24px;
  }

  @media ${device.laptop} {
    row-gap: 46px;
  }
`;

export const Benefit = styled.div`
  margin-bottom: 24px;

  @media ${device.tablet} {
    margin-bottom: 0;
  }
`;

export const BenefitIcon = styled(LazyLoadImage)``;

export const BenefitTitle = styled.h5`
  margin: 8px 0;

  @media ${device.tablet} {
    margin: 8px 0 18px;
  }
`;

export const BenefitDescription = styled.div`
  line-height: 20px;

  @media ${device.tablet} {
    line-height: 24px;
  }
`;
