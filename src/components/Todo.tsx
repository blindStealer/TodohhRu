import React, { FC, useState } from "react";
import styled from "styled-components";
import { FooterMenu } from "./FooterMenu";
import { TodoList } from "./TodoList";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { addTodo } from "../store/reducers/todosReducer";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
} from "../store/reducers/todosReducer";

const Container = styled.div`
  min-width: 400px;
  > div:first-child {
    text-align: center;
    font-size: 100px;
    margin-bottom: 50px;
  }
`;

const MyTodo = styled.div`
  padding: 10px;
  background-color: white;
  box-shadow: 5px 10px 45px 20px rgba(242, 242, 242, 1);
  border-radius: 10px;
  color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  > input {
    width: 300px;
    font-size: 13px;
    padding: 6px 0 4px 10px;
    border: 1px solid #cecece;
    background: #f6f6f6;
    border-radius: 8px;
    text-align: center;
    color: #212529;
    font-size: 15px;
  }
`;

export const Todo: FC = () => {
  const dispatch = useAppDispatch();
  const { todos, currentTodos } = useTypedSelector((state) => state.todos);
  const [text, setText] = useState<string>("");

  const allActiveTodos = todos.filter((todo) => todo.completed === false);

  const showAllCallback = () => {
    dispatch(showAllTodos());
  };

  const showActiveCallback = () => {
    dispatch(showActiveTodos());
  };

  const showCompletedCallback = () => {
    dispatch(showCompletedTodos());
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && text.trim() && text !== "") {
      let newText = "";

      if (text.length > 30) {
        newText = text.slice(0, 30);
        newText = `${newText}...`;
        dispatch(addTodo(newText));
      } else {
        dispatch(addTodo(text));
      }

      setText("");
    }
  };

  return (
    <Container>
      <div>Todos</div>
      <MyTodo>
        <input
          onKeyDown={onKeyDownHandler}
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Whats need to be done?"
          autoFocus
        />
        <TodoList todos={currentTodos} />
        <FooterMenu
          allActiveTodos={allActiveTodos.length}
          totalTodos={todos.length}
          showAll={showAllCallback}
          showActive={showActiveCallback}
          showCompleted={showCompletedCallback}
        />
      </MyTodo>
    </Container>
  );
};
