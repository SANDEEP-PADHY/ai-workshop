import React from 'react';
import { Check } from 'lucide-react';

export default function StyleCard({ styleItem, selected, onSelect }) {
  const isSelected = !!selected;

  return (
    <div
      onClick={onSelect}
      style={{
        background: '#161616',
        border: isSelected ? '2px solid #FF7A00' : '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '16px',
        cursor: 'pointer',
        transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        position: 'relative',
        boxShadow: isSelected ? '0 0 20px rgba(255, 122, 0, 0.25)' : 'none',
        userSelect: 'none'
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      {/* Header with Title & Badge */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
        <div>
          <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            {styleItem.name}
          </h4>
          <span style={{ fontSize: '11px', color: '#888', fontFamily: 'var(--font-mono)' }}>
            {styleItem.font}
          </span>
        </div>

        {isSelected ? (
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: '#FF7A00',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0B0B0B',
            boxShadow: '0 0 10px #FF7A00',
            flexShrink: 0
          }}>
            <Check size={14} strokeWidth={3} />
          </div>
        ) : (
          <span style={{
            fontSize: '10px',
            fontWeight: '700',
            fontFamily: 'var(--font-mono)',
            padding: '2px 7px',
            borderRadius: '6px',
            background: '#222',
            color: '#aaa'
          }}>
            {styleItem.badge}
          </span>
        )}
      </div>

      {/* Mini Visual Preview Mockup Box */}
      <div style={{
        height: '96px',
        borderRadius: styleItem.borderRadius || '8px',
        background: styleItem.previewBg,
        border: `${styleItem.borderWidth || '1px'} solid ${styleItem.previewBorder || 'rgba(255,255,255,0.1)'}`,
        boxShadow: styleItem.boxShadow || 'none',
        padding: '10px 12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Mock Title line & Dot */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{
            width: '45%',
            height: '6px',
            borderRadius: '3px',
            background: styleItem.previewText,
            opacity: 0.8
          }} />
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: styleItem.previewAccent
          }} />
        </div>

        {/* Mock Content Lines */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ width: '80%', height: '4px', borderRadius: '2px', background: styleItem.previewText, opacity: 0.4 }} />
          <div style={{ width: '60%', height: '4px', borderRadius: '2px', background: styleItem.previewText, opacity: 0.25 }} />
        </div>

        {/* Mock Buttons & Badge row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{
            padding: '2px 8px',
            borderRadius: styleItem.borderRadius || '4px',
            background: styleItem.previewAccent,
            color: styleItem.id === 'cyberpunk' || styleItem.id === 'retro' ? '#000' : '#fff',
            fontSize: '9px',
            fontWeight: '700',
            fontFamily: styleItem.font
          }}>
            Action
          </div>
          <div style={{
            width: '18px',
            height: '14px',
            borderRadius: styleItem.borderRadius || '3px',
            border: `1px solid ${styleItem.previewAccent}`,
            opacity: 0.7
          }} />
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: '11.5px', color: '#999', lineHeight: '1.45', minHeight: '34px' }}>
        {styleItem.desc}
      </p>
    </div>
  );
}
