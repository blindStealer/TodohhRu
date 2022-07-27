import React from 'react';
import styled from "styled-components";
import {Todo} from "./components/Todo";

const App = () => {



    const App = styled.div`
      display: flex;
      justify-content: center;
      width: 100%;
      min-height: 100vh;
      background-color: #edd5d5;
      font-family: 'Poppins', sans-serif;
    `

    return (
        <App>
            <Todo/>
        </App>
    );
};

export default App;