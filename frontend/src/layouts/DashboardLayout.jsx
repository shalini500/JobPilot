import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Home, Briefcase, ClipboardList, User, LogOut, Sun } from "lucide-react";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#0B1221] text-white">
      {/* Sidebar */}
      <div className="w-64 bg-[#0F172A] border-r border-white/5 p-6 space-y-8">
        <div className="text-2xl font-bold">Career Bridge</div>

        <nav className="space-y-2">
          <SidebarLink to="/" icon={<Home size={18} />}>Dashboard</SidebarLink>
          <SidebarLink to="/jobs" icon={<Briefcase size={18} />}>Jobs</SidebarLink>
          <SidebarLink to="/applications" icon={<ClipboardList size={18} />}>Applications</SidebarLink>
          <SidebarLink to="/profile" icon={<User size={18} />}>Profile</SidebarLink>
          <SidebarLink to="/logout" icon={<LogOut size={18} />}>Logout</SidebarLink>
        </nav>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="h-20 px-8 border-b border-white/5 flex items-center justify-between bg-[#0F172A]/60 backdrop-blur-xl">
          <input
            placeholder="Search jobs…"
            className="w-96 bg-[#1E293B] px-4 py-2 rounded-md outline-none border border-white/5 text-gray-300"
          />

          <div className="flex items-center gap-6">
            <Sun className="text-gray-300 cursor-pointer" size={20} />
            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full border border-white/10"
            />
          </div>
        </div>

        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ to, icon, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition 
        ${isActive ? "bg-blue-600/30 text-blue-400" : "text-gray-300 hover:bg-white/5"}`
      }
    >
      {icon}
      <span>{children}</span>
    </NavLink>
  );
}
