import React from "react";
import { Trophy, Medal, Star } from "lucide-react";

const LeaderboardSection = () => {
  const leaderboard = [
    {
      rank: 1,
      name: "Sarah Johnson",
      points: 2840,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      rank: 2,
      name: "Michael Chen",
      points: 2720,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      rank: 3,
      name: "Emily Davis",
      points: 2650,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Global Leaderboard Section */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Global Leaderboard</h2>
          <Trophy className="w-6 h-6 text-yellow-400" />
        </div>

        <div className="space-y-4">
          {leaderboard.map(({ rank, name, points, avatar }) => (
            <div
              key={rank}
              className="flex items-center justify-between bg-white/5 rounded-xl p-4"
            >
              <div className="flex items-center space-x-4">
                {/* Rank Icons */}
                <div className="w-8 h-8 flex items-center justify-center">
                  {rank === 1 && <Trophy className="w-6 h-6 text-yellow-400" />}
                  {rank === 2 && <Medal className="w-6 h-6 text-gray-400" />}
                  {rank === 3 && <Medal className="w-6 h-6 text-orange-400" />}
                </div>

                {/* User Avatar */}
                <img
                  src={avatar}
                  alt={`${name}'s avatar`}
                  className="w-10 h-10 rounded-full"
                />

                {/* User Details */}
                <div>
                  <h3 className="font-medium">{name}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 mr-1" />
                    {points} points
                  </div>
                </div>
              </div>

              {/* Rank Number */}
              <div className="text-2xl font-bold">#{rank}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Challenges Section */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Weekly Challenges</h2>
        <div className="space-y-4">
          {/* Challenge Card Component */}
          {[
            {
              title: "10K Steps Challenge",
              progress: 70,
              completed: "7,000 / 10,000 steps",
              reward: "500 coins reward",
              timeLeft: "3 days left",
            },
            {
              title: "Perfect Week",
              progress: 40,
              completed: "2/5 workouts completed",
              reward: "1000 coins reward",
              timeLeft: "5 days left",
            },
          ].map(({ title, progress, completed, reward, timeLeft }) => (
            <div key={title} className="bg-white/5 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{title}</h3>
                <span className="text-purple-400">{timeLeft}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>{completed}</span>
                <span>{reward}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardSection;
