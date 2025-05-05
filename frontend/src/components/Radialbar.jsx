import React from 'react';

const RadialProgressBar = ({ percentage = 75, size = 120, strokeWidth = 10 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="radial-progress-bar" style={{ width: size, height: size }}>
      <svg
        className="radial-progress-svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e9c46a" />
            <stop offset="100%" stopColor="#212121" />
          </linearGradient>
        </defs>

        <circle
          className="radial-progress-bg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />

        <circle
          className="radial-progress-fg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transform: `rotate(-90deg)`,
            transformOrigin: '50% 50%',
            transition: 'stroke-dashoffset 0.5s ease',
          }}
        />
      </svg>
      <div className="radial-progress-text">
        <div>Percent</div>
        <div>{percentage}</div>
      </div>
    </div>
  );
};

export default RadialProgressBar;