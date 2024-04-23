import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const backgroundColor = {
  default: '#D6D6D6',
  create: '#57AC6A',
  done: '#fdd63c',
  delete: '#FD9898',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  buttonType: 'default' | 'create' | 'done' | 'delete';
  width?: string;
  height?: string;
}

const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '50px'};
  border: none;
  border-radius: 7px;
  background-color: ${(props) => backgroundColor[props.buttonType]};
  font-size: 18px;
  text-align: center;
  transition: all 0.3s;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({
  buttonType,
  onClick,
  children,
  width,
  height,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      buttonType={buttonType}
      width={width}
      height={height}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
