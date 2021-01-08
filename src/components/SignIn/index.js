import React from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormButton, Text} from './SignInElements';

const SignIn = () => {
    return (
        <>
              <Container>
            <FormWrap>
                <FormContent>
                    <Form action="#">
                 <FormH1>Sign In Form</FormH1>
                <Text>Email</Text>
                <FormInput type='email' requiered />
                <Text>Password</Text>
                <FormInput type='password' requiered />
                <FormButton type='submit'>Continue</FormButton>
                <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SignIn;
