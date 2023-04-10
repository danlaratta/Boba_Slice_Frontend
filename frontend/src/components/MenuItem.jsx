import React from 'react';
import styled from 'styled-components/macro';
import Pizza from '../assets/cheese-pizza.jpeg'; 

const AddBtn = styled.button`
    opacity: 0;
    padding: 1rem;
    &:hover {
        cursor: pointer;
        background-color: var(--primary);
        color: #fff;
    }
`

const Container = styled.div`
    width: 80%;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem 0.05rem #565656;
    
    &:hover ${AddBtn} {
        opacity: 1;
  }
`

const Wrapper = styled.div`
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

const TopSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const FoodName = styled.span`
    font-size: 1.8rem;
`

const Price = styled.span`
    font-size: 1.8rem;
`

const BottomSection = styled.div`
    display: flex;
    justify-content: center;
`

const MenuItem = ({name, price}) => {
    return (
        <Container>
            <Wrapper>
                <TopSection>
                    {/* <FoodName> {name} </FoodName> */}
                    <FoodName> Cheese Pizza </FoodName>
                    {/* <Price> {price} </Price> */}
                    <Price> $15.00 </Price>
                </TopSection>

                <BottomSection>
                    <AddBtn> Add To Order </AddBtn>
                </BottomSection>
            </Wrapper>
        </Container>
    );
}

export default MenuItem;