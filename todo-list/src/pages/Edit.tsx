import styled from 'styled-components';
import TodoList from '../components/TodoList';
import Editor from '../components/Editor';
import Header from '../common/Header';
import Button from '../common/Button';

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 60vw;
  height: 100vh;
`;

const TodoListWrapper = styled.div`
  display: flex;
  height: 92vh;
`;
const Edit = () => {
  return (
    <Wrapper>
      <Header
        buttonVariety={
          <Button buttonType={'default'} onClick={() => {}}>
            {'Back'}
          </Button>
        }
      >
        {'Edit Todo'}
      </Header>
      <TodoListWrapper>
        <TodoList />
        <Editor />
      </TodoListWrapper>
    </Wrapper>
  );
};

export default Edit;
