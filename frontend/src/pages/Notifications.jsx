import React from "react";
import { Bell } from "lucide-react";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      message: "New job posted: Frontend Developer at TechNova",
      time: "2 hours ago",
    },
    {
      id: 2,
      message: "Your application was viewed by CodeCraft",
      time: "1 day ago",
    },
    {
      id: 3,
      message: "Profile updated successfully",
      time: "3 days ago",
    },
  ];

  return (
    <div className="text-white space-y-6">
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        <Bell /> Notifications
      </h1>

      <div className="space-y-4">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="bg-[#0F172A] p-4 rounded-xl border border-white/10 hover:border-blue-500/40 transition"
          >
            <p className="text-gray-200">{n.message}</p>
            <span className="text-sm text-gray-400">{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
