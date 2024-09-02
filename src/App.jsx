import './App.css';
import { useState } from 'react';

import Header from './component/Header';
import InputField from './component/InputField';
import PostList from './component/PostList';
import NoList from './component/NoList';
import TotalCount from './component/TotalCount';

function App() {
  const data = ['부산', '경주', '울산'];
  let [lists, setList] = useState(data);
  return (
    <>
      <Header />
      <InputField setList={setList} />
      <TotalCount list={lists} />
      {lists.length > 0 ? <PostList lists={lists} /> : <NoList />}
    </>
  );
}

export default App;
