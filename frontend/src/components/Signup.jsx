import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 50%;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
`

const FormItem = styled.div`
    
`

const Label = styled.label`
    
`

const Input = styled.input`
    
`

const Signup = () => {
    return (
        <Container>
            <Wrapper>
                <Form>
                    <FormItem>
                        <Label for='uname'> Username </Label>
                        <Input type='text' />
                    </FormItem>

                    <FormItem>
                        <Label for='pwd'> Password </Label>
                        <Input type='password' />
                    </FormItem>

                    <FormItem>
                        <Label for='fname'> First Name </Label>
                        <Input type='text' />
                    </FormItem>

                    <FormItem>
                        <Label for='lname'> Last Name </Label>
                        <Input type='text' />
                    </FormItem>

                    <FormItem>
                        <Label for='email'> Email </Label>
                        <Input type='email' />
                    </FormItem>

                    <FormItem>
                        <Label for='phone'> Phone </Label>
                        <Input type='text' />
                    </FormItem>

                    <FormItem>
                        <Label for='payment'> Payment Card </Label>
                        <Input type='text' />
                    </FormItem>
                </Form>
            </Wrapper>
        </Container>
    );
}


export default Signup;
