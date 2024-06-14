import styled from 'styled-components';
import Header from '../common/Header';

import TodoList from '../components/TodoList';
import Viewer from '../components/Viewer';

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 80vw;
  height: 100vh;
`;

const TodoListWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const Home = () => {
  return (
    <Wrapper>
      <Header />

      <TodoListWrapper>
        <TodoList />
        <TodoList />
        <Viewer />
      </TodoListWrapper>
    </Wrapper>
  );
};

export default Home;
