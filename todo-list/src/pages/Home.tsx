import styled from 'styled-components';
import Header from '../common/Header';
import Button from '../common/Button';
import TodoList from '../components/TodoList';
import Viewer from '../components/Viewer';
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
const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header
        buttonVariety={
          <Button
            buttonType={'create'}
            onClick={() => {
              navigate('/create');
            }}
          >
            {'create'}
          </Button>
        }
      >
        {'ToDo-List'}
      </Header>
      <TodoListWrapper>
        <TodoList />
        <TodoList />
        <Viewer />
      </TodoListWrapper>
    </Wrapper>
  );
};

export default Home;
