import type { Route } from "./+types/profile";
import Profile from "~/profile/profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - Prianka Anggara" },
  ];
}

export default function profileRoute() {
  return Profile()
}