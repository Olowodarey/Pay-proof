"use client";

import { Wallet } from "@coinbase/onchainkit/wallet";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 md:px-6 py-3 bg-dark-lighter border-b border-white/10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-white font-bold text-sm">S</span>
        </div>
        <span className="text-white font-semibold text-lg">ScoreMint</span>
      </div>
      
      <Wallet />
    </header>
  );
}
