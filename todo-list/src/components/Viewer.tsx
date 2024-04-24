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

  padding-left: 15px;
  width: auto;
  height: 5%;

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

const Viewer = () => {
  return (
    <Wrapper>
      <Date>2024. 04. 24</Date>

      <Title>제목: aaa</Title>
      <Content>aaa</Content>
      <ButtonWrapper>
        <Button buttonType={'default'} onClick={() => {}}>
          {'Edit'}
        </Button>
        <Button buttonType={'delete'} onClick={() => {}}>
          {'Delete'}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Viewer;
