import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const Title = styled.div``;

export const Link = styled.div`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Subtitle = styled.div`
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-top: 6px;
  letter-spacing: 0.7px;
`;

export const Small = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  margin-bottom: 24px;
  color: #808080;
  letter-spacing: 0.6px;
`;

export const Text = styled.div`
  font-size: 14px;
  line-height: 17px;
  font-weight: normal;
  margin-bottom: 29px;
  letter-spacing: 0.4px;
`;

export const Position = styled.div`
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
  margin-bottom: 19px;
  letter-spacing: 0.6px;
`;

export const MoreInfo = styled.div`
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 19px;
  letter-spacing: 0.5px;
  text-align: left;
`;

export const SocialBlock = styled.div``;

export const SocialLink = styled.a``;
