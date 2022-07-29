import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

interface ITodo {
  id: string | number;
  text: string;
  completed: boolean;
}

interface ITodoState {
  todos: ITodo[];
  activeTodos: ITodo[];
  completedTodos: ITodo[];
  currentTodos: ITodo[];
}

const initialState: ITodoState = {
  todos: [],
  activeTodos: [],
  completedTodos: [],
  currentTodos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        text: action.payload,
        id: uniqid(),
        completed: false,
      };
      state.todos.push(newTodo);
      state.activeTodos.push(newTodo);
      state.currentTodos = state.todos;
    },
    setCompletedTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo?.completed === false) {
        todo.completed = !todo.completed;
        state.activeTodos = state.activeTodos.filter(
          (item) => item.id !== todo.id
        );
        state.completedTodos.push(todo);
      } else {
        if (todo?.completed === true) {
          todo.completed = !todo.completed;
          state.completedTodos = state.completedTodos.filter(
            (item) => item.id !== todo.id
          );
          state.activeTodos.push(todo);
        }
      }
      const currentTodo = state.currentTodos.find(
        (todo) => todo.id === action.payload
      );
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },

    showAllTodos(state) {
      state.currentTodos = state.todos;
    },
    showActiveTodos(state) {
      state.currentTodos = state.activeTodos;
    },
    showCompletedTodos(state) {
      state.currentTodos = state.completedTodos;
    },
  },
});

export const {
  addTodo,
  setCompletedTodo,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
