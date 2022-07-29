import React, { FC } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setCompletedTodo } from "../store/reducers/todosReducer";

export interface ITodo {
  text: string;
  id: number | string;
  completed: boolean;
}

interface TodoItemProps {
  text: string;
  id: string | number;
  completed: boolean;
}

const Container = styled.div`
  min-width: 400px;
  padding: 10px;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid lightblue;
  cursor: pointer;
  > div {
    font-family: Bahnschrift;
  }
`;

const LineThrough = styled.div`
  text-decoration: line-through;
  color: grey;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ImageCheckBox = styled.img`
  width: 17px;
  height: 17px;
`;

const checkBox = {
  checked:
    "https://toppng.com/uploads/preview/checked-checkbox-icon-checkbox-ico-115632629493xkxpf63d8.png",
  unChecked: "https://c.neh.tw/thumb/f/720/m2i8A0H7m2Z5H7i8.jpg",
};

export const TodoItem: FC<TodoItemProps> = ({ text, id, completed }) => {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <Wrapper>
        <ImageCheckBox
          onClick={() => dispatch(setCompletedTodo(id))}
          src={completed ? checkBox.checked : checkBox.unChecked}
        />
        {completed ? <LineThrough>{text}</LineThrough> : <div>{text}</div>}
      </Wrapper>
    </Container>
  );
};
