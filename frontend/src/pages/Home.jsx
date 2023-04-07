import React from 'react';
import styled from 'styled-components/macro';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ParallaxSection from '../components/ParallaxSection';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <Hero />
                <Features />
                <ParallaxSection />
            </Wrapper>
        </Container>
    );
}

export default Home;