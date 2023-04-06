import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
`

const Wrapper = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
`

const LeftSection = styled.div`
    flex: 1;
`

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 2.6rem;
    color: #fff;
    font-weight: bold;
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
        background-color: #000;
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
        background-color: #000;
        cursor: pointer;
        color: #fff;
    }
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <LeftSection>
                    <Logo to='/'> Boba Slice </Logo>
                </LeftSection>

                <RightSection>
                    <Account>
                        <SignUp> Sign Up </SignUp> 
                        <SignIn> Sign In </SignIn> 
                    </Account>
                </RightSection>
            </Wrapper>
        </Container>
    );
}

export default Navbar;