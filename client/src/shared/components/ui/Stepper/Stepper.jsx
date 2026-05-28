/* ═══════════════════════════════════════════════════════════════
   Shared UI — Stepper
   src/shared/components/ui/Stepper/Stepper.jsx

   Usage:
     import Stepper from "@/shared/components/ui/Stepper/Stepper";
     <Stepper currentStep={2} steps={[{ label: "Region" }, { label: "Details" }, { label: "Confirm" }]} />
═══════════════════════════════════════════════════════════════ */
import "./Stepper.css";

function CheckIcon() {
  return (
    <svg className="pmst-check" viewBox="0 0 18 18" fill="none">
      <path
        d="M4 9.5l3.5 3.5 6.5-7"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * @param {{ currentStep: number, steps: { label: string }[] }} props
 */
export default function Stepper({ currentStep, steps }) {
  const fillPercent =
    steps.length > 1
      ? (Math.max(0, currentStep - 1) / (steps.length - 1)) * 100
      : 0;

  return (
    <div className="pmst-stepper">
      <div className="pmst-track">
        <div className="pmst-line-bg">
          <div className="pmst-line-fill" style={{ width: `${fillPercent}%` }} />
        </div>

        {steps.map((step, i) => {
          const stepNum    = i + 1;
          const isDone     = stepNum < currentStep;
          const isActive   = stepNum === currentStep;
          const nodeClass  = isDone ? "done" : isActive ? "active" : "inactive";
          const labelClass = isDone ? "done" : isActive ? "active" : "";

          return (
            <div className="pmst-step" key={i}>
              {isActive && (
                <span className="pmst-caret" aria-hidden="true">›</span>
              )}
              <div className={`pmst-node ${nodeClass}`}>
                {isDone ? <CheckIcon /> : stepNum}
              </div>
              <span className={`pmst-label ${labelClass}`}>{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}