import React from "react";
import { Container } from "react-bootstrap";
import {
   AuthUser,
   AuthUserName,
   HeaderBody,
   LogoutButton,
   StyledHeader
} from "./style";

const Header = () => {

   const handleLogout = () => {
      console.log('logged out');
   }

   return (
      <StyledHeader>
         <Container>
            <HeaderBody>
               <AuthUser>
                  <AuthUserName>Username</AuthUserName>
               </AuthUser>
               <LogoutButton onClick={handleLogout}>Sign out</LogoutButton>
            </HeaderBody>
         </Container>
      </StyledHeader>
   );
}

export default Header;