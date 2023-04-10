import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro'

import MenuItemApi from '../apis/MenuItemApi';
import MenuItem from '../components/MenuItem';



const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f3f3f3;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5rem;
`

const Title = styled.span`
    font-size: 3.5rem;
    font-weight: 600;
    text-align: center;
    margin-top: 10rem;
`

const MenuContainer = styled.div`
    width: 100%;
    margin-top: 10rem;
`

const ItemRow = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    grid-row-gap: 5rem;
`

const PizzaMenu = () => {

    // Initial state is empty
    const[dishList, setDishList] = useState([]);

    // useEffect -> mount the dish items
    useEffect(() => {
        console.log("Dishes Mounted!");
        MenuItemAPI.getDishes(setDishList);
        
    }, []);


    return (
        <Container>
            <Wrapper>
                <Title> Pizza Menu </Title>

                <MenuContainer>
                    <ItemRow>
                        {dishList.map( dish => (
                            <MenuItem name={dish.name} price={dish.price} desc={dish.description} />
                        ))}
                        
                    </ItemRow>
                </MenuContainer>
            </Wrapper>
           
        </Container>
    );
}

export default PizzaMenu;