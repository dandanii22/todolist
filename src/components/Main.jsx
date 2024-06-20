import { useRef, useState } from "react";
import { MainWrap } from "./TodoStyle";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Main = () => {
  //초기값
  const [text, setText] = useState("");
  // 데이터 넣을 배열
  const [data, setData] = useState([]);

  const no = useRef(1);

  const onAdd = (text) => {
    setData([
      ...data,
      {
        id: no.current++,
        text: text,
        isChk: false,
      },
    ]);
  };

  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const onMod = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, isChk: !item.isChk } : item
      )
    );
  };
  return (
    <MainWrap>
      <h2>Todo List</h2>
      <TodoInput onAdd={onAdd} text={text} setText={setText} />
      <TodoList onDel={onDel} data={data} onMod={onMod} />
    </MainWrap>
  );
};

export default Main;
