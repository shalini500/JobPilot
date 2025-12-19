export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-black text-gray-300 py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        <div>
          <h2 className="text-white font-semibold text-lg">CareerBridge</h2>
          <p classname="text-gray-400 mt-2">
            Empowering your tech career journey with tools and opportunities.
          </p>
        </div>

        <div>
          <h2 className="text-white font-medium mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>Jobs</li>
            <li>Profile</li>
            <li>Resume Builder</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-medium mb-3">Contact</h2>
          <p>Email: support@careerbridge.com</p>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} CareerBridge. All Rights Reserved.
      </p>
    </footer>
  );
}
