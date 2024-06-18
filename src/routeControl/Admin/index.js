import userManagement from "./UserManagement";
import auth from "./Auth";
import dashboard from "./Dashboard";
import manageCms from "./ManageCms/index";
import adminProfile from "./AdminAccount/index";

const AccessControl = {
  ...userManagement,
  ...auth,
  ...dashboard,
  ...manageCms,
  ...adminProfile,
};

export default AccessControl;
