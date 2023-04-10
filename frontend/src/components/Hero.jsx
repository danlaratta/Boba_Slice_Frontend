import React from 'react';
import styled from 'styled-components/macro';
import HeroBg from '../assets/Hero-bg.jpg';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: calc(100vh - 6.5rem);
    width: 100%;
    background-image: url(${HeroBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Wrapper = styled.div`
    position: relative;
`

const Overlay = styled.div`
    height: calc(100vh - 6.5rem);
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`

const Title = styled.span`
    font-size: 7rem;
    font-weight: bold;
    color: #fff;
`


const Tagline = styled.span`
    font-size: 3.5rem;
    font-weight: 500;
    color: #fff;
`

const LinksContainer = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
`

const MenuLink = styled(Link)`
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid #fff;
    border-radius: 0.5rem;
    padding: 0.75rem 0rem;
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
    font-weight: 500;

    &:hover {
        background-color: var(--primary);
    }
`

const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <Overlay>
                    <TextContainer>
                        <Title> Boba Slice </Title>
                        <Tagline> The Best Boba and Pizza Around </Tagline>

                        <LinksContainer> 
                            <MenuLink to='/boba'> Boba </MenuLink>
                            <MenuLink to='/pizza'> Pizza </MenuLink>
                        </LinksContainer>
                    </TextContainer>
                </Overlay>
            </Wrapper>
        </Container>
    );
}

export default Hero;