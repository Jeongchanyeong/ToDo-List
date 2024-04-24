import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #67ba89;
  width: 100%;
  height: 8vh;
`;
const PageNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  color: white;
  font-size: 50px;
  margin-left: 120px;
`;
const ButtonWrapper = styled.div`
  margin-right: 15px;
`;

interface HeaderProps {
  children: string;
  buttonVariety?: any;
  // JSX표현식의 결과물은 any?
}

const Header = ({ children, buttonVariety }: HeaderProps) => {
  return (
    <Wrapper>
      <PageNameWrapper>{children}</PageNameWrapper>
      <ButtonWrapper>{buttonVariety}</ButtonWrapper>
    </Wrapper>
  );
};

export default Header;
