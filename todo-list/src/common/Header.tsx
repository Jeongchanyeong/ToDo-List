import styled from 'styled-components';
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor.lightGreen};
  position: fixed;
  width: 80%;
  padding: 20px 0px;
`;

const Title = styled.div`
  font-size: 48px;
  color: white;
  text-align: center;
`;

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Header;
