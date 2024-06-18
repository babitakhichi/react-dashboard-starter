import auth from "./Auth";
import profile from "./Profile";
import home from "./Home";

const AccessControl = {
  ...auth,
  ...profile,
  ...home,
};

export default AccessControl;
