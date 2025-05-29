import { type RouteConfig, index, route,  } from "@react-router/dev/routes";

export default [
    // index("routes/home.tsx"),
    index("routes/profile.tsx"),
    route("resume", "routes/resume.tsx"),
    route("message", "routes/messages.tsx"),
    route("portfolio", "routes/portofolio.tsx"),
] satisfies RouteConfig;
