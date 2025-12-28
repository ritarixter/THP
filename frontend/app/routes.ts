import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/HomePage/HomePage.tsx"),
  route("contacts", "routes/ContactsPage/ContactsPage.tsx"),
  route("*", "routes/NotFoundPage/NotFoundPage.tsx"),
] satisfies RouteConfig;
