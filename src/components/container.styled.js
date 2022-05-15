import styled from 'styled-components';
import { device } from '../assets/styles/media-query';

export const ContainerBlock = styled.div`
  margin: 0 20px;
  max-width: 100%;

  @media ${device.tablet} {
    margin: 0 40px;
  }

  @media ${device.laptopM} {
    margin: 0 auto;
    max-width: 1128px;
  }
`;
