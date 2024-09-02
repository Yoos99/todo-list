import './App.css';
import { useState } from 'react';

import Header from './component/Header';
import InputField from './component/InputField';
import PostList from './component/PostList';
import NoList from './component/NoList';
import TotalCount from './component/TotalCount';

function App() {
  // const data = [
  // 	"송도센터럴파크",
  // 	"파주 프로방스 / 헤이리 마을",
  // 	"춘천 소양강 스카이워크",
  // 	"포천 가평 레일바이크",
  // 	"용인 에버랜드",
  // ];
  const data = JSON.parse(localStorage.getItem('tripLists')) || [];
  let [lists, setList] = useState(data);
  return (
    <>
      <Header />
      <InputField setList={setList} />
      <TotalCount list={lists} />
      {lists.length > 0 ? (
        <PostList lists={lists} setList={setList} />
      ) : (
        <NoList />
      )}
    </>
  );
}

export default App;
