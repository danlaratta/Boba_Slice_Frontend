import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import ParallaxBg from '../assets/ParallaxBg.jpg';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 6.3rem);
`

const Overlay = styled.div`
    min-height: calc(100vh - 6.3rem);
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
`

const Title = styled.span`
    font-size: 5rem;
    font-weight: bold;
    color: #fff;
`


const Tagline = styled.span`
    font-size: 2.5rem;
    font-weight: 500;
    color: #fff;
    width: 60%;
`

const LinksContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-start;
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
    padding: 1rem 1rem;
    text-decoration: none;
    color: #fff;
    font-size: 1.8rem;
    font-weight: 500;

    &:hover {
        background-color: #000;
    }
`

const ParallaxSection = () => {
    return (
        <Container>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={ParallaxBg}
                bgImageAlt="background image"
                strength={-200}
                style={{height: 'calc(100vh - 6.3rem)'}}
            >
                <Overlay>
                    <TextContainer>
                        <Title> Great Service, Great Taste </Title>
                        <Tagline> Made with High Quality and Fresh Ingredients you can Taste in Every Bite </Tagline>

                        <LinksContainer> 
                            <MenuLink to='/boba'> Boba Menu </MenuLink>
                            <MenuLink to='/pizza'> Pizza Menu </MenuLink>
                        </LinksContainer>
                    </TextContainer>
                </Overlay>

            </Parallax>
        </Container>
    );
}

export default ParallaxSection;