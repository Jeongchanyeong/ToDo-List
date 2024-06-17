import Router from './Router';

const dummyList = [
  {
    title: 'Todo 1',
    content: 'Todo 1',
    id: 1,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    title: 'Todo 2',
    content: 'Todo 2',
    id: 2,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    title: 'Todo 3',
    content: 'Todo 3',
    id: 3,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
];

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
