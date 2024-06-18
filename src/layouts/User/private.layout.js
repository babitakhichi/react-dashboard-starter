import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LoginHeader } from "components";
import AppLayout from "../App/index.layout";

function PrivateLayout() {
  const navigate = useNavigate();
  const [redirectpath, setRedirectPath] = useState("");
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    if (redirectpath) {
      navigate(redirectpath);
    }
  }, [redirectpath]);

  return (
    <>
      <AppLayout setRedirectPath={setRedirectPath}>
        <>
          <LoginHeader menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
          <Outlet />
        </>
      </AppLayout>
    </>
  );
}

export default PrivateLayout;
