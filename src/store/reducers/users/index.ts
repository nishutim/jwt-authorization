import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from "../../../models";

interface InitialState {
   isLoading: boolean
   users: IUser[] | null
   error: string
}

const initialState = {
   isLoading: false,
   users: null,
   error: ''
} as InitialState;

const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      fetchUsersStarted: (state) => {
         state.isLoading = true
      },
      fetchUsersSuccess: (state, action: PayloadAction<IUser[]>) => {
         state.isLoading = false
         state.users = action.payload
         state.error = ''
      },
      fetchUsersFail: (state, action: PayloadAction<string>) => {
         state.isLoading = false
         state.error = action.payload
      }
   }
});

export const UsersActions = usersSlice.actions;

export default usersSlice.reducer;