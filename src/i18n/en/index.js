import { userAuth, userHome, footer, userProfile } from "./User";
import { appLanguage as common } from "./Common/index.i18n";
import { appLanguage as adminAuth } from "./Admin/Auth/index.i18n";
import { adminCms, adminUserManagement, adminUpdateProfile } from "./Admin";

export default function lang() {
  return {
    text: {
      common: common.text,
      userHome: userHome.text,
      userAuth: userAuth.text,
      footer: footer.text,
      adminAuth: adminAuth.text,
      adminUserManagement: adminUserManagement.text,
      adminUpdateProfile: adminUpdateProfile.text,
      userProfile: userProfile.text,
      adminCms: adminCms.text,
    },
    validation: {
      auth: userAuth.validation,
      common: common.validation,
      adminAuth: adminAuth.validation,
      adminUserManagement: adminUserManagement.validation,
      adminUpdateProfile: adminUpdateProfile.validation,
      userProfile: userProfile.validation,
      adminCms: adminCms.validation,
    },
  };
}
