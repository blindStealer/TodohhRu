import React from "react";
import styled from "styled-components";
import { Todo } from "./components/Todo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #e9e4e4;
  font-family: "Poppins", sans-serif;
`;

const App = () => {
  return (
    <Container>
      <Todo />
    </Container>
  );
};

export default App;
