import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

const CommonButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.bgColor[props.bgColor]};
  width: ${(props) => props.theme.width[props.width]};
  height: ${(props) => props.theme.height[props.height]};

  border: none;
  border-radius: 7px;
  font-size: 18px;
  text-align: center;
  transition: all 0.3s;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor: keyof DefaultTheme['bgColor'];
  width: keyof DefaultTheme['width'];
  height: keyof DefaultTheme['height'];

  children: React.ReactNode;
}

const Button = ({ bgColor, width, height, children, onClick }: ButtonProps) => {
  return (
    <CommonButton
      onClick={onClick}
      bgColor={bgColor}
      width={width}
      height={height}
    >
      {children}
    </CommonButton>
  );
};

export default Button;
