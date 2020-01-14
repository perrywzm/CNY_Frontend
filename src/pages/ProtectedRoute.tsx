import React from "react";
import AjaxService from "./../services/AjaxService";
import { Redirect } from "react-router-dom";

interface Props {}

const ProtectedRoute: React.FC<Props> = props => {
  if (!AjaxService.jwtHeader.Authorization) {
    return <Redirect to="/" />;
  } else {
    return <>{props.children}</>;
  }
};

export default ProtectedRoute;
