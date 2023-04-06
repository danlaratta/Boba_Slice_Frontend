import React from 'react';
import styled from 'styled-components/macro';
import HeroBg from '../assets/Hero-bg.jpg';

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    background-image: url(${HeroBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Overlay = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`

const Hero = () => {
    return (
        <Container>
            <Overlay>

            </Overlay>
        </Container>
    );
}

export default Hero;