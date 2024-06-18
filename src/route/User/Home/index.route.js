import { UserHome } from "pages";
import routesMap from "routeControl/userRouteMap";

export default function route() {
  return [
    {
      path: routesMap.HOME.path,
      name: "Home",
      key: routesMap.HOME.path,
      // commonRoute: false,
      private: true,
      // withAuth: true,
      // belongsToHeader: true,
      element: <UserHome />,
    },
  ];
}
