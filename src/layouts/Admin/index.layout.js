import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "styles/scss/admin/admin.scss";

function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  useEffect(() => {
    let pathPattern = /[ ]$/g;
    if (pathPattern.test(pathname)) {
      navigate(pathname.replace(pathPattern, ""), { replace: true });
    }
  }, [pathname]);

  return <Outlet />;
}

export default AdminLayout;
