import React from 'react';
import { ButtonNormal, ButtonOutlined, ButtonGhost } from './button.styled';
import { Colors } from '../assets/styles/colors';

export const ButtonColor = {
  verdigris: Colors.verdigris,
  darkBlue: Colors.darkBlue,
  white: Colors.white,
};

export const ButtonType = {
  normal: 'normal',
  outlined: 'outlined',
  ghost: 'ghost',
};

export const Button = ({
  color = ButtonColor.verdigris,
  textColor = ButtonColor.white,
  type = ButtonType.normal,
  clickAction = false,
  children,
}) => {
  switch (type) {
    case ButtonType.normal:
      return (
        <ButtonNormal
          color={color}
          textColor={textColor}
          onClick={clickAction ? clickAction : undefined }
        >
          {children}
        </ButtonNormal>
      );
    case ButtonType.outlined:
      return (
        <ButtonOutlined
          color={color}
          textColor={textColor}
          onClick={clickAction ? clickAction : undefined }
        >
          {children}
        </ButtonOutlined>
      );
    case ButtonType.ghost:
      return (
        <ButtonGhost
          textColor={textColor}
          onClick={clickAction ? clickAction : undefined }
        >
          {children}
        </ButtonGhost>
      );
    default:
      return (
        <ButtonNormal
          color={color}
          textColor={textColor}
          onClick={clickAction ? clickAction : undefined }
        >
          {children}
        </ButtonNormal>
      );
  }
}
