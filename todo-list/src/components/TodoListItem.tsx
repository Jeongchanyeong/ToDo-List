import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-top: 14px;
  width: 80%;
  height: 35px;
  border-radius: 8px 8px 0px 0px;
  border-bottom: 1px solid #f3f3f3;

  color: #848484;

  padding: 20px 10px;

  cursor: pointer;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DetailWrapper = styled(TitleWrapper)`
  margin-top: 10px;
  font-size: 13px;
`;
const Date = styled(Title)`
  flex: 5;
`;
const Content = styled(Date)`
  flex: 5;
`;

// 클릭시 Wrapper background color 바껴야됨

const TodoListItem = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>오늘 저녁은 어땠을까</Title>
      </TitleWrapper>
      <DetailWrapper>
        <Date>2024.05.23 19:30</Date>
        <Content>오늘 저녁을 적게 먹었더니 배가 고프다 </Content>
      </DetailWrapper>
    </Wrapper>
  );
};

export default TodoListItem;
