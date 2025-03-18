"use client";
import { usePathname } from "next/navigation";
import AdminNavbar from "../admin_components/AdminNavbar";
import Dashboard from "../agent_components/AgentDashboard";
import MainNavbar from "./MainNavbar";


const Navbar = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <AdminNavbar />;
  } else if (pathname.startsWith("/agent/dashboard")) {
    return <Dashboard />;
  }
  else if((pathname.startsWith("/rider/dashboard"))) {
    return <RiderNavbar/>
  }
  else {
    return <MainNavbar/>;
  }
};

export default Navbar;
