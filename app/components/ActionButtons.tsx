"use client";

export default function ActionButtons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mb-8">
      {/* Create Prediction Button */}
      <div className="glass-card p-6 text-center hover:bg-white/10 transition-all cursor-pointer group">
        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
          <span className="text-2xl">➕</span>
        </div>
        <h3 className="text-white font-semibold text-lg mb-1">Create Prediction</h3>
        <p className="text-gray-400 text-sm">Set up a new prediction event</p>
      </div>

      {/* Join Competition Button */}
      <div className="glass-card p-6 text-center hover:bg-white/10 transition-all cursor-pointer group">
        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
          <span className="text-2xl">🏆</span>
        </div>
        <h3 className="text-white font-semibold text-lg mb-1">Join Competition</h3>
        <p className="text-gray-400 text-sm">Compete on leaderboards</p>
      </div>
    </div>
  );
}
