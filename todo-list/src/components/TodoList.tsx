import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 35%;

  height: 100%;
  border-right: 2px solid #f3f3f3;
`;

const TodoList = () => {
  return (
    <Wrapper>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </Wrapper>
  );
};

export default TodoList;
