import styled from 'styled-components';
import Button from '../common/Button';

const Wrapper = styled.div`
  display: flex;

  flex-direction: column;

  margin: 20px 100px 20px;
  width: 65%;

  color: #1d1d1d;

  div {
    margin-top: 15px;
  }
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff4cf;
  border-radius: 15px;
  margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */

  width: 20%;
  height: 4%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  padding: 0px 15px;
  width: auto;
  height: 8%;

  border-radius: 5px;
  background-color: #f7f7f7;
`;

const Content = styled.div`
  display: flex;
  width: auto;
  height: 80%;

  padding: 15px;

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
    </Wrapper>
  );
};

export default Editor;
