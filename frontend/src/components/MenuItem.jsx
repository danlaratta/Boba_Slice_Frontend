import React from 'react';
import styled from 'styled-components/macro';

const AddBtn = styled.button`
    width: 40%;
    opacity: 0;
    padding: 1rem 0.5rem;
    &:hover {
        cursor: pointer;
        background-color: var(--primary);
        color: #fff;
    }
`

const Container = styled.div`
    width: 80%;
    height: 30rem;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem 0.05rem #565656;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover ${AddBtn} {
        opacity: 1;
  }
`

const Wrapper = styled.div`
    padding: 4rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

const FoodName = styled.span`
    font-size: 2.8rem;
    font-weight: 600;
    color: var(--primary);
`

const Description = styled.span`
    font-size: 1.8rem;
    width: 85%;
`

const Price = styled.span`
    font-size: 1.8rem;
`

const MenuItem = ({name, desc, price}) => {
    return (
        <Container>
            <Wrapper>
                <TextContainer>
                    <FoodName> {name} </FoodName>
                    <Description> {desc} </Description>
                    
                    <Price> ${price} </Price>
                    <AddBtn> Add To Order </AddBtn>
                </TextContainer>
            </Wrapper>
        </Container>
    );
}

export default MenuItem;