import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro'
import MenuItemApi from '../apis/MenuItemApi';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const PizzaMenu = () => {

    // Initial state is empty
    const[dishList, setDishList] = useState([]);

    // useEffect -> mount the dish items
    useEffect(() => {
        console.log("Dishes Mounted!");
        MenuItemApi.getDishes(setDishList);
        
    }, []);


    return (
        <Container>
           {dishList.map(p => <h1 key={p.id}>{p.name}</h1>)}
        </Container>
    );
}

export default PizzaMenu;