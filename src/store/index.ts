import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/auth";
import users from "./reducers/users";

const rootReducer = combineReducers({
   auth,
   users
});

const store = configureStore({
   reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;