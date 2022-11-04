import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button, Form, Stack } from "react-bootstrap";
import { LoginFormTitle, StyledLoginForm } from "./style";

interface Props {
   onSubmit: (email: string, password: string) => void
}

const LoginForm: FC<Props> = ({ onSubmit }) => {
   const { pathname } = useLocation();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const isLoginPage = pathname === '/login';
   const titleText = isLoginPage ? 'Authorization' : 'Registration';
   const btnText = isLoginPage ? 'Sign in' : 'Sign up';
   const paragraphText = isLoginPage ? 'Still don\'t have an acount?' : 'Already have an account?';
   const linkText = isLoginPage ? 'Sign up!' : 'Sign in!';
   const linkPath = isLoginPage ? '/registration' : '/login';

   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
   }

   const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
   }

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(email, password);
   }

   return (
      <StyledLoginForm>
         <Form onSubmit={handleSubmit}>
            <LoginFormTitle>{titleText}</LoginFormTitle>
            <Form.Control
               type="email"
               value={email}
               onChange={handleEmailChange}
               placeholder="Enter your email..."
               className="mb-4" />
            <Form.Control
               type="password"
               value={password}
               onChange={handlePasswordChange}
               placeholder="Enter your password..."
               className="mb-4" />
            <Stack className="d-flex flex-row justify-content-between align-items-center">
               <p className="mb-0">{paragraphText} <NavLink to={linkPath}>{linkText}</NavLink></p>
               <Button type="submit">{btnText}</Button>
            </Stack>
         </Form>
      </StyledLoginForm>
   );
}

export default LoginForm;