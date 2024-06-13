import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 35%;

  height: 100%;
  border-right: 2px solid #f3f3f3;

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

const TodoList = () => {
  return <Wrapper></Wrapper>;
};

export default TodoList;
