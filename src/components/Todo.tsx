import React, {useState} from 'react';
import styled from "styled-components";
import {FooterMenu} from "./FooterMenu";
import {ITodo, TodoItem} from "./TodoItem";
import uniqid from 'uniqid';


export const Todo: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])



    const [text, setText] = useState<string>('')


    const changeTextHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }


    const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {

            let newTodo = {
                text,
                id: uniqid()
            }


        if(e.key === 'Enter' && newTodo.text !== '' && newTodo.text.trim()) {
            setTodos([
                ...todos,
                newTodo
            ])
            setText('')

        }

    }

    const removeTodo = (id: string | number ) => {
        setTodos([...todos].filter((todo) => {
            return todo.id !== id
        }))
    }



    const Container = styled.div`
      margin-top: 200px;

      > div:first-child {
        text-align: center;
        font-size: 100px;
        margin-bottom: 50px;;
      }
    `
    const Todo = styled.div`
      padding: 10px;
      min-width: 350px;
      background-color: white;
      box-shadow: 5px 10px 45px 20px rgba(242,242,242,1);
      border-radius: 10%;
      color: black;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      
      >input:first-child {
        text-align: center;
        padding: 5px;
        border-radius: 5px;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #bdbdbd;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
      
    `


    return (
        <Container>
            <div>Todos</div>
            <Todo>
                    <input onKeyDown={addTodo} value={text} onChange={changeTextHandler} type="text" placeholder='Whats need to be done?' autoFocus  />

                {
                    todos.map((todo) => {
                        return <TodoItem text={todo.text}  id={todo.id} removeTodo={removeTodo}  />
                    })
                }
                <FooterMenu items={todos.length} />

            </Todo>
        </Container>
    );
};

