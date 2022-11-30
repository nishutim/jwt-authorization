import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { users_selectError, users_selectIsLoading, users_selectUsers } from "../store/reducers/users/selectors";
import { fetchUsers } from "../store/reducers/users/thunk-creators";
import { Page, PageBody } from "../components/styled";
import Preloader from "../components/Preloader/Preloader";
import GlobalError from "../components/GlobalError/GlobalError";

const UsersPage = () => {
   const isLoading = useAppSelector(users_selectIsLoading);
   const users = useAppSelector(users_selectUsers);
   const error = useAppSelector(users_selectError);

   const [disableBtn, setDisableBtn] = useState(false);

   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchUsers());
   }, []);

   const onLoadUsers = async () => {
      setDisableBtn(true);
      await dispatch(fetchUsers());
      setDisableBtn(false);
   }

   if (!users) return <Preloader />
   if (error) return <GlobalError error={error} />

   return (
      <Page>
         <PageBody>
            <Button className="align-self-start mb-4" disabled={disableBtn} onClick={onLoadUsers}>Load users</Button>
            {isLoading ?
               <Preloader />
               :
               <ul className="p-0">
                  {users?.map(({ id, email }) => (
                     <li key={id}>{email}</li>
                  ))}
               </ul>}
         </PageBody>
      </Page>
   );
}

export default UsersPage;