import React from 'react';

export default function SelectableChip({ 
  label, 
  selected, 
  onClick, 
  badge = null,
  size = 'md' 
}) {
  const isSelected = !!selected;

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: size === 'sm' ? '6px 12px' : '9px 16px',
        background: isSelected ? 'rgba(255, 122, 0, 0.12)' : '#161616',
        border: isSelected ? '1px solid #FF7A00' : '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        color: isSelected ? '#FFFFFF' : '#B0B0B0',
        fontSize: size === 'sm' ? '12px' : '13px',
        fontWeight: isSelected ? '600' : '500',
        cursor: 'pointer',
        transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        userSelect: 'none',
        outline: 'none',
        boxShadow: isSelected ? '0 0 12px rgba(255, 122, 0, 0.15)' : 'none',
        textAlign: 'left'
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
          e.currentTarget.style.background = '#1e1e1e';
          e.currentTarget.style.color = '#F5F5F5';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          e.currentTarget.style.background = '#161616';
          e.currentTarget.style.color = '#B0B0B0';
        }
      }}
    >
      {/* Active Orange Indicator Dot */}
      <span style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: isSelected ? '#FF7A00' : 'rgba(255, 255, 255, 0.2)',
        flexShrink: 0,
        boxShadow: isSelected ? '0 0 6px #FF7A00' : 'none',
        transition: 'all 150ms ease'
      }} />

      <span>{label}</span>

      {badge && (
        <span style={{
          fontSize: '10px',
          fontWeight: '700',
          padding: '2px 6px',
          borderRadius: '4px',
          background: isSelected ? '#FF7A00' : 'rgba(255, 255, 255, 0.1)',
          color: isSelected ? '#0B0B0B' : '#888',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {badge}
        </span>
      )}
    </button>
  );
}
