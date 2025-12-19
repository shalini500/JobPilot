import React from "react";

export default function AdminDashboard() {
  const users = [
    { id: 1, name: "Shalini", role: "User" },
    { id: 2, name: "Aman", role: "Recruiter" },
    { id: 3, name: "Riya", role: "User" },
  ];

  return (
    <div className="text-white space-y-6">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[#0F172A] p-6 rounded-xl">Total Users<br/><strong>3</strong></div>
        <div className="bg-[#0F172A] p-6 rounded-xl">Jobs Posted<br/><strong>12</strong></div>
        <div className="bg-[#0F172A] p-6 rounded-xl">Active Applications<br/><strong>42</strong></div>
      </div>

      <div className="bg-[#0F172A] p-6 rounded-xl mt-4">
        <h2 className="font-semibold mb-3">Users</h2>
        <div className="space-y-2">
          {users.map(u => (
            <div key={u.id} className="flex items-center justify-between p-3 bg-[#131C2B] rounded">
              <div>
                <div className="font-medium">{u.name}</div>
                <div className="text-gray-400 text-sm">{u.role}</div>
              </div>
              <div>
                <button className="px-3 py-1 rounded bg-red-500/20 text-red-400">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
