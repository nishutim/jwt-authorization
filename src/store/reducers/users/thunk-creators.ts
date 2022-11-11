import { UsersActions } from '.';
import UsersService from '../../../services/UsersService';
import { AppDispatch } from './../../index';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
   dispatch(UsersActions.fetchUsersStarted());
   try {
      const data = await UsersService.fetchUsers();
      dispatch(UsersActions.fetchUsersSuccess(data));
   } catch (e: any) {
      dispatch(UsersActions.fetchUsersFail('Some error occured while fetching users'));
   }
}