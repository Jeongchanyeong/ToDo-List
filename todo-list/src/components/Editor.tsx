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

  border-radius: 10px;
  background-color: #f7f7f7;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  box-sizing: border-box;
  padding: 20px;

  border-radius: 10px;
  background-color: #f7f7f7;
`;

const TitleTextArea = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;
  padding: 14px;
  font-size: 18px;
  font-family: 'Poor Story', system-ui;
  border: 2px solid rgb(229, 229, 229);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  width: 100%;
  resize: vertical;
  resize: none;
`;

const ContentTextArea = styled.textarea`
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  width: 100%;
  font-size: 18px;
  border: 2px solid rgb(229, 229, 229);

  font-family: 'Poor Story', system-ui;

  resize: vertical;
  resize: none;
  padding: 10px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 10%;

  gap: 25px;
`;
const Editor = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Date>2024. 04. 24</Date>
      <Title>
        <TitleTextArea placeholder="오늘 할 작업의 대제목을 적어주세요"></TitleTextArea>
      </Title>
      <Content>
        <ContentTextArea placeholder="오늘 할 작업을 세세하게 적어주세요."></ContentTextArea>
      </Content>
      <ButtonWrapper>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          bgColor="default"
          width="medium"
          height="medium"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {}}
          bgColor="yellow"
          width="medium"
          height="medium"
        >
          Done
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Editor;
