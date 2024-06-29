import React, { useState } from 'react';
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

const dummyData = [
  {
    id: 0,
    title: '오늘 할 일 0',
    content: '오늘의 할 일은 0입니다.',
    date: new Date().getTime(),
  },
  {
    id: 1,
    title: '오늘 할 일 1',
    content: '오늘의 할 일은 1입니다.',
    date: new Date().getTime(),
  },
  {
    id: 2,
    title: '오늘 할 일 2',
    content: '오늘의 할 일은 2입니다.',
    date: new Date().getTime(),
  },
];

const TodoWrapper = () => {
  const [todos, setTodos] = useState(dummyData);
  return (
    <Wrapper>
      <DoneTodo />
      <TodoList />
    </Wrapper>
  );
};

export default TodoWrapper;
