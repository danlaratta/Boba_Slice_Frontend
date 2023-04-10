import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 6.5rem;
    background-color: #fff;
    box-shadow: 0rem 0.2rem 0.8rem #565656;
    position: sticky;
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
    color: #000;
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

const SignIn = styled(Link)`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid #000;
    border-radius: 0.75rem;
    text-decoration: none;
    color: #000;
    font-size: 1.6rem;
    font-weight:  600;
    padding: 1rem 0rem;

    &:hover{
        background-color: var(--primary);
        cursor: pointer;
        color: #fff;
    }
`

const SignUp = styled(Link)`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    text-decoration: none;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    background-color: #000;
    padding: 1rem 0rem;
    border: 0.2rem solid #000;

    &:hover{
        background-color: var(--primary);
        cursor: pointer;
        color: #fff;
    }
`

const Navbar = () => {
    const [color, setColor] = useState(0);
    const [isSignedIn, setIsSignedIn] = useState(false)

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
                        <SignIn to='/signin' color={color}> Sign In </SignIn>
                        <SignUp to='/signup' color={color}> Sign Up </SignUp>  
                    </Account>

                    
                </RightSection>
            </Wrapper>
        </Container>
    );
}

export default Navbar;