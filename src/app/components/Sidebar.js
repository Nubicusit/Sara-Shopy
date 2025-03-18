"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCart } from "react-icons/io5";

const Sidebar = ({ isOpen }) => {
  const pathname = usePathname();

  // Navigation items
  const navItems = [
    { href: "/dashboard", icon: <IoCart />, label: "Dashboard" },
    { href: "/products", icon: "fa-shopping-basket", label: "Users" },
    { href: "/orders", icon: "fa-shopping-cart", label: "Agents" },
    { href: "/customers", icon: "fa-users", label: "Shop Owner" },
    { href: "/promotions", icon: "fa-tag", label: "Orders" },
    { href: "/promotions", icon: "fa-tag", label: "Order History" },
  ];

  const reportItems = [
    { href: "/analytics", icon: "fa-chart-line", label: "Financial Reports" },
  ];

  const settingsItems = [
    { href: "/store-settings", icon: "fa-store", label: "Store Settings" },
    { href: "/logout", icon: "fa-sign-out-alt", label: "Logout" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-black text-white transition-transform duration-300 z-10 
                    ${
                      isOpen
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                    }`}
    >
      <div className="p-5 border-b border-gray-800 mb-5">
        <h2 className="text-yellow-400 font-bold text-xl">SARA SHOPY</h2>
      </div>

      <ul className="px-0">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`flex items-center text-gray-300 hover:text-black py-3 px-6 hover:bg-opacity-10 hover:bg-white transition-all
                         ${
                           pathname === item.href
                             ? "border-l-4 border-yellow-400 bg-opacity-10 bg-white text-yellow-400"
                             : ""
                         }`}
            >
              <i className={`${item.icon} w-5 mr-3 text-center`}></i>{" "}
              {item.label}
            </Link>
          </li>
        ))}

        <li className="uppercase text-xs text-gray-500 px-6 py-4 mt-2">
          Reports
        </li>

        {reportItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`flex items-center text-gray-300 hover:text-white py-3 px-6 hover:bg-opacity-10 hover:bg-white transition-all
                         ${
                           pathname === item.href
                             ? "border-l-4 border-yellow-400 bg-opacity-10 bg-white text-yellow-400"
                             : ""
                         }`}
            >
              <i className={`${item.icon} w-5 mr-3 text-center`}></i>{" "}
              {item.label}
            </Link>
          </li>
        ))}

        <li className="uppercase text-xs text-gray-500 px-6 py-4 mt-2">
          Settings
        </li>

        {settingsItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`flex items-center text-gray-300 hover:text-white py-3 px-6 hover:bg-opacity-10 hover:bg-white transition-all
                         ${
                           pathname === item.href
                             ? "border-l-4 border-yellow-400 bg-opacity-10 bg-white text-yellow-400"
                             : ""
                         }`}
            >
              <i className={`fas ${item.icon} w-5 mr-3 text-center`}></i>{" "}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
