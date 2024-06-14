import styled from 'styled-components';
import Button from '../common/Button';

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

const TitleTextArea = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;
  padding: 10px;

  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  width: 100%;
  resize: vertical;
  resize: none;
`;

const ContentTextArea = styled.textarea`
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  width: 100%;
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
