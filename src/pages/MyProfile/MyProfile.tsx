import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../lib/context/AuthContext";

export const MyProfile = () => {
   const { user } = useAuthContext();

   
   return <div>MyProfile</div>;
};
