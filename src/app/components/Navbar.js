"use client";
import { usePathname } from "next/navigation";
import AdminNavbar from "../admin_components/AdminNavbar";
import MainNavbar from "./MainNavbar";
import AgentNavbar from "../agent_components/AgentNavbar";
import ShopOwnerNavbar from "../shop_owner_components/ShopownerNavbar";
import RiderHeader from "../rider_components/RiderHeader";


const Navbar = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <AdminNavbar />;
  } else if (pathname.startsWith("/agent")) {
    return <AgentNavbar />;
  }
  else if((pathname.startsWith("/rider"))) {
    return <RiderHeader/>
  }
  else if((pathname.startsWith("/shopowner"))) {
    return <ShopOwnerNavbar/>;
  }
  else {
    return <MainNavbar/>;
  }
};

export default Navbar;
