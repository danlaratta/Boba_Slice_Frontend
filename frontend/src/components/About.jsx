import React from 'react';
import styled from 'styled-components/macro';
import AboutImage from '../assets/About.jpg';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 75%;
    display: flex;
    align-items: center;
    gap: 3rem;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-content: center;
`

const TextContainer = styled.div`
    width: 80%;
`

const Title = styled.span`
    font-size: 5rem;
    font-weight: bold;
`

const Text = styled.p`
    font-size: 2.5rem;
    font-weight: 500;
`

const Right = styled.div`
    flex: 1;
    display: flex;
`

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const AboutImg = styled.img`
    width: 70%;
    border-radius: 2rem;
`

const About = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <TextContainer>
                        <Title> Boba Slice </Title>
                        <Text> 
                            Established in 2023, Boba Slice  is a truly unique food service unlike any other. Our menu caters to pizza and boba 
                            tea lovers with plenty of pies and flavors to choose from.  Place an order now and try our delicious menu items to see for yourself!
                        </Text>
                    </TextContainer>
                </Left>

                <Right>
                    <ImageContainer>
                        <AboutImg src={AboutImage} />
                    </ImageContainer>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default About;