// src/components/AuthContent.jsx
export default function AuthContent({ title, subtitle }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <p className="text-gray-400 mt-2">{subtitle}</p>
    </div>
  );
}
