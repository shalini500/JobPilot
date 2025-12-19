import React, { useState } from "react";
import { UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1221] text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0F172A] p-8 rounded-2xl w-96 space-y-6 border border-white/10"
      >
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <UserPlus /> Register
        </h1>

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-[#1E293B]"
          required
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-[#1E293B]"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-[#1E293B]"
          required
        />

        <button className="w-full bg-blue-600 py-2 rounded-lg">
          Create Account
        </button>
      </form>
    </div>
  );
}
