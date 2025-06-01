import NotYetImplemented from "~/shared/components/NotYetImplemented";
import type { Route } from "./+types/resume";
import Resume from "~/pages/resume/resume";
import { name } from "~/shared/utils/constantString";

const pathName = "Resume"

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${pathName} - Prianka Anggara`  },
  ];
}

export default function resumeRoute() {
  return <NotYetImplemented name={pathName}/>
  // return Resume();
}