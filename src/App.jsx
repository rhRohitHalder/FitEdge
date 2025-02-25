import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { 
  Dumbbell, Trophy, Users, Activity, Crown, Coins, Brain, MessageSquare 
} from 'lucide-react';
import HealthForm from './HealthForm';
import Signup from './Form';
import Signin from './Sign';
import DietPredictor from './components/DietPredictor';
import WorkoutSection from './components/WorkoutSection';
import LeaderboardSection from './components/LeaderboardSection';
import ProfileSection from './components/ProfileSection';
import StatsSection from './components/StatsSection';
import ChatbotInterface from './components/ChatbotInterface';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('workout');
  const [showChat, setShowChat] = useState(false);

  const authRoutes = ["/signin", "/login", "/HealthForm"];

  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/HealthForm" element={<HealthForm />} />
        <Route path="/diet-predict" element={<DietPredictor />} />
      </Routes>

      {!authRoutes.includes(location.pathname) && (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
          
          {/* Header */}
          <header className="bg-black/20 backdrop-blur-sm fixed w-full z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Dumbbell className="w-8 h-8" />
                <span className="text-2xl font-bold">FitEdge</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-white/10 rounded-full px-4 py-1">
                  <Coins className="w-4 h-4 mr-2" />
                  <span>2,450</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                    alt="Profile"
                    className="w-9 h-9 rounded-full"
                  />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-4 pt-24 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8">
                {activeTab === 'workout' && <WorkoutSection />}
                {activeTab === 'leaderboard' && <LeaderboardSection />}
                {activeTab === 'profile' && <ProfileSection />}
                {activeTab === 'stats' && <StatsSection />}
                {activeTab === 'diet' && <DietPredictor />}
              </div>

              {/* AI Coach */}
              <div className="lg:col-span-4">
                {showChat ? (
                  <ChatbotInterface />
                ) : (
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <Brain className="w-6 h-6 text-purple-400" />
                      <h2 className="text-xl font-semibold">AI Coach</h2>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-xl p-4">
                        <p className="text-sm text-gray-300">Based on your recent activity, I suggest focusing on:</p>
                        <ul className="mt-3 space-y-2">
                          <li className="flex items-center text-purple-300">
                            <Crown className="w-4 h-4 mr-2" />
                            Upper body strength training
                          </li>
                          <li className="flex items-center text-purple-300">
                            <Crown className="w-4 h-4 mr-2" />
                            20 min HIIT cardio
                          </li>
                        </ul>
                      </div>
                      <button 
                        onClick={() => setShowChat(true)}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl py-3 font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                      >
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Chat with AI Coach
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>

          {/* Navigation */}
          <nav className="fixed bottom-0 w-full bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="flex justify-around py-4">
                {[
                  { key: 'workout', icon: <Dumbbell className="w-6 h-6" />, label: 'Workout' },
                  { key: 'leaderboard', icon: <Trophy className="w-6 h-6" />, label: 'Leaderboard' },
                  { key: 'stats', icon: <Activity className="w-6 h-6" />, label: 'Stats' },
                  { key: 'diet', icon: <Brain className="w-6 h-6" />, label: 'Diet' },
                  { key: 'profile', icon: <Users className="w-6 h-6" />, label: 'Profile' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex flex-col items-center ${
                      activeTab === tab.key ? 'text-purple-400' : 'text-gray-400'
                    }`}
                  >
                    {tab.icon}
                    <span className="text-xs mt-1">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default App;
