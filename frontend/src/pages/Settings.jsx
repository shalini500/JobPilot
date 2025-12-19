import React, { useState } from "react";
import { Settings as SettingsIcon, Key } from "lucide-react";

export default function Settings() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [twoFA, setTwoFA] = useState(false);

  return (
    <div className="text-white space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-gray-200 font-medium">Email Notifications</div>
            <div className="text-gray-400 text-sm">
              Receive updates to your email
            </div>
          </div>
          <input
            type="checkbox"
            checked={emailNotif}
            onChange={() => setEmailNotif((v) => !v)}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-gray-200 font-medium">
              Two-factor Authentication
            </div>
            <div className="text-gray-400 text-sm">
              Add extra account security
            </div>
          </div>
          <input
            type="checkbox"
            checked={twoFA}
            onChange={() => setTwoFA((v) => !v)}
          />
        </div>

        <div className="pt-4 border-t border-white/3">
          <button className="bg-blue-600 px-4 py-2 rounded-lg">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
