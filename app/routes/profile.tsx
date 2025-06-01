import type { Route } from "./+types/profile";
import Profile from "~/pages/profile/profile";

const pathName = "Profile"

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${pathName} - Prianka Anggara`  },
  ];
}

export default function profileRoute() {
  return Profile()
}