import styled from 'styled-components';
import Editor from '../components/Editor';
import Header from '../common/Header';
import TodoWrapper from '../components/TodoWrapper';

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 80vw;
  height: 100vh;
`;

const TodoListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const Edit = () => {
  return (
    <Wrapper>
      <Header title="Edit Page" />
      <TodoListWrapper>
        <TodoWrapper />
        <Editor />
      </TodoListWrapper>
    </Wrapper>
  );
};

export default Edit;
