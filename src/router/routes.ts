import { IRoute } from "../models";
import RouteNames from "./RouteNames";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

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
      path: RouteNames.APP,
      Component: HomePage
   }
] as IRoute[];