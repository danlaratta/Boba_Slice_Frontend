import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Feature1 from '../assets/feature1.jpg'
import Feature2 from '../assets/feature2.jpg'
import Feature3 from '../assets/feature3.jpg'
import Feature4 from '../assets/feature4.jpg'
import Feature5 from '../assets/feature5.jpg'
import Feature6 from '../assets/feature6.jpg'

const Container = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
`

const FeatureContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TextContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: baseline;
    gap: 1rem;
    padding: 1rem 0rem;
`

const Title = styled.span`
    font-size: 4rem;
    font-weight: 700;
`

const MenuLink = styled(Link)`
    font-size: 2rem;
    font-weight: 400;
    text-decoration: none;
    color: #000;

    &:hover {
        color: red;
    }
`

const ImagesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 4rem;
`

const FeatureImg = styled.img`
    width: 25%;
    border-radius: 2rem;
`

const Features = () => {
    return (
        <Container>
            <Wrapper>
                <FeatureContainer>
                    <TextContainer>
                        <Title> Featured Boba </Title>
                        <MenuLink> Boba Menu </MenuLink>
                    </TextContainer>

                    <ImagesContainer>
                        <FeatureImg src={Feature1} />
                        <FeatureImg src={Feature2} />
                        <FeatureImg src={Feature3} />
                    </ImagesContainer>
                </FeatureContainer>

                <FeatureContainer>
                    <TextContainer>
                        <Title> Featured Pizza </Title>
                        <MenuLink> Pizza Menu  </MenuLink>
                    </TextContainer>

                    <ImagesContainer>
                        <FeatureImg src={Feature4} />
                        <FeatureImg src={Feature5} />
                        <FeatureImg src={Feature6} />
                    </ImagesContainer>
                </FeatureContainer>
            </Wrapper>
        </Container>
    );
}

export default Features;