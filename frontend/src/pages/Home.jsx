import React from 'react'
import styled from 'styled-components/macro'
import Hero from '../components/Hero';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Home = () => {
    return (
        <Container>
            <Hero />
        </Container>
    );
}

export default Home;