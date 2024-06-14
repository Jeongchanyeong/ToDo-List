import styled from 'styled-components';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  flex: 1;
  padding: 0px 70px;

  gap: 15px;
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff4cf;
  border-radius: 20%;

  width: auto;
  padding: 5px 20px;
  height: 4%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 10%;

  border-radius: 5px;
  background-color: #f7f7f7;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  box-sizing: border-box;
  padding: 20px;

  border-radius: 5px;
  background-color: #f7f7f7;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 10%;

  gap: 25px;
`;

const Viewer = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Date>2024. 04. 24</Date>

      <Title>{'asdsad'}</Title>
      <Content>{'asdasd'}</Content>
      <ButtonWrapper>
        <Button
          onClick={() => {
            navigate('/edit');
          }}
          bgColor="default"
          width="medium"
          height="medium"
        >
          Edit
        </Button>
        <Button onClick={() => {}} bgColor="red" width="medium" height="medium">
          Delete
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Viewer;
