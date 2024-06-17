import React from 'react';
import TodoList from './TodoList';
import DoneTodo from './DoneTodo';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  margin-top: 120px;

  flex: 1;
  border-right: 2px solid #f3f3f3;

  height: 84%;
`;

const TodoWrapper = () => {
  return (
    <Wrapper>
      <DoneTodo />
      <TodoList />
    </Wrapper>
  );
};

export default TodoWrapper;
