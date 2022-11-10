import React from "react";
import { Container } from "react-bootstrap";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/reducers/auth/thunk-creators";
import {
   AuthUser,
   AuthUserName,
   HeaderBody,
   LogoutButton,
   StyledHeader
} from "./style";

const Header = () => {
   const dispatch = useAppDispatch();

   const handleLogout = () => {
      dispatch(logout());
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