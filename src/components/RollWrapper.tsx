"use client";

import { useState } from "react";

export default function RollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="absolute -right-6 flex w-[200vw] -translate-y-full rotate-6 items-center overflow-hidden border-y-4 border-double py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="grid w-full animate-roll grid-flow-col justify-items-center will-change-transform"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
