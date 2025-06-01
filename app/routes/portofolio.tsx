import NotYetImplemented from "~/shared/components/NotYetImplemented";
import type { Route } from "./+types/portofolio";

const pathName = "Portfolio"

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${pathName} - Prianka Anggara`  },
  ];
}

export default function portofolioRoute() {
  return <NotYetImplemented name={pathName}/>
}