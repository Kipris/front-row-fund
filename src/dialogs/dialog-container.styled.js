import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';
import close from '../assets/img/close.svg';

export const DialogWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ activeDialog }) => activeDialog === 'true' ? '10000' : '-1'};
  opacity: ${({ activeDialog }) => activeDialog === 'true' ? '1' : '0'};
`;

export const DialogBackdrop = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
`;

export const DialogBody = styled.div`
  box-sizing: border-box;
  width: calc(100% - 20px);
  max-width: ${({ activeDialog }) => activeDialog === 'team-member' || activeDialog === 'advisor-member' ? '810px' : '900px'};
  min-height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${Colors.white};
  border-radius: 24px;
  box-shadow: 0 1px 24px rgba(0, 0, 0, .25);
  padding: 20px;
  max-height: calc(100% - 20px);

  @media ${device.tablet} {
    width: calc(100% - 40px);
    padding: 40px;
    max-height: calc(100% - 40px);
  }
`;

export const DialogInner = styled.div`
  display: flex;
  flex-direction: ${({ activeDialog }) => activeDialog === 'team-member' || activeDialog === 'advisor-member' ? 'column' : 'row'};
  align-items: ${({ activeDialog }) => activeDialog === 'team-member' || activeDialog === 'advisor-member' ? 'center' : 'flex-start'};
  text-align: ${({ activeDialog }) => activeDialog === 'team-member' || activeDialog === 'advisor-member' ? 'center' : 'left'};

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }
`;

export const DialogContent = styled.div`
  overflow-y: auto;
  max-height: ${({ activeDialog }) => activeDialog === 'team-member' || activeDialog === 'advisor-member' ? 'calc(100vh - 317px)' : 'calc(100vh - 138px)'};

  @media ${device.tablet} {
    max-height: calc(100vh - 173px);
  }
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
  background: url(${close});
  width: 32px;
  height: 32px;
  border: none;
`;

export const Top = styled.div`
  margin-bottom: 18px;
`;

export const Title = styled.div`
  font-size: 32px;
  line-height: 38px;
  font-weight: 700;
  letter-spacing: 1.4px
`;

export const ImageContainer = styled.div`
  min-width: 200px;
  width: 200px;
  height: 200px;

  > img {
    width: 100%;
    height: inherit;
    overflow: hidden;
    border-radius: 50%;
  }

  @media ${device.tablet} {
    margin-right: 28px;
  }
`;
