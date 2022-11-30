import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { auth_selectUser } from '../../store/reducers/auth/selectors';
import { logout } from "../../store/reducers/auth/thunk-creators";
import {
   AuthUser,
   AuthUserName,
   HeaderBody,
   StyledHeader
} from "./style";

const Header = () => {
   const [disableBtn, setDisableBtn] = useState(false);

   const user = useAppSelector(auth_selectUser);
   const userName = user?.email || 'Username';

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
                  <AuthUserName>{userName}</AuthUserName>
               </AuthUser>
               <Button disabled={disableBtn} onClick={handleLogout}>Sign out</Button>
            </HeaderBody>
         </Container>
      </StyledHeader>
   );
}

export default Header;