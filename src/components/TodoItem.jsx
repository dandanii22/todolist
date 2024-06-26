const TodoItem = ({ item, onDel, onMod }) => {
  const { id, text, isChk } = item;
  return (
    <li className={isChk ? "on" : ""}>
      <span onClick={() => onMod(id)}>✔️</span>
      <p> {text}</p>
      <button onClick={() => onDel(id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
