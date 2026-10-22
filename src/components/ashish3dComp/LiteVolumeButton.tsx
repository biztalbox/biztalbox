"use client";

import { useState } from "react";
import {
  isLiteSfxMuted,
  toggleLiteSfxMuted,
  unlockLiteSfx,
} from "@/app/_lite/_ashish/sfx";

/**
 * Fixed volume on/off control for the lite homepage — sits just above WhatsApp.
 */
export default function LiteVolumeButton() {
  const [muted, setMuted] = useState(() => isLiteSfxMuted());

  const handleClick = () => {
    unlockLiteSfx();
    setMuted(toggleLiteSfxMuted());
  };

  return (
    <div className="lite-volume-wrapper">
      <button
        type="button"
        className="lite-volume-btn"
        aria-label={muted ? "Unmute sound" : "Mute sound"}
        aria-pressed={!muted}
        title={muted ? "Sound off" : "Sound on"}
        onClick={handleClick}
      >
        {muted ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M11 5L6 9H2v6h4l5 4V5z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23 9l-6 6M17 9l6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M11 5L6 9H2v6h4l5 4V5z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 8.5a5 5 0 010 7M19 5a9 9 0 010 14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
