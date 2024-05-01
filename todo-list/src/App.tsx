import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Create from './pages/Create';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { useReducer, useRef, createContext } from 'react';

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

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];

    case 'EDIT':
      return state.map((it: { id: number }) =>
        it.id === action.data.id ? action.data : it
      );
    case 'DELETE':
      return state.filter((it: { id: number }) => it.id !== action.id);
  }
}

// 해결하지 못해서 지피티 사용. type 지정을 왜 이렇게 해야하는지 이해하지 못했음.
interface TodosDispatchContextType {
  onCreate: (title: string, content: string, createdAt: number) => void;
  onEdit: (
    title: string,
    content: string,
    id: number,
    createdAt: number
  ) => void;
  onDelete: (id: number) => void;
}

export const TodosDispatchContext = createContext<TodosDispatchContextType>({
  onCreate: (id) => {},
  onEdit: (id) => {},
  onDelete: (id) => {},
});

export const TodosContext = createContext(dummyList);

function App() {
  const [data, dispatch] = useReducer(reducer, dummyList);
  const idRef = useRef(4);

  // 새 일기 추가
  const onCreate = (title: string, content: string, createdAt: number) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdAt,
        content,
        title,
      },
    });
  };
  // 기존 일기 수정
  const onEdit = (
    title: string,
    content: string,
    id: number,
    createdAt: number
  ) => {
    dispatch({
      type: 'EDIT',
      data: {
        content,
        title,
        id,
        createdAt,
      },
    });
  };
  // 기존 일기 삭제
  const onDelete = (id: number) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  return (
    <>
      <GlobalStyle />

      <TodosContext.Provider value={data}>
        <TodosDispatchContext.Provider value={{ onCreate, onEdit, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/create" element={<Create />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TodosDispatchContext.Provider>
      </TodosContext.Provider>
    </>
  );
}

export default App;
