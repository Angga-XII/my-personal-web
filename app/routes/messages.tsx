import type { Route } from "./+types/messages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "INI MESSAGES" },
  ];
}

export default function messagesRoute() {
  return <h1>
    TEST messages
  </h1>;;
}
//test