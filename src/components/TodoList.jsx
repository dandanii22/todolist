import TodoItem from "./TodoItem";
import { TodoUl } from "./TodoStyle";

const TodoList = ({ onDel, data, onMod }) => {
  return (
    <TodoUl>
      {data.map((item) => (
        <TodoItem key={item.id} onDel={onDel} item={item} onMod={onMod} />
      ))}
    </TodoUl>
  );
};

export default TodoList;
