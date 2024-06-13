import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: start;

  width: 78%;
  height: 35px;
  border-radius: 8px 8px 0px 0px;
  border-bottom: 1px solid #f3f3f3;

  background-color: #ffffff;
  color: #848484;

  padding: 20px 10px;
  line-height: 1.2;

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
const Date = styled.div`
  flex: 5;
`;
const Content = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  flex: 5;
`;

// 클릭시 Wrapper background color 바껴야됨

const TodoListItem = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title></Title>
      </TitleWrapper>
      <DetailWrapper>
        <Date></Date>
        <Content></Content>
      </DetailWrapper>
    </Wrapper>
  );
};

export default TodoListItem;
