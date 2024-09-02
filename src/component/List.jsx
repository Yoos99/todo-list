import '../css/list.css';

export default function List({ list, setList, index }) {
  const removeItem = () => {
    setList((prev) => prev.filter((_, item) => item !== index));
  };
  return (
    <li className="list">
      <p>{list}</p>
      <i className="fa-regular fa-trash-can" onClick={removeItem}></i>
    </li>
  );
}
