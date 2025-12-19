import React, { useState, useEffect } from "react";
import { Linkedin, Github, Globe } from "lucide-react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    about: "",
    skills: "",
    linkedin: "",
    github: "",
    website: "",
    photo: "",
    resume: ""
  });

  // Load saved profile
  useEffect(() => {
    const saved = localStorage.getItem("career_profile");
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  // Handle input change
  const updateField = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Save to localStorage
  const saveProfile = () => {
    localStorage.setItem("career_profile", JSON.stringify(profile));
    alert("Profile Saved!");
  };

  // Image upload
  const uploadPhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Resume upload
  const uploadResume = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, resume: file.name });
    }
  };

  return (
    <div className="text-white space-y-8">

      <h1 className="text-3xl font-bold">My Profile</h1>

      {/* PHOTO */}
      <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/5">
        <h2 className="text-xl font-semibold mb-4">Profile Picture</h2>

        <div className="flex items-center gap-6">
          <img
            src={
              profile.photo ||
              "https://via.placeholder.com/120?text=Upload"
            }
            className="w-28 h-28 rounded-full object-cover border"
          />

          <input type="file" accept="image/*" onChange={uploadPhoto} />
        </div>
      </div>

      {/* PERSONAL DETAILS */}
      <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/5 space-y-4">
        <h2 className="text-xl font-semibold">Personal Info</h2>

        <input
          className="w-full px-4 py-2 bg-[#1E293B] rounded-lg"
          name="name"
          value={profile.name}
          onChange={updateField}
          placeholder="Your Name"
        />

        <input
          className="w-full px-4 py-2 bg-[#1E293B] rounded-lg"
          name="email"
          value={profile.email}
          onChange={updateField}
          placeholder="Email"
        />

        <textarea
          className="w-full px-4 py-2 bg-[#1E293B] rounded-lg"
          name="about"
          value={profile.about}
          onChange={updateField}
          placeholder="About You..."
        />
      </div>

      {/* SKILLS */}
      <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/5 space-y-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <input
          className="w-full px-4 py-2 bg-[#1E293B] rounded-lg"
          name="skills"
          value={profile.skills}
          onChange={updateField}
          placeholder="e.g. React, JavaScript, Tailwind, Java"
        />
      </div>

      {/* SOCIAL LINKS */}
      <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/5 space-y-4">
        <h2 className="text-xl font-semibold">Social Links</h2>

        <div className="flex items-center gap-3">
          <Linkedin />
          <input
            className="w-full px-4 py-2 bg-[#1E293B] rounded-lg"
            name="linkedin"
            value={profile.linkedin}
            onChange={updateField}
            placeholder="LinkedIn URL"
          />
        </div>

        <div className="flex items-center gap-3">
          <Github />
          <input
            className="w-full px-4 py-2 bg-[#1E293B] rounded-lg"
            name="github"
            value={profile.github}
            onChange={updateField}
            placeholder="GitHub URL"
          />
        </div>

        <div className="flex items-center gap-3">
          <Globe />
          <input
            className="w-full px-4 py-2 bg-[#1E293B] rounded-lg"
            name="website"
            value={profile.website}
            onChange={updateField}
            placeholder="Portfolio URL"
          />
        </div>
      </div>

      {/* RESUME */}
      <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/5 space-y-4">
        <h2 className="text-xl font-semibold">Resume Upload</h2>

        <input type="file" accept=".pdf" onChange={uploadResume} />

        {profile.resume && (
          <p className="text-gray-400 text-sm">Uploaded: {profile.resume}</p>
        )}
      </div>

      {/* SAVE BUTTON */}
      <button
        onClick={saveProfile}
        className="bg-blue-600 px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
      >
        Save Profile
      </button>
    </div>
  );
}
