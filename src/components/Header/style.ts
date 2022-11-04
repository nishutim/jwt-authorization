import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledHeader = styled.header`
   background-color: peachpuff;
`;

export const HeaderBody = styled.div`
   min-height: 70px;
   padding: 10px 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const AuthUser = styled.div``;
export const AuthUserName = styled.h4`
   font-size: 20px;
   color: darkorchid;
`;

export const LogoutButton = styled(Button)`
   border-color: palevioletred;
   background-color: palevioletred;

   &:hover {
      border-color: rgb(206, 106, 139);
      background-color: rgb(206, 106, 139);
   }
`;