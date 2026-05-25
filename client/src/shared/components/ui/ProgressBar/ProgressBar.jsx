/**
 * ProgressBar (Stepper)
 *
 * A reusable, theme-aware stepper component.
 *
 * Props:
 *   steps        — array of { label: string }
 *   currentStep  — 1-based index of the active step
 *   onStepClick  — optional: (stepNumber) => void  (to make steps clickable)
 *   className    — optional extra class for the wrapper
 *
 * Usage:
 *   <ProgressBar
 *     steps={[{ label: "Property" }, { label: "Tenants" }, { label: "Lease" }, { label: "Review" }]}
 *     currentStep={2}
 *   />
 */

const gold = {
  50:  "#FFFBEB",
  100: "#FEF3C7",
  200: "#FDE68A",
  300: "#FCD34D",
  400: "#FBBF24",
  500: "#e4a80f",
  600: "#e4ae27",
  700: "#d8a641",
};

const progressStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

  /* ── Stepper container ── */
  .pb-stepper {
    background: #ffffff;
    border-radius: 20px;
    padding: 24px 40px;
    width: 100%;
    box-shadow: 0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04);
    position: relative;
    font-family: 'DM Sans', sans-serif;
  }

  /* ── Track ── */
  .pb-track {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .pb-line-bg {
    position: absolute;
    top: 22px;
    left: 22px;
    right: 22px;
    height: 2px;
    background: #E5E7EB;
    border-radius: 2px;
  }

  .pb-line-fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, ${gold[500]}, ${gold[400]});
    border-radius: 2px;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* ── Step node ── */
  .pb-step {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .pb-node {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    cursor: default;
  }

  .pb-node--clickable { cursor: pointer; }

  .pb-node--inactive {
    background: #fff;
    border: 2px solid #D1D5DB;
    color: #9CA3AF;
  }

  .pb-node--active {
    background: linear-gradient(135deg, ${gold[500]}, ${gold[400]});
    border: none;
    color: #fff;
    box-shadow: 0 0 0 4px ${gold[100]}, 0 4px 12px rgba(212,160,23,0.35);
    font-weight: 600;
  }

  .pb-node--active::after {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 1.5px solid ${gold[300]};
    opacity: 0.6;
    animation: pb-pulse 2s ease-in-out infinite;
  }

  @keyframes pb-pulse {
    0%, 100% { transform: scale(1);    opacity: 0.6;  }
    50%       { transform: scale(1.08); opacity: 0.25; }
  }

  .pb-node--done {
    background: linear-gradient(135deg, ${gold[500]}, ${gold[400]});
    border: none;
    color: #fff;
    box-shadow: 0 2px 8px rgba(212,160,23,0.2);
  }

  /* Caret above active node */
  .pb-caret {
    position: absolute;
    top: -22px;
    left: 50%;
    transform: translateX(-50%);
    color: ${gold[500]};
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
  }

  /* Step label */
  .pb-label {
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.05em;
    color: #9CA3AF;
    text-align: center;
    white-space: nowrap;
    transition: color 0.3s;
    user-select: none;
  }
  .pb-label--active { color: ${gold[600]}; font-weight: 500; }
  .pb-label--done   { color: ${gold[500]}; }

  /* Checkmark */
  .pb-check { width: 18px; height: 18px; }
`;

function CheckIcon() {
  return (
    <svg className="pb-check" viewBox="0 0 18 18" fill="none">
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

export default function ProgressBar({
  steps = [],
  currentStep = 1,
  onStepClick,
  className = "",
}) {
  const fillPercent =
    steps.length > 1
      ? (Math.max(0, currentStep - 1) / (steps.length - 1)) * 100
      : 0;

  return (
    <>
      <style>{progressStyles}</style>

      <div className={`pb-stepper ${className}`}>
        <div className="pb-track">

          {/* Progress line */}
          <div className="pb-line-bg">
            <div className="pb-line-fill" style={{ width: `${fillPercent}%` }} />
          </div>

          {/* Steps */}
          {steps.map((step, i) => {
            const num      = i + 1;
            const isDone   = num < currentStep;
            const isActive = num === currentStep;
            const nodeState = isDone ? "done" : isActive ? "active" : "inactive";
            const labelState = isDone ? "done" : isActive ? "active" : "";
            const clickable = !!onStepClick;

            return (
              <div
                className="pb-step"
                key={i}
                onClick={() => clickable && onStepClick(num)}
              >
                {isActive && <span className="pb-caret">›</span>}

                <div
                  className={`pb-node pb-node--${nodeState}${clickable ? " pb-node--clickable" : ""}`}
                  aria-current={isActive ? "step" : undefined}
                  title={step.label}
                >
                  {isDone ? <CheckIcon /> : num}
                </div>

                <span className={`pb-label pb-label--${labelState || "inactive"}`}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}