import styled from 'styled-components';
import TodoList from '../components/TodoList';
import Editor from '../components/Editor';
import Header from '../common/Header';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 80vw;
  height: 100vh;
`;

const TodoListWrapper = styled.div`
  display: flex;
  height: 92vh;
`;
const Create = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header
        buttonVariety={
          <Button
            buttonType={'default'}
            onClick={() => {
              navigate(-1);
            }}
          >
            {'< Back'}
          </Button>
        }
      >
        {'Create Todo'}
      </Header>
      <TodoListWrapper>
        <TodoList />
        <TodoList />
        <Editor />
      </TodoListWrapper>
    </Wrapper>
  );
};

export default Create;
