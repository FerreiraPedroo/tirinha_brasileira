import { Outlet } from "react-router";
import { SuperiorBar } from "../components/superior-bar/SuperiorBar";

export function Layout() {
  return (
    <>
      <SuperiorBar />
      <Outlet />
    </>
  );
}
