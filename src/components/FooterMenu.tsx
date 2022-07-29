import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  color: #4676d7;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  width: 100%;
  gap: 10px;
  margin-top: 20px;

  > div:first-child {
    margin-right: 90px;
  }
`;

const FilterMenu = styled.div`
  display: flex;
  gap: 15px;

  > button {
    font-family: inherit;
    appearance: none;
    border: 0;
    border-radius: 5px;
    background: #4676d7;
    color: #fff;
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
  }
`;

interface FooterMenuProps {
  totalTodos: number;
  allActiveTodos: number;
  showAll: () => void;
  showActive: () => void;
  showCompleted: () => void;
}

export const FooterMenu: FC<FooterMenuProps> = ({
  allActiveTodos,
  totalTodos,
  showAll,
  showActive,
  showCompleted,
}) => {
  return (
    <Container>
      <div>
        <div>all: {totalTodos}</div>
        <div>active: {allActiveTodos}</div>
      </div>

      <FilterMenu>
        <button onClick={showAll}>all</button>
        <button onClick={showActive}>active</button>
        <button onClick={showCompleted}>completed</button>
      </FilterMenu>
    </Container>
  );
};
