import '../css/InputField.css';
import { useState } from 'react';

export default function InputField({ setList }) {
  const [inputText, setInputText] = useState('');
  const inputItem = (e) => {
    setInputText(e.target.value);
  };
  const addItem = () => {
    //공백제거, 글자수 0이면 추가 x , 경고 메시지
    if (inputText.trim().length < 2) {
      alert(
        inputText.trim === ''
          ? '내용을 입력해주세요.'
          : '2글자 이상 입력해주세요.'
      );
      document.querySelector('tripInput').focus();
      return;
    }
    setList((prev) => {
      const newList = [inputText, ...prev];
      localStorage.setItem('tripLists', JSON.stringify(newList));
      return newList;
    });

    setInputText('');
    document.querySelector('.tripInput').focus();
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div className="IninputField mw">
      <input
        className="tripInput"
        value={inputText}
        type="text"
        placeholder="여행지를 입력해주세요."
        onChange={inputItem}
        onKeyUp={handleKeyUp}
      />
      <button onClick={addItem}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
