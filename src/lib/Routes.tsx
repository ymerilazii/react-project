import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { MyProfile } from "../pages/MyProfile/MyProfile";
import { Register } from "../pages/Register/Register";
import { RouteWrapper } from "./RouteWrapper";

export const Routes = () => {
   let children = useRoutes([
      {
         path: "/",
         element: (
            <RouteWrapper routeType="protected">
               <Home />
            </RouteWrapper>
         ),
      },
      {
         path: "login",
         element: (
            <RouteWrapper routeType="guest">
               <Login />
            </RouteWrapper>
         ),
      },
      {
         path: "register",
         element: (
            <RouteWrapper routeType="guest">
               <Register />
            </RouteWrapper>
         ),
      },
      {
         path: "my-profile",
         element: (
            <RouteWrapper routeType="protected">
               <MyProfile />
            </RouteWrapper>
         ),
      },
   ]);

   return children;
};
