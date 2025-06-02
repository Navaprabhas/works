import React from "react";

export const SparklingText = () => (
  <div className="sparkling-text-container select-none pointer-events-none">
    <span
      className="relative text-white font-sans"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: "2rem",
        fontWeight: 600,
        letterSpacing: "0.02em",
      }}
    >
      prabhas
      {/* Sparkles */}
      <span className="sparkle" style={{ top: "-12px", left: "12px" }} />
      <span className="sparkle" style={{ top: "10px", left: "90px" }} />
      <span className="sparkle" style={{ top: "32px", left: "40px" }} />
      <span className="sparkle" style={{ top: "0px", left: "60px" }} />
      <span className="sparkle" style={{ top: "24px", left: "100px" }} />
    </span>
  </div>
);
