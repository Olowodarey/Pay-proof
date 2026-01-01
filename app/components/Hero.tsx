"use client";

import FeatureBadge from "./FeatureBadge";

export default function Hero() {
  return (
    <section className="px-4 py-8 md:py-12 text-center">
      {/* Built on Base badge */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-primary text-sm">⚡</span>
          <span className="text-primary text-sm font-medium">Built on Base</span>
        </div>
      </div>

      {/* Main title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        Fair, On-Chain Prediction
        <br />
        Giveaways & Leaderboards
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
        Predict match outcomes, climb leaderboards, win
        <br />
        creator-funded rewards.
      </p>

      {/* Feature badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
        <FeatureBadge icon="🚫" text="No Betting" />
        <FeatureBadge icon="🎯" text="No Staking" />
        <FeatureBadge icon="🆓" text="Free to Predict" />
        <FeatureBadge icon="⚡" text="Instant Rewards" />
      </div>
    </section>
  );
}
