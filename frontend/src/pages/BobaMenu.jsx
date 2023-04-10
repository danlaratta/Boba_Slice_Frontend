import React from 'react';
import styled from 'styled-components/macro';
import MenuItemApi from '../apis/MenuItemApi';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const BobaMenu = () => {

    // initial state is empty
    const[drinksList, setDrinkList] = useState([]);

    // UseEffect -> mount the drinks items
    useEffect(() => {
        console.log("Drinks Mounted!");
        MenuItemApi.getDrinks(setDrinkList);
    }, []);


    return (
        <Container>
            {drinksList.map(p => <h1 key={p.id}>{p.name}</h1>)}
        </Container>
    );
}

export default BobaMenu;