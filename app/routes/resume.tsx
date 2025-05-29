import type { Route } from "./+types/resume";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "INI resume" },
  ];
}

export default function resumeRoute() {
  return <h1>
    TEST RESUME
  </h1>;
}
//test