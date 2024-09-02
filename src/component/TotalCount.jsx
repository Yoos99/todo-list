import '../css/TotalCount.css';

export default function TotalCount({ list }) {
  return (
    <div className="count mw">
      <strong>count</strong>
      <span>{list.length}</span>
    </div>
  );
}
