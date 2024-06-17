import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import TodoListItem from './TodoListItem';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  flex: 1;
  border-right: 2px solid #f3f3f3;
`;

const Title = styled.div`
  font-size: 22px;
  flex: 1;
  color: rgb(74, 113, 107);
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
  flex: 12;
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  flex: 1;
  margin-right: 50px;
`;

const DoneTodo = () => {
  return (
    <Wrapper>
      <Title>Done</Title>
      <ItemWrapper>
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
