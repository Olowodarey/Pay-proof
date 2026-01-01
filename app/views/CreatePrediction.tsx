"use client";

import { useState } from "react";

export default function CreatePrediction() {
  const [formData, setFormData] = useState({
    eventName: "",
    team1: "",
    team2: "",
    prizeAmount: "",
    deadline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating prediction:", formData);
    // Handle submission logic here
  };

  return (
    <div className="px-4 py-6 pb-24">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Create Prediction</h1>
        <p className="text-gray-400 text-sm">Set up a new prediction event</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Event Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Event Name
          </label>
          <input
            type="text"
            placeholder="e.g., AFCON 2025 Qualifier"
            value={formData.eventName}
            onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
            className="w-full px-4 py-3 bg-dark-card border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        {/* Team 1 */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Team/Option 1
          </label>
          <input
            type="text"
            placeholder="e.g., Nigeria"
            value={formData.team1}
            onChange={(e) => setFormData({ ...formData, team1: e.target.value })}
            className="w-full px-4 py-3 bg-dark-card border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        {/* Team 2 */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Team/Option 2
          </label>
          <input
            type="text"
            placeholder="e.g., Ghana"
            value={formData.team2}
            onChange={(e) => setFormData({ ...formData, team2: e.target.value })}
            className="w-full px-4 py-3 bg-dark-card border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        {/* Prize Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Prize Amount (USDC)
          </label>
          <input
            type="number"
            placeholder="500"
            value={formData.prizeAmount}
            onChange={(e) => setFormData({ ...formData, prizeAmount: e.target.value })}
            className="w-full px-4 py-3 bg-dark-card border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Prediction Deadline
          </label>
          <input
            type="datetime-local"
            value={formData.deadline}
            onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
            className="w-full px-4 py-3 bg-dark-card border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        {/* Info Card */}
        <div className="glass-card p-4 border-l-4 border-primary">
          <p className="text-sm text-gray-300">
            💡 <span className="font-semibold">Note:</span> Prize pool will be locked in the smart contract when you create this prediction.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full btn-primary"
        >
          Create & Lock Funds
        </button>
      </form>
    </div>
  );
}
