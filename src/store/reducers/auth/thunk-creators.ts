import { AuthActions } from '.';
import { AppDispatch } from './../../index';

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
   try {
      dispatch(AuthActions.loginSuccess({ id: 1, email: 'sobaka@mail.ru' }));
   } catch (e: any) {
      alert(e.message);
   }
}

export const logout = () => async (dispatch: AppDispatch) => {
   try {
      dispatch(AuthActions.logoutSuccess());
   } catch (e: any) {
      alert(e.message);
   }
}