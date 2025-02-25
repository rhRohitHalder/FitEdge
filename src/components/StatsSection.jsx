
import { Activity, Flame, Timer, TrendingUp, Calendar } from 'lucide-react';

const StatsSection = () => {
  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="w-5 h-5 text-purple-400" />
            <span className="text-gray-400">Workouts</span>
          </div>
          <div className="text-2xl font-bold">24</div>
          <div className="text-sm text-green-400">+3 this week</div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-gray-400">Calories</span>
          </div>
          <div className="text-2xl font-bold">12.4k</div>
          <div className="text-sm text-green-400">+2.1k this week</div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Timer className="w-5 h-5 text-blue-400" />
            <span className="text-gray-400">Minutes</span>
          </div>
          <div className="text-2xl font-bold">840</div>
          <div className="text-sm text-green-400">+120 this week</div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-gray-400">Streak</span>
          </div>
          <div className="text-2xl font-bold">12</div>
          <div className="text-sm text-purple-400">Personal best!</div>
        </div>
      </div>

      {/* Activity Calendar */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Activity Calendar</h2>
          <Calendar className="w-6 h-6" />
        </div>
        <div className="grid grid-cols-7 gap-2">
          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-lg ${
                Math.random() > 0.5 ? 'bg-purple-500/50' : 'bg-white/5'
              }`}
            ></div>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-2 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-white/5 rounded mr-1"></div>
            <span className="text-gray-400">No activity</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500/50 rounded mr-1"></div>
            <span className="text-gray-400">Workout completed</span>
          </div>
        </div>
      </div>

      {/* Progress Charts */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Weekly Progress</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Calories Burned</span>
              <span>2.4k / 3k</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Workout Duration</span>
              <span>180 / 240 min</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Workouts Completed</span>
              <span>4 / 5</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;