import styled from 'styled-components';
import TodoListItem from './TodoListItem';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  flex: 1;
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
  flex: 12;
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
  flex: 1;
  margin-right: 50px;
`;

const TodoList = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title>Do</Title>

      <ItemWrapper>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />

        <TodoListItem />
      </ItemWrapper>
      <ButtonWrapper>
        <Button
          onClick={() => {
            navigate('/create');
          }}
          bgColor="darkGreen"
          width="medium"
          height="medium"
        >
          Create
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TodoList;
