import React, { useContext } from "react";

import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return user ? <Outlet Component /> : <Navigate to="/sign_in" />;
};

export default PrivateRoute;
