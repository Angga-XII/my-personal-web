import NotYetImplemented from "~/shared/components/NotYetImplemented";
import type { Route } from "./+types/messages";

const pathName = "Messages"

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${pathName} - Prianka Anggara`  },
  ];
}

export default function messagesRoute() {
  return <NotYetImplemented name={pathName}/>
}