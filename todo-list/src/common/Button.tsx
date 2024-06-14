import styled from 'styled-components';

const backgroundColor = {
  default: '#D6D6D6',
  create: '#57AC6A',
  done: '#fdd63c',
  delete: '#FD9898',
};

const StyledButton = styled.button`
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

const Button = () => {
  return <></>;
};

export default Button;
