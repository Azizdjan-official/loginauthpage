import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/storage";

export const UserLayout = () => {
  const user = loadState("user");
  if (!user) return <Navigate to="/" replace />;

  return (
    <div>
      <div className="flex items-center gap-5 border border-red-400">
        <Link to="/user"> Profile</Link>
        <Link to="/user/address">Address</Link>
      </div>
      <Outlet />
    </div>
  );
};
