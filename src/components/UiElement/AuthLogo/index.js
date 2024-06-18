import React from "react";
import { Link } from "react-router-dom";
import adminRouteMap from "../../../routeControl/adminRouteMap";

function AuthLogo() {
  return (
    <>
      <div className="brand-logo pb-4 text-center">
        <Link to={adminRouteMap.LOGIN.path} className="logo-link">
          <div className="fs-1 fw-bold">Admin</div>
        </Link>
      </div>
    </>
  );
}

export default AuthLogo;
