import React from 'react';

export default function Tooltip({ text, position = 'top' }) {
  if (!text) return null;
  
  return (
    <span className="tooltip-container">
      <button 
        type="button" 
        className="tooltip-trigger" 
        title="More info"
        aria-label="More information"
        tabIndex={-1}
      >
        i
      </button>
      <span className={`tooltip-box ${position === 'bottom' ? 'bottom' : ''}`}>
        {text}
      </span>
    </span>
  );
}
