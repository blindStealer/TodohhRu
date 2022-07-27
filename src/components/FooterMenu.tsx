import React, {FC} from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  color: mediumpurple ;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  width: 100%;
  gap: 10px;
  margin-top: 20px;
  
  >div:first-child {
    margin-right: 90px;
  }
`

const FilterMenu = styled.div`
display: flex;
  gap: 15px;
`

interface FooterMenuProps {
    items: number
    // filterCompleted: (id: any, checked: boolean) => void
}


export const FooterMenu: FC<FooterMenuProps> = (props) => {
    return (
        <Container>
            <div>
                <div>{props.items} items left</div>
            </div>

            <FilterMenu>
                <div>all</div>
                <div>active</div>
                <div >completed</div>
            </FilterMenu>

        </Container>
    );
};

