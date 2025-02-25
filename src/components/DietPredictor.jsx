import React, { useState } from "react";
import { Brain, MessageSquare } from "lucide-react";

// Expanded Static Dataset for Diet Prediction (Multiple Suggestions)
const dietDatabase = {
  "underweight-low": [
    "Increase calorie intake with healthy fats, protein, and complex carbs.",
    "Eat nuts, avocados, dairy, and whole grains.",
    "Consider small but frequent meals throughout the day."
  ],
  "underweight-moderate": [
    "Balanced diet with lean protein, whole grains, and healthy fats.",
    "Add smoothies and protein shakes to your diet.",
    "Strength training can help build lean muscle mass."
  ],
  "underweight-high": [
    "High-calorie diet with protein shakes, lean meats, and resistance training.",
    "Include starchy vegetables like sweet potatoes and squash.",
    "Drink whole milk instead of low-fat alternatives."
  ],
  "normal-low": [
    "Maintain balanced meals with lean protein, vegetables, and whole grains.",
    "Stay hydrated and get at least 7-8 hours of sleep.",
    "Avoid excessive processed foods and refined sugars."
  ],
  "normal-moderate": [
    "Healthy carbs, proteins, and fats. Include fiber-rich foods.",
    "Focus on whole foods and avoid skipping meals.",
    "Incorporate light strength training with cardio."
  ],
  "normal-high": [
    "High protein with complex carbs and healthy fats.",
    "Ensure post-workout nutrition with protein and healthy carbs.",
    "Drink plenty of water and monitor muscle recovery."
  ],
  "overweight-low": [
    "Reduce refined carbs and increase fiber intake.",
    "Incorporate more plant-based proteins and green vegetables.",
    "Try walking 30 minutes daily to improve metabolism."
  ],
  "overweight-moderate": [
    "Focus on portion control, lean meats, and healthy fats.",
    "Combine cardio and strength training to enhance fat loss.",
    "Avoid sugary beverages and high-calorie snacks."
  ],
  "overweight-high": [
    "Low-carb, high-protein diet with intense workout recovery meals.",
    "Opt for nutrient-dense meals instead of processed foods.",
    "Ensure proper hydration and balanced electrolyte intake."
  ],
  "obese-low": [
    "Focus on portion control, low glycemic foods, and lean proteins.",
    "Increase fiber-rich foods to aid digestion and satiety.",
    "Avoid late-night snacking and highly processed meals."
  ],
  "obese-moderate": [
    "Increase fiber intake, reduce sugar, and consume lean protein.",
    "Stay active with light exercises like yoga or brisk walking.",
    "Drink green tea or herbal teas to support metabolism."
  ],
  "obese-high": [
    "High-protein, low-carb meal plan with strength training.",
    "Eat more home-cooked meals and avoid fast food.",
    "Increase daily movement by incorporating active habits."
  ]
};

const DietPredictor = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("");
  const [dietSuggestions, setDietSuggestions] = useState([]);

  // Function to calculate BMI and predict diet
  const predictDiet = () => {
    if (!weight || !height || !activity) {
      setDietSuggestions(["⚠️ Please enter all details to get a diet prediction."]);
      return;
    }

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert cm to meters
    const bmi = weightNum / (heightNum * heightNum);

    let bmiCategory = "";
    if (bmi < 18.5) bmiCategory = "underweight";
    else if (bmi >= 18.5 && bmi < 24.9) bmiCategory = "normal";
    else if (bmi >= 25 && bmi < 29.9) bmiCategory = "overweight";
    else bmiCategory = "obese";

    const key = `${bmiCategory}-${activity}`;
    setDietSuggestions(dietDatabase[key] || ["No diet recommendation found."]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white flex flex-col items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full max-w-md">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <Brain className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-semibold">Diet Predictor</h2>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-300">Weight (kg):</span>
            <input
              type="number"
              placeholder="Enter weight"
              className="w-full bg-white/5 rounded-xl p-3 text-white placeholder-gray-400 mt-1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="text-gray-300">Height (cm):</span>
            <input
              type="number"
              placeholder="Enter height"
              className="w-full bg-white/5 rounded-xl p-3 text-white placeholder-gray-400 mt-1"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="text-gray-300">Activity Level:</span>
            <select
              className="w-full bg-blue-500 rounded-xl p-3 mt-1  placeholder-gray-400 mt-1"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="">Select Activity Level</option>
              <option value="low">Low (Sedentary)</option>
              <option value="moderate">Moderate (Light Exercise)</option>
              <option value="high">High (Intense Workout)</option>
            </select>
          </label>

          {/* Predict Button */}
          <button
            onClick={predictDiet}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl py-3 font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Predict Diet
          </button>
        </div>

        {/* Prediction Results (Multiple Suggestions) */}
        {dietSuggestions.length > 0 && (
          <div className="bg-white/5 rounded-xl p-4 mt-4 text-left">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">Diet Suggestions:</h3>
            <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
              {dietSuggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DietPredictor;
