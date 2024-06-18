import { Outlet } from "react-router-dom";
import adminRouteMap from "routeControl/adminRouteMap";
import { FAQS } from "pages";

export default function route() {
  return [
    {
      path: adminRouteMap.MANAGE_CMS.path,
      private: true,
      name: "Manage CMS",
      key: adminRouteMap.MANAGE_CMS.path,
      belongsToSidebar: true,
      icon: adminRouteMap.MANAGE_CMS.icon,
      element: <Outlet />,
      children: [
        {
          path: adminRouteMap.FAQS.path,
          private: true,
          name: "Faqs",
          key: adminRouteMap.FAQS.path,
          belongsToSidebar: true,
          element: <FAQS />,
        },
      ],
    },
  ];
}
