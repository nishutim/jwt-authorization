import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { Page, PageBody } from "../components/styled";

const LoginPage = () => {

   const onSubmit = (email: string, password: string) => {
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