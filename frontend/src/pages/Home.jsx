import React from "react";
import { Briefcase, MapPin, DollarSign, ArrowRight } from "lucide-react";

export default function Jobs() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore, India",
      salary: "₹12 - ₹18 LPA",
    },
    {
      title: "React Developer",
      company: "Microsoft",
      location: "Hyderabad, India",
      salary: "₹10 - ₹15 LPA",
    },
    {
      title: "UI/UX Designer",
      company: "Adobe",
      location: "Remote",
      salary: "₹8 - ₹12 LPA",
    },
  ];

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-[#0F172A] border border-white/5 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400">
                <Briefcase size={22} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-400 text-sm">{job.company}</p>
              </div>
            </div>

            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <MapPin size={18} className="text-gray-400" />
                {job.location}
              </p>
              <p className="flex items-center gap-2">
                <DollarSign size={18} className="text-gray-400" />
                {job.salary}
              </p>
            </div>

            <button
              className="w-full mt-5 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 
              py-2 rounded-lg flex items-center justify-center gap-2 transition"
            >
              View Details <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
