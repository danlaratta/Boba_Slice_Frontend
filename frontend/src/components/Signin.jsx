import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 5.8rem);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f3f3;
`

const Wrapper = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #fff;
    border-radius: 1.5rem;
    padding: 5rem;
    box-shadow: 0 0 0.5rem 0.05rem #565656;
`

const Title = styled.span`
    font-size: 2.4rem;
    font-weight: 600;
    text-align: center;
    padding-bottom: 1rem;
`

const FormItem = styled.div`
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    font-size: 1.6rem;
    padding-bottom: 0.5rem;
`

const Input = styled.input`
    padding: 1rem 1rem;
`

const Submit = styled.button`
    padding: 1rem 1rem;
    margin-top: 1rem;
    font-size: 1.6rem;
    font-weight: 600;

    &:hover {
        background-color: var(--primary);
        cursor: pointer;
        color: #fff;
    }
`

const Signin = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Container>
            <Wrapper>
                <Form onSubmit={handleSubmit}>
                    <Title> Sign In </Title>
                    <FormItem>
                        <Label htmlFor='uname'> Username </Label>
                        <Input type='text' />
                    </FormItem>

                    <FormItem>
                        <Label htmlFor='pwd'> Password </Label>
                        <Input type='password' />
                    </FormItem>

                    <Submit> Submit </Submit>
                </Form>
            </Wrapper>
        </Container>
    );
}


export default Signin;
