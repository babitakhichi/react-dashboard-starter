import { Login, Signup } from "pages";
import routesMap from "routeControl/userRouteMap";

export default function route() {
  return [
    {
      path: routesMap.LOGIN.path,
      name: "",
      key: routesMap.LOGIN.path,
      commonRoute: true,
      private: false,
      element: <Login />,
    },
    {
      path: routesMap.SIGNUP.path,
      name: "",
      key: routesMap.SIGNUP.path,
      commonRoute: true,
      private: false,
      element: <Signup />,
    },
    {
      path: routesMap.LANDING_PAGE.path,
      name: "",
      key: routesMap.LANDING_PAGE.path,
      commonRoute: true,
      private: false,
      element: <Login />,
    },
  ];
}
