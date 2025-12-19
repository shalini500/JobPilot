import React, { useState } from "react";
import { FileText, Download } from "lucide-react";

export default function ResumeBuilder() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    education: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="text-white space-y-8">
      
      {/* Title */}
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <FileText /> Resume Builder
      </h1>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="input"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="input"
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="input"
        />

        <textarea
          name="skills"
          placeholder="Skills (React, Java, CSS...)"
          value={form.skills}
          onChange={handleChange}
          className="input col-span-1 md:col-span-2 h-24"
        />

        <textarea
          name="experience"
          placeholder="Experience"
          value={form.experience}
          onChange={handleChange}
          className="input col-span-1 md:col-span-2 h-24"
        />

        <textarea
          name="education"
          placeholder="Education"
          value={form.education}
          onChange={handleChange}
          className="input col-span-1 md:col-span-2 h-24"
        />
      </div>

      {/* Resume Preview */}
      <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/10">
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>

        <p className="text-lg font-bold">{form.name}</p>
        <p className="text-gray-400">{form.email} | {form.phone}</p>

        <div className="mt-4">
          <h3 className="font-semibold">Skills</h3>
          <p className="text-gray-300">{form.skills}</p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Experience</h3>
          <p className="text-gray-300">{form.experience}</p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Education</h3>
          <p className="text-gray-300">{form.education}</p>
        </div>
      </div>

      {/* Download Button */}
      <button className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition">
        <Download size={18} />
        Download Resume (UI Only)
      </button>
    </div>
  );
}
