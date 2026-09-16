import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";
import { SubNavbar } from "../components/sub-navbar";
import { AppContext } from "../context/app.context";

export function Layout() {
  return (
    <AppContext>
      <Navbar />
      <SubNavbar />
      <Outlet />
    </AppContext>
  );
}
