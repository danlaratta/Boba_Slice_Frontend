import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
    background-color: #000;
    width: 100%;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0rem;
`

const Text = styled.span`
    color: #fff;
    font-size: 1.6rem;
`


const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Text> © 2023 by DAJ2 </Text>
        </Wrapper>
    </Container>
  );
}

export default Footer;