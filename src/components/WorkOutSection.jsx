import React from 'react';
import { Play, Clock, Flame, BarChart } from 'lucide-react';

// Reusable WorkoutCard Component
const WorkoutCard = ({ title, duration, calories, difficulty, image }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
    <img src={image} alt={`${title} workout`} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="flex items-center justify-between text-sm text-gray-300">
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {duration}
        </div>
        <div className="flex items-center">
          <Flame className="w-4 h-4 mr-1" />
          {calories} cal
        </div>
      </div>
      <button className="mt-3 w-full bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg py-2 flex items-center justify-center">
        <Play className="w-4 h-4 mr-2" />
        Start
      </button>
    </div>
  </div>
);

const WorkoutSection = () => {
  const workouts = [
    {
      title: "HIIT Cardio Blast",
      duration: "30 min",
      calories: "300-400",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&auto=format&fit=crop"
    },
    {
      title: "Strength Training",
      duration: "45 min",
      calories: "400-500",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop"
    },
    {
      title: "Yoga Flow",
      duration: "25 min",
      calories: "150-200",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Today's Recommendation */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Today's Recommended Workout</h2>
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1200&auto=format&fit=crop"
            alt="Full Body Power workout"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
            <div className="w-full">
              <h3 className="text-2xl font-bold mb-2">Full Body Power</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">45 min</span>
                </div>
                <div className="flex items-center">
                  <Flame className="w-4 h-4 mr-1" />
                  <span className="text-sm">400 cal</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="w-4 h-4 mr-1" />
                  <span className="text-sm">Intermediate</span>
                </div>
              </div>
              <button className="mt-4 bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg px-6 py-2 flex items-center">
                <Play className="w-4 h-4 mr-2" />
                Start Workout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Workout Library */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Workout Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workouts.map((workout, index) => (
            <WorkoutCard key={index} {...workout} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutSection;
