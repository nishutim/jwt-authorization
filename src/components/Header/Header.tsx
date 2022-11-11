import React, { useState } from "react";
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
   const [disableBtn, setDisableBtn] = useState(false);

   const dispatch = useAppDispatch();

   const handleLogout = async () => {
      setDisableBtn(true);
      await dispatch(logout());
      setDisableBtn(false);
   }

   return (
      <StyledHeader>
         <Container>
            <HeaderBody>
               <AuthUser>
                  <AuthUserName>Username</AuthUserName>
               </AuthUser>
               <LogoutButton disabled={disableBtn} onClick={handleLogout}>Sign out</LogoutButton>
            </HeaderBody>
         </Container>
      </StyledHeader>
   );
}

export default Header;