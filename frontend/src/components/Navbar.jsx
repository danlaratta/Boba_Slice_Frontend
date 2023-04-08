import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 6.5rem;
    background-color: ${props => props.color === 1 ? "#000" : "rbga(0, 0, 0, 0)"};
    box-shadow: ${props => props.color === 1 ? "0rem 0.2rem 0.8rem #565656" : "none"};
    position: fixed;
    z-index: 10;
`

const Wrapper = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
`

const LeftSection = styled.div`
    flex: 1;
`

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 2.6rem;
    color:#fff;
    font-weight: bold;

    &:hover {
        color: var(--primary);
    }
`

const RightSection = styled.div`
    flex: 1;
    display: flex;
`

const Account = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    margin-right: 5rem;
`

const SignUp = styled(Link)`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid #fff;
    border-radius: 0.75rem;
    text-decoration: none;
    color: #fff;
    font-size: 1.6rem;
    font-weight:  600;
    padding: 1rem 0rem;

    &:hover{
        background-color: var(--primary);
        cursor: pointer;
    }
`

const SignIn = styled(Link)`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid #fff;
    border-radius: 0.75rem;
    text-decoration: none;
    color: #000;
    font-size: 1.6rem;
    font-weight: 600;
    background-color: #fff;
    padding: 1rem 0rem;

    &:hover{
        background-color: var(--primary);
        cursor: pointer;
        color: #fff;
    }
`

const Navbar = () => {
    const [color, setColor] = useState(0);

    const changecolor = () => {
        window.scrollY >= 100 ? setColor(1) : setColor(0);
    }
    window.addEventListener('scroll', changecolor);

    return (
        <Container color={color}>
            <Wrapper>
                <LeftSection>
                    <Logo to='/' color={color}> Boba Slice </Logo>
                </LeftSection>

                <RightSection>
                    <Account>
                        <SignUp color={color}> Sign Up </SignUp> 
                        <SignIn color={color}> Sign In </SignIn> 
                    </Account>
                </RightSection>
            </Wrapper>
        </Container>
    );
}

export default Navbar;