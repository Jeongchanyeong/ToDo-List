import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import TodoListItem from './TodoListItem';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  overflow-y: auto;
  max-height: 100%;

  scrollbar-width: thin;
  scrollbar-color: #dfdfdf transparent;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 3px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  margin-right: 50px;
`;

const DoneTodo = () => {
  return (
    <Wrapper>
      <ItemWrapper>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </ItemWrapper>
      <ButtonWrapper>
        <Button
          onClick={() => {}}
          bgColor="default"
          width="medium"
          height="medium"
        >
          Log Out
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
export default DoneTodo;
