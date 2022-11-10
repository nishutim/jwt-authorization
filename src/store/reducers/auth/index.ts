import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthUser } from "../../../models";

interface InitialState {
   isAuth: boolean
   user: IAuthUser | null
   error: string
}

const initialState = {
   isAuth: false,
   user: null,
   error: ''
} as InitialState;

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      loginSuccess: (state, action: PayloadAction<IAuthUser>) => {
         state.isAuth = true
         state.user = action.payload
      },
      logoutSuccess: (state) => {
         state.isAuth = false
         state.user = null
      }
   }
});

export const AuthActions = authSlice.actions;

export default authSlice.reducer;