import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Preloader from "../components/Preloader/Preloader";
import RouteNames from "./RouteNames";
import { privateRoutes } from "./routes";

const ContentRouter = () => {
   return (
      <Suspense fallback={<Preloader />}>
         <Routes>
            <Route path={RouteNames.HOME} element={<Navigate to={RouteNames.USERS} />} />
            {privateRoutes.map(({ path, Component }) => (
               <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path={RouteNames.BAD_URL} element={<Navigate to={RouteNames.USERS} />} />
         </Routes>
      </Suspense>
   );
}

export default ContentRouter;