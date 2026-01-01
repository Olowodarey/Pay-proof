"use client";
import { useEffect, useState } from "react";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import AppLayout from "./components/AppLayout";
import Home from "./views/Home";
import Leaderboards from "./views/Leaderboards";
import CreatePrediction from "./views/CreatePrediction";
import Profile from "./components/profile";

export default function Page() {
  const { setMiniAppReady, isMiniAppReady } = useMiniKit();
  const [currentView, setCurrentView] = useState<'home' | 'leaderboards' | 'create' | 'profile'>('home');

  useEffect(() => {
    if (!isMiniAppReady) {
      setMiniAppReady();
    }
  }, [setMiniAppReady, isMiniAppReady]);

  return (
    <AppLayout currentView={currentView} onNavigate={setCurrentView}>
      {currentView === 'home' && <Home />}
      {currentView === 'leaderboards' && <Leaderboards />}
      {currentView === 'create' && <CreatePrediction />}
      {currentView === 'profile' && <Profile />}
    </AppLayout>
  );
}
