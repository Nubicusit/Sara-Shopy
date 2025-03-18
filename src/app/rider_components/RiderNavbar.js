"use client";
import { useState } from "react";
import RiderDrawer from "./RiderDrawer";

export default function RiderNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="bg-gray-100">
      {/* App Bar */}
      <div className="bg-white shadow-md p-4">
        <div className="flex justify-between items-center">
          <button onClick={toggleDrawer}>
            <span className="text-2xl">☰</span>
          </button>
          <h1 className="text-xl font-bold">Rider Dashboard</h1>
          <button onClick={() => console.log("Notifications")}>
            <span className="text-2xl">🔔</span>
          </button>
        </div>
      </div>

      {/* Rider Drawer */}
      <RiderDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </div>
  );
}
