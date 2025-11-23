import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home/index.tsx"),
    route("login", "routes/auth/login.tsx"),
    route("*", "routes/error/404.tsx"),
] satisfies RouteConfig;
