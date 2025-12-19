import React from "react";
import { Search, Briefcase, MapPin, Clock } from "lucide-react";

export default function Jobs() {
  return (
    <div className="space-y-8">

      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-white">Job Search</h1>

      {/* Search Bar */}
      <div className="bg-[#0F172A] border border-white/5 p-5 rounded-2xl shadow-xl">
        <div className="flex items-center bg-[#1E293B] px-4 py-3 rounded-lg gap-3 border border-white/10">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search job roles, skills, companies…"
            className="bg-transparent outline-none w-full text-gray-300"
          />
        </div>
      </div>

      {/* Suggested Jobs Section */}
      <div className="bg-[#0F172A] rounded-2xl border border-white/5 p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Recommended Jobs</h2>
          <span className="text-blue-400 text-sm cursor-pointer hover:underline">
            View All
          </span>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">

          {/* CARD 1 */}
          <JobCard
            title="Frontend Developer"
            company="Tech Solutions"
            location="New York, USA"
            type="Full-time"
          />

          {/* CARD 2 */}
          <JobCard
            title="UI/UX Designer"
            company="Creative Agency"
            location="San Francisco, CA"
            type="Part-time"
          />

          {/* CARD 3 */}
          <JobCard
            title="Software Engineer"
            company="Innovatech Inc"
            location="Remote"
            type="Internship"
          />

        </div>
      </div>

      {/* AI Suggestion Note */}
      <div className="bg-[#0F172A] border border-white/5 p-6 rounded-2xl shadow-xl">
        <h2 className="text-lg font-semibold text-white">AI Job Suggestions</h2>
        <p className="text-gray-400 mt-2">
          Personalized AI-powered job recommendations coming soon…
        </p>
      </div>

    </div>
  );
}


// ------------------------------------------------------------------
// COMPONENT FOR JOB CARD
// ------------------------------------------------------------------
function JobCard({ title, company, location, type }) {
  return (
    <div className="bg-[#1E293B] border border-white/10 p-5 rounded-xl flex items-center justify-between hover:bg-[#243044] transition cursor-pointer">

      <div className="flex items-start gap-4">

        {/* Icon */}
        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
          <Briefcase size={22} className="text-blue-400" />
        </div>

        {/* Job Info */}
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-gray-400 text-sm">{company}</p>

          <div className="flex items-center gap-3 text-xs text-gray-300 mt-2">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {location}
            </span>

            <span className="flex items-center gap-1 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">
              <Clock size={14} /> {type}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
