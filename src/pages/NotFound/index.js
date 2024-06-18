import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { modalNotification } from "utils";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    modalNotification({
      type: "error",
      message: "Page Not Found",
    });
    navigate("admin");
  }, []);
  return <></>;
}

export default NotFound;
