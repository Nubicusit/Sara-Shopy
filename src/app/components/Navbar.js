"use client";
import { usePathname } from "next/navigation";
import AdminNavbar from "../admin_components/AdminNavbar";
import MainNavbar from "./MainNavbar";
import AgentNavbar from "../agent_components/AgentNavbar";
import RiderNavbar from "../rider_components/RiderNavbar";
import ShopOwnerNavbar from "../shop_owner_components/ShopownerNavbar";


const Navbar = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <AdminNavbar />;
  } else if (pathname.startsWith("/agent")) {
    return <AgentNavbar />;
  }
  else if((pathname.startsWith("/rider"))) {
    return <RiderNavbar/>
  }
  else if((pathname.startsWith("/shopowner"))) {
    return <ShopOwnerNavbar/>;
  }
  else {
    return <MainNavbar/>;
  }
};

export default Navbar;
