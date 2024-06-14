import styled from 'styled-components';
import TodoList from '../components/TodoList';
import Editor from '../components/Editor';

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
const Edit = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <TodoListWrapper>
        <TodoList />
        <TodoList />
        <Editor />
      </TodoListWrapper>
    </Wrapper>
  );
};

export default Edit;
