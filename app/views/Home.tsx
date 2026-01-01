"use client";

import Hero from "../components/Hero";
import ActionButtons from "../components/ActionButtons";
import PredictionCard from "../components/PredictionCard";

export default function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <ActionButtons />
      
      {/* Active Predictions Section */}
      <div className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Active Predictions</h2>
          <button className="text-primary text-sm hover:underline">View All</button>
        </div>

        {/* Sample Prediction Cards */}
        <PredictionCard
          event="AFCON 2025 Qualifier"
          team1="Nigeria"
          team2="Ghana"
          prizePool="500 USDC"
          participants={234}
          timeRemaining="1d 23:59:56"
          isLive={true}
        />

        <PredictionCard
          event="Premier League Matchday 20"
          team1="Arsenal"
          team2="Man City"
          prizePool="1,000 USDC"
          participants={587}
          timeRemaining="4d 23:59:46"
        />
      </div>
    </div>
  );
}
