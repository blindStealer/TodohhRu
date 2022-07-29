import React, { FC } from "react";
import { ITodo, TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: ITodo[];
}

export const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            text={todo.text}
            id={todo.id}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
};
