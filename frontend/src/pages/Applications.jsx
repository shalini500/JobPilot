import React from "react";
import { Briefcase, Clock, CheckCircle, XCircle } from "lucide-react";

export default function Applications() {
  const applications = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "TechNova Pvt Ltd",
      status: "Under Review",
      appliedDate: "Nov 22, 2025",
    },
    {
      id: 2,
      role: "React Developer Intern",
      company: "CodeCraft",
      status: "Selected",
      appliedDate: "Nov 18, 2025",
    },
    {
      id: 3,
      role: "UI/UX Designer",
      company: "SoftLabs",
      status: "Rejected",
      appliedDate: "Nov 15, 2025",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Under Review":
        return <span className="text-yellow-400 flex items-center gap-1"><Clock size={16}/> Under Review</span>;
      case "Selected":
        return <span className="text-green-400 flex items-center gap-1"><CheckCircle size={16}/> Selected</span>;
      case "Rejected":
        return <span className="text-red-400 flex items-center gap-1"><XCircle size={16}/> Rejected</span>;
      default:
        return null;
    }
  };

  return (
    <div className="text-white space-y-8">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold glow-text">My Applications</h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {applications.map((job) => (
          <div
            key={job.id}
            className="bg-[#1E293B] p-6 rounded-xl border border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(0,150,255,0.3)] transition"
          >
            <div className="flex items-center gap-3">
              <div className="bg-blue-600/20 p-3 rounded-lg border border-blue-600/20">
                <Briefcase size={24} className="text-blue-400" />
              </div>

              <div>
                <h2 className="text-xl font-semibold">{job.role}</h2>
                <p className="text-gray-400 text-sm">{job.company}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-400 text-sm">Applied on: {job.appliedDate}</p>
            </div>

            <div className="mt-4">
              {getStatusBadge(job.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
