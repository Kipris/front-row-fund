import styled from 'styled-components';
import { Colors } from '../assets/styles/colors';
import { device } from '../assets/styles/media-query';

export const ContactBlock = styled.div`
  padding: 40px 0 0;
  background-image: linear-gradient(to bottom right, #1B9690 -30%, #7E1FAB);
  color: ${Colors.white};
  text-align: center;

  @media ${device.tablet} {
    padding: 46px 0 0;
  }

  @media ${device.laptop} {
    padding: 64px 0 0;
    text-align: left;
  }
`;

export const ContactWrap = styled.div`
  @media ${device.laptop} {
    display: flex;

    > div:first-child {
      max-width: 331px;
    }

    > div:last-child {

    }
  }
`;

export const Title = styled.h3`
  position: relative;
  padding: 0 23px;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -27px;
    width: 64px;
    height: 4px;
    border-radius: 24px;
    background-color: ${Colors.verdigris};
  }

  @media ${device.tablet} {
    &:after {
      bottom: -22px;
    }
  }

  @media ${device.laptop} {
    padding: 0;
    font-weight: 500;
    margin: 50px 0 20px;

    &:after {
      left: 0;
      transform: translateX(0);
    }
  }
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 23px;
  padding: 30px 35px 25px;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 26px;
    padding: 10px 60px 55px;
  }

  @media ${device.laptop} {
    padding: 30px 0 25px;
  }
`;

export const FormContainer = styled.div`
  background: ${Colors.white};
  border-radius: 16px 16px 0 0;
  padding: 25px 25px 33px;
  position: relative;
  z-index: 100;
  max-width: 693px;
  margin: 0 auto;

  @media ${device.tablet} {
    padding: 48px 39px 46px;
  }

  @media ${device.laptop} {
    max-width: 100%;
    width: 100%;
    margin-left: 50px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    > div:first-child {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 22px;
    }
  }
`;

export const Label = styled.div`
  position: relative;
  margin-bottom: 15px;
  > span {
    position: absolute;
    top: -7px;
    left: 13px;
    font-size: 12px;
    font-weight: 500;
    padding: 0 4px;
    background: ${Colors.white};
    color: ${Colors.black};
  }

  @media ${device.tablet} {
    margin-bottom: 0;
  }
`;

const FormField = `
  width: 100%;
  font-size: 16px;
  padding: 17px 16px;
  border-radius: 8px;
  background: #F4F6FA;
  border: none;
  box-sizing: border-box;
  :placeholder {
    color: red;
  }
  :focus,
  :focus-visible,
  :active {
    outline: none;
  }

  @media ${device.tablet} {
    margin-bottom: 23px;
  }
`;

export const Input = styled.input`
  ${FormField};
`;

export const Textarea = styled.textarea`
  ${FormField};
  resize: none;

  @media ${device.laptop} {
    margin-bottom: 13px;
  }
`;

export const Submit = styled.input`
  cursor: pointer;
  font-size: 16px;
  border-radius: 8px;
  letter-spacing: .2px;
  font-weight: 500;
  color: ${Colors.white};
  padding: 12px 20px;
  border: none;
  background: ${Colors.verdigris};
  width: 96px;
  text-transform: uppercase;
`;

export const Error = styled.small`
  display: inline-block;
  color: #C92519;
  font-size: 12px;
  font-weight: normal;
  margin-top: 5px;
`;

export const Success = styled.div`
  display: inline-block;
  color: ${Colors.blue};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 24px;
`;
