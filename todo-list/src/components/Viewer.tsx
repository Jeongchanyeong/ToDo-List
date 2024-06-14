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
  padding: 45px 36px 38px 36px;
  width: 100%;
  height: 10%;
  font-size: 18px;
  border-radius: 5px;
  background-color: #f7f7f7;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  box-sizing: border-box;
  padding: 34px 32px 32px;
  font-size: 18px;
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

      <Title>{'오늘 할 작업의 대제목을 적어주세요.'}</Title>
      <Content>{'오늘 할 작업을 세세하게 적어주세요.'}</Content>
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
