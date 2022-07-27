import React, {FC, useCallback, useMemo, useState} from 'react';
import styled from "styled-components";

export interface ITodo {
    text: string,
    id: number | string

}

interface TodoItemProps {
    text: string,
    id: string | number
    removeTodo: (id: string | number ) => void

}


const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid lightblue;
  width: 100%;

  > div {
    font-family: Bahnschrift;
  }
`

const Input = styled.input`
  width: 11px;
  height: 11px;
  border: 1px solid #808080;
  background: #FFF;
`

const LineThrough = styled.div`
  text-decoration: line-through;
  color: grey;
`

const RemoveIcon = styled.div`
  width: 1em;
  height: 1em;
  background-color: #878080;
  clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
`

const Wrapper = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const TodoItem: FC<TodoItemProps> = ({text, id, removeTodo}) => {

    const [checked, setChecked] = useState<boolean>(false)

        const setCheckedHandler = () => {
            setChecked(!checked)

        }

    return (
        <Container>
            <Wrapper>

                <Input type="checkbox" checked={checked} onClick={setCheckedHandler}/>
                {
                    checked
                        ? <LineThrough>{text} ||||{id}</LineThrough>
                        : <div>{text}||||{id}</div>
                }
            </Wrapper>

            <div>
                  <RemoveIcon onClick={() => removeTodo(id)}/>
            </div>



        </Container>
    );
};

