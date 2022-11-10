import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { Page, PageBody } from "../components/styled";
import { useAppDispatch } from "../hooks/redux";
import { login } from "../store/reducers/auth/thunk-creators";

const LoginPage = () => {
   const dispatch = useAppDispatch();

   const onSubmit = (email: string, password: string) => {
      dispatch(login(email, password));
      console.log(email, password);
   }

   return (
      <Page>
         <PageBody justify="center" alignItems="center">
            <LoginForm
               onSubmit={onSubmit} />
         </PageBody>
      </Page>
   );
}

export default LoginPage;