import React from "react";


export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Welcome + Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Welcome box */}
        <div className="bg-[#0F172A] rounded-xl p-8 shadow-md border border-white/5 col-span-2">
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-gray-400 mt-2">
            Find your perfect job and career opportunities
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg font-semibold shadow hover:brightness-110">
            Browse Jobs
          </button>
        </div>

        {/* Analytics box */}
        <div className="bg-[#0F172A] rounded-xl p-8 shadow-md border border-white/5">
          <h3 className="text-xl font-semibold mb-4">Job Analytics</h3>

          {/* Fake graph */}
          <div className="flex items-end gap-3 h-32">
            {[30, 50, 70, 40, 90, 60].map((h, i) => (
              <div
                key={i}
                className="w-6 bg-blue-600 rounded"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>

          <p className="text-3xl font-bold mt-4">1,234</p>
          <p className="text-gray-400 text-sm">Total Applications</p>
        </div>
      </div>

      {/* Recent Jobs + Profile Completeness */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Jobs */}
        <div className="bg-[#0F172A] rounded-xl p-8 shadow-md border border-white/5 col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Recent Jobs</h3>
            <button className="text-blue-400 text-sm">View All</button>
          </div>

          <JobItem title="Frontend Developer" company="Tech Solutions · New York, NY" type="Full-time" />
          <JobItem title="UI/UX Designer" company="Creative Agency · San Francisco, CA" type="Part-time" />
          <JobItem title="Software Engineer" company="Innovatech Inc · Remote" type="Internship" />
        </div>

        {/* Profile completeness */}
        <div className="bg-[#0F172A] rounded-xl p-8 shadow-md border border-white/5">
          <h3 className="text-xl font-semibold mb-4">Profile Completeness</h3>

          <div className="flex items-center justify-center">
            <div className="w-28 h-28 rounded-full border-8 border-blue-600 border-t-transparent animate-spin-slow"></div>
          </div>

          <p className="text-center mt-4 text-3xl font-bold">75%</p>

          <p className="text-gray-400 text-sm mt-2 text-center">
            Complete your profile to increase your chances of getting hired.
          </p>

          <button className="mt-4 w-full py-3 bg-blue-600 rounded-lg font-semibold shadow hover:brightness-110">
            Complete Profile
          </button>
        </div>
      </div>

    </div>
  );
}

function JobItem({ title, company, type }) {
  return (
    <div className="p-4 mb-4 bg-[#131C2F] rounded-lg flex items-center justify-between">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-400 text-sm">{company}</p>
      </div>

      <span className="text-xs px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full">
        {type}
      </span>
    </div>
  );
}
