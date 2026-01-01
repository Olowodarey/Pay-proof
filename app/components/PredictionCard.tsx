"use client";

interface PredictionCardProps {
  event: string;
  team1: string;
  team2: string;
  prizePool: string;
  participants: number;
  timeRemaining: string;
  isLive?: boolean;
}

export default function PredictionCard({
  event,
  team1,
  team2,
  prizePool,
  participants,
  timeRemaining,
  isLive = false,
}: PredictionCardProps) {
  return (
    <div className="glass-card p-5 mb-4 hover:bg-white/5 transition-all">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs text-gray-400">{event}</span>
        {isLive && (
          <span className="flex items-center gap-1 text-xs text-red-400">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
            Live
          </span>
        )}
      </div>

      {/* Teams/Match */}
      <h3 className="text-white font-semibold text-lg mb-4">
        {team1} <span className="text-gray-500">vs</span> {team2}
      </h3>

      {/* Prediction Buttons */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <button className="bg-dark-card hover:bg-primary hover:text-white px-3 py-3 rounded-lg transition-colors font-semibold text-sm border border-white/10 hover:border-primary">
          {team1}
        </button>
        <button className="bg-dark-card hover:bg-primary hover:text-white px-3 py-3 rounded-lg transition-colors font-semibold text-sm border border-white/10 hover:border-primary">
          Draw
        </button>
        <button className="bg-dark-card hover:bg-primary hover:text-white px-3 py-3 rounded-lg transition-colors font-semibold text-sm border border-white/10 hover:border-primary">
          {team2}
        </button>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-3 border-t border-white/10">
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            🏆 <span className="text-white font-semibold">{prizePool}</span>
          </span>
          <span className="flex items-center gap-1">
            👥 <span>{participants}</span>
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          ⏰ <span>{timeRemaining}</span>
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full mt-4 bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-all hover:scale-[1.02]">
        Predict Now →
      </button>
    </div>
  );
}
