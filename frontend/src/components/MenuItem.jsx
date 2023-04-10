import React from 'react';
import styled from 'styled-components/macro';
import Pizza from '../assets/cheese-pizza.jpeg'; 

const Container = styled.div`
    width: 60%;
    background-color: #fff;
`

const Wrapper = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
`

const TopSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const FoodImg = styled.img`
    width: 100%;
`

const FoodName = styled.span`
    font-size: 1.6rem;
`

const Price = styled.span`
    font-size: 1.6rem;
`

const BottomSection = styled.div`
    display: flex;
    justify-content: center;
`

const AddBtn = styled.button`

`

const MenuItem = ({name, price}) => {
    return (
        <Container>
            <Wrapper>
                <TopSection>
                    <FoodImg src={Pizza} />
                </TopSection>

                <BottomSection>
                    {/* <FoodName> {name} </FoodName> */}
                    <FoodName> Cheese Pizza </FoodName>
                    {/* <Price> {price} </Price> */}
                    <Price> $15.00 </Price>
                    <AddBtn> Add To Order </AddBtn>
                </BottomSection>
            </Wrapper>
        </Container>
    );
}

export default MenuItem;