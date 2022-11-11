import React from 'react';
import { IRoute } from "../models";
import RouteNames from "./RouteNames";

const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const UsersPage = React.lazy(() => import("../pages/UsersPage"));

export const publicRoutes = [
   {
      path: RouteNames.LOGIN,
      Component: LoginPage
   },
   {
      path: RouteNames.REGISTRATION,
      Component: LoginPage
   }
] as IRoute[];

export const privateRoutes = [
   {
      path: RouteNames.USERS,
      Component: UsersPage
   }
] as IRoute[];