import React from "react";
import { useLocation } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import { Page, PageBody } from "../components/styled";
import { useAppDispatch } from "../hooks/redux";
import { login, registration } from "../store/reducers/auth/thunk-creators";

const LoginPage = () => {
   const { pathname } = useLocation();
   const isLoginPage = pathname === '/login';

   const dispatch = useAppDispatch();

   const onSubmit = async (email: string, password: string, setStatus: (status: string) => void) => {
      const action = isLoginPage ? login : registration;
      await dispatch(action(email, password, setStatus));
   }

   return (
      <Page>
         <PageBody justify="center" alignItems="center">
            <LoginForm
               isLoginPage={isLoginPage}
               onSubmit={onSubmit} />
         </PageBody>
      </Page>
   );
}

export default LoginPage;