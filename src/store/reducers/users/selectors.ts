import { RootState } from './../../index';

export const users_selectIsLoading = (state: RootState) => state.users.isLoading;
export const users_selectUsers = (state: RootState) => state.users.users;
export const users_selectError = (state: RootState) => state.users.error;