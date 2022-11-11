import { AuthActions } from '.';
import AuthService from '../../../services/AuthService';
import { AppDispatch } from './../../index';

export const login = (email: string, password: string, setStatus: (status: string) => void) => async (dispatch: AppDispatch) => {
   try {
      const data = await AuthService.login(email, password);
      localStorage.setItem('token', data.accessToken);
      dispatch(AuthActions.loginSuccess(data.user));
   } catch (e: any) {
      setStatus(e.response.data.message);
   }
}

export const registration = (email: string, password: string, setStatus: (status: string) => void) => async (dispatch: AppDispatch) => {
   try {
      const data = await AuthService.registration(email, password);
      localStorage.setItem('token', data.accessToken);
      dispatch(AuthActions.loginSuccess(data.user));
   } catch (e: any) {
      setStatus(e.response.data.message);
   }
}

export const logout = () => async (dispatch: AppDispatch) => {
   try {
      await AuthService.logout();
      localStorage.removeItem('token');
      dispatch(AuthActions.logoutSuccess());
   } catch (e: any) {
      alert(e.message);
   }
}

export const checkAuth = () => async (dispatch: AppDispatch) => {
   try {
      const token = localStorage.getItem('token');
      if (token) {
         const data = await AuthService.refresh();
         localStorage.setItem('token', data.accessToken);
         dispatch(AuthActions.loginSuccess(data.user));
      }
   } catch (e: any) {
      alert(e.response.data.message);
   }
}