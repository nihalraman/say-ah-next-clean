"use client";

interface Props {
  enabled: boolean;
  onToggle: (value: boolean) => void;
  /** Use the full card layout (WelcomeScreen). Default is compact inline. */
  variant?: "full" | "compact";
  /** Toggle label. Default is the voice-coach copy. */
  label?: string;
  /** Full-variant subtext shown when enabled. */
  subtextOn?: string;
  /** Full-variant subtext shown when disabled. */
  subtextOff?: string;
}

/**
 * Reusable pill toggle. `variant="full"` renders the card-style toggle from
 * WelcomeScreen; `variant="compact"` (default) renders a small inline version
 * for PreRepScreen and RepResultScreen. Defaults to the voice-coach copy so
 * existing call sites don't need to pass label/subtext explicitly.
 */
export function CoachToggle({
  enabled,
  onToggle,
  variant = "compact",
  label = "Voice coach",
  subtextOn = "Speaks cues while you hold the sound",
  subtextOff = "Silent — better loudness accuracy",
}: Props) {
  if (variant === "full") {
    return (
      <button
        className="coach-toggle-row"
        role="switch"
        aria-checked={enabled}
        onClick={() => onToggle(!enabled)}
      >
        <div className="coach-toggle-text">
          {label}
          <div className="coach-toggle-sub">
            {enabled ? subtextOn : subtextOff}
          </div>
        </div>
        <div className={`toggle-pill${enabled ? " toggle-pill-on" : ""}`}>
          <div className="toggle-pill-thumb" />
        </div>
      </button>
    );
  }

  return (
    <button
      className="coach-toggle-compact"
      role="switch"
      aria-checked={enabled}
      onClick={() => onToggle(!enabled)}
    >
      <span className="coach-toggle-compact-label">
        {label}: <strong>{enabled ? "on" : "off"}</strong>
      </span>
      <div className={`toggle-pill toggle-pill-sm${enabled ? " toggle-pill-on" : ""}`}>
        <div className="toggle-pill-thumb toggle-pill-thumb-sm" />
      </div>
    </button>
  );
}
