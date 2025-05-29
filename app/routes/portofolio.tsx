import type { Route } from "./+types/portofolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "INI portofolio" },
  ];
}

export default function portofolioRoute() {
  return <h1>
    TEST portofolio
  </h1>;;
}
//test