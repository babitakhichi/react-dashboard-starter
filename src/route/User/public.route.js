import authRoute from "./Auth/index.route";

export default function route(t) {
  return [...authRoute(t)];
}
