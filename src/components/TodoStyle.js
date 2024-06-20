import styled from "styled-components";

export const MainWrap = styled.div`
  margin: 50px;
`;
export const TodoUl = styled.ul`
  border: 1px solid #999;

  width: 350px;

  li {
    display: flex;
    align-items: center;
    list-style: none;
    margin-bottom: 10px;

    span {
      cursor: pointer;
      user-select: none;
    }

    &.on span {
      color: red;
    }
    &.on p {
      color: red;
      text-decoration: line-through;
    }
    button {
      margin-left: 20px;
      background: #000;
      color: #fff;
      border: none;
      height: 30px;
    }
  }
`;
export const InputForm = styled.form`
  display: flex;

  margin-bottom: 40px;
  input[type="text"] {
    width: 300px;
    height: 25px;
    margin-right: 10px;
  }
  button {
    background: #000;
    color: #fff;
    border: none;
    width: 50px;
    height: 30px;
  }
`;
