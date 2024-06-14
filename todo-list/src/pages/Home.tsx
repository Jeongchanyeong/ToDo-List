import styled from 'styled-components';
import Header from '../common/Header';
import Viewer from '../components/Viewer';

import TodoWrapper from '../components/TodoWrapper';

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 80vw;
  height: 100vh;
`;

const TodoListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const Home = () => {
  return (
    <Wrapper>
      <Header title="To Do List "></Header>
      <TodoListWrapper>
        <TodoWrapper />
        <Viewer />
      </TodoListWrapper>
    </Wrapper>
  );
};

export default Home;
