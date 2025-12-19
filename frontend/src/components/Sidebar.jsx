import { NavLink } from "react-router-dom";
import { HomeIcon, BriefcaseIcon, ClipboardListIcon, UserIcon, LogoutIcon } from './icons'; // assume simple icon components or replace with <img>

export default function Sidebar() {
  const links = [
    { to: "/", label: "Dashboard", icon: <HomeIcon /> },
    { to: "/jobs", label: "Jobs", icon: <BriefcaseIcon /> },
    { to: "/applications", label: "Applications", icon: <ClipboardListIcon /> },
    { to: "/profile", label: "Profile", icon: <UserIcon /> },
  ];

  return (
    <aside className="w-72 bg-[#0f1720] text-gray-200 border-r border-[#18212b] min-h-screen p-6 fixed left-6 top-6 rounded-2xl shadow-2xl">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center">
            {/* logo small */}
            <span className="text-white font-bold">CB</span>
          </div>
          <h1 className="text-xl font-semibold">Career Bridge</h1>
        </div>
      </div>

      <nav className="space-y-3">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-gradient-to-r from-blue-600/80 to-blue-500/60 text-white shadow-inner"
                  : "text-gray-300 hover:bg-white/2"
              }`
            }
          >
            <span className="w-6 h-6">{l.icon}</span>
            <span className="font-medium">{l.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-8">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-200 hover:bg-white/2">
          <span className="w-6 h-6"><LogoutIcon /></span>
          Logout
        </button>
      </div>
    </aside>
  );
}
