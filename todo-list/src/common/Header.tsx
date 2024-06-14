import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.bgColor.lightGreen};
  position: fixed;
  width: 100%;
  padding: 20px 60px;

  top: 0;
`;

const Header = () => {
  return (
    <Wrapper>
      <Button bgColor="default" width="medium" height="medium">
        Back
      </Button>
      <Button bgColor="yellow" width="medium" height="medium">
        Done
      </Button>
      <Button bgColor="red" width="medium" height="medium">
        Delete
      </Button>
      <Button bgColor="darkGreen" width="medium" height="medium">
        Create
      </Button>
      <Button bgColor="lightYellow" width="large" height="large">
        Login
      </Button>
    </Wrapper>
  );
};

export default Header;
