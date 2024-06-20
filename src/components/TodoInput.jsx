import { InputForm } from "./TodoStyle";

const TodoInput = ({ onAdd, text, setText }) => {
  
  const changeInut = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text);
    setText("");
  };
  return (
    <InputForm onSubmit={onSubmit}>
      <input type="text" name="text" value={text} onChange={changeInut} />
      <button>추가</button>
    </InputForm>
  );
};

export default TodoInput;
