import React, { useState } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';

const ChatbotInterface = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm your AI fitness coach. I can help you with workout plans, nutrition advice, and answer any fitness-related questions. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const simulateResponse = async (userMessage) => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    let response = '';
    if (userMessage.toLowerCase().includes('workout')) {
      response = "Based on your fitness goals and current level, I recommend starting with a 30-minute HIIT workout. Would you like me to create a personalized workout plan for you?";
    } else if (userMessage.toLowerCase().includes('diet') || userMessage.toLowerCase().includes('nutrition')) {
      response = 'To support your fitness goals, focus on lean proteins, complex carbohydrates, and healthy fats. Would you like a detailed meal plan?';
    } else if (userMessage.toLowerCase().includes('goal')) {
      response = "That's great! Let's break down your goals and create a realistic timeline. What specific fitness goals would you like to achieve?";
    } else {
      response = "I'm here to help with any fitness-related questions. Feel free to ask about workouts, nutrition, or goal setting!";
    }

    setMessages((prev) => [...prev, { type: 'bot', content: response, timestamp: new Date() }]);
    setIsTyping(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: 'user', content: input, timestamp: new Date() };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    await simulateResponse(input);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white/10 backdrop-blur-md rounded-2xl">
      {/* Chat Header */}
      <div className="flex items-center space-x-3 p-4 border-b border-white/10">
        <Bot className="w-6 h-6 text-purple-400" />
        <div>
          <h2 className="font-semibold">AI Fitness Coach</h2>
          <p className="text-sm text-gray-400">Always here to help</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.type === 'user' ? 'bg-purple-500' : 'bg-blue-500'}`}>
                {message.type === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              <div className={`rounded-2xl p-3 ${message.type === 'user' ? 'bg-purple-500' : 'bg-white/10'}`}>
                <p className="text-sm">{message.content}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 p-1.5 bg-blue-500 rounded-full" />
            <div className="bg-white/10 rounded-full px-4 py-2">
              <Loader2 className="w-4 h-4 animate-spin" />
            </div>
          </div>
        )}
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about fitness..."
            className="flex-1 bg-white/5 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 transition-colors rounded-xl px-4 py-2 flex items-center justify-center">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatbotInterface;
