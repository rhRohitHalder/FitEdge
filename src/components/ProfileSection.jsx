import React, { useState } from "react";
import { Settings, Award, Bell, Shield, Heart } from "lucide-react";

const ProfileSection = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const weightProgress = 75 / 70 * 100 + "%";
  const workoutProgress = 3 / 5 * 100 + "%";

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"
            alt="Profile of Alex Thompson"
            className="w-24 h-24 rounded-full border-4 border-purple-500"
          />
          <div>
            <h2 className="text-2xl font-bold">Alex Thompson</h2>
            <p className="text-gray-400">Fitness Enthusiast</p>
            <div className="flex items-center mt-2">
              <Award className="w-5 h-5 text-yellow-400 mr-2" aria-hidden="true" />
              <span className="text-sm">Premium Member</span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />, title: "30 Day Streak", subtitle: "Completed" },
            { icon: <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />, title: "Fitness Warrior", subtitle: "Level 5" },
            { icon: <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />, title: "Goal Crusher", subtitle: "10 Goals Met" }
          ].map(({ icon, title, subtitle }, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-4 text-center">
              {icon}
              <h4 className="font-medium">{title}</h4>
              <p className="text-sm text-gray-400">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">Settings</h3>
        <div className="space-y-4">
          <button
            className="w-full flex items-center justify-between bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
            onClick={() => setNotificationsEnabled(!notificationsEnabled)}
            aria-label="Toggle notifications"
          >
            <div className="flex items-center">
              <Bell className="w-5 h-5 mr-3" aria-hidden="true" />
              <span>Notifications</span>
            </div>
            <div
              className={`w-12 h-6 rounded-full relative ${
                notificationsEnabled ? "bg-purple-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  notificationsEnabled ? "right-1" : "left-1"
                }`}
              ></div>
            </div>
          </button>

          {[
            { icon: <Settings className="w-5 h-5 mr-3" />, text: "Account Settings" },
            { icon: <Shield className="w-5 h-5 mr-3" />, text: "Privacy" }
          ].map(({ icon, text }, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
              aria-label={text}
            >
              <div className="flex items-center">
                {icon}
                <span>{text}</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
          ))}
        </div>
      </div>

      {/* Fitness Goals */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">Fitness Goals</h3>
        <div className="space-y-4">
          {[
            { label: "Weight Goal", progress: weightProgress, current: "75kg", total: "70kg" },
            { label: "Weekly Workouts", progress: workoutProgress, current: "3", total: "5" }
          ].map(({ label, progress, current, total }, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span>{label}</span>
                <span className="text-purple-400">{current} / {total}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: progress }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
