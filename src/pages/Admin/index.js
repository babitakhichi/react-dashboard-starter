import React from "react";

export const AdminLogin = React.lazy(() => import("./Login/index.page"));
export const AdminForgotPassword = React.lazy(() =>
  import("./ForgotPassword/index.page"),
);
export const AdminOtpVerification = React.lazy(() =>
  import("./OtpVerification/index.page"),
);
export const AdminResetPassword = React.lazy(() =>
  import("./ResetPassword/index.page"),
);
export const AdminProfile = React.lazy(() =>
  import("./AdminAccount/AdminProfile/index.page"),
);
export const AdminChangePassword = React.lazy(() =>
  import("./AdminAccount/AdminChangePassword/index.page"),
);
export const AdminNotifications = React.lazy(() =>
  import("./AdminAccount/AdminNotifications/index.page"),
);
export const AdminDashboard = React.lazy(() =>
  import("./Dashboard/index.page"),
);
export * from "./UserManagement";
export * from "./ManageCms";
