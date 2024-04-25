import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Create from './pages/Create';
const GlobalStyle = createGlobalStyle`
${reset}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-color : #EDEDED;
}
`;

const dummyList = [
  {
    title: 'Todo 1',
    content: 'Todo 1',
    id: '1',
    createdAt: '2024-04-24',
    updatedAt: '2024-04-24',
  },
  {
    title: 'Todo 2',
    content: 'Todo 2',
    id: '2',
    createdAt: '2024-04-24',
    updatedAt: '2024-04-24',
  },
  {
    title: 'Todo 3',
    content: 'Todo 3',
    id: '3',
    createdAt: '2024-04-24',
    updatedAt: '2024-04-24',
  },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
