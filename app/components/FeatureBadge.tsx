"use client";

interface FeatureBadgeProps {
  icon: string;
  text: string;
}

export default function FeatureBadge({ icon, text }: FeatureBadgeProps) {
  return (
    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-gray-300 hover:bg-white/10 transition-colors">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}
