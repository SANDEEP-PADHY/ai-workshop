import React from 'react';
import { User, Edit3, Sparkles } from 'lucide-react';
import { useWorkshop } from '../../context/WorkshopContext';

export default function ProfileQuickBar() {
  const { profile, setIsProfileModalOpen } = useWorkshop();

  return (
    <div style={{
      background: 'rgba(21, 21, 21, 0.75)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '16px',
      padding: '12px 18px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '220px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '10px',
          background: 'rgba(255, 122, 0, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FF7A00'
        }}>
          <User size={16} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: '700', color: '#F5F5F5' }}>
              {profile.fullName || 'Student Persona'}
            </span>
            <span style={{ fontSize: '11px', color: '#FF7A00', fontFamily: 'var(--font-mono)', fontWeight: '600' }}>
              {profile.age ? `${profile.age} yrs` : ''}
            </span>
          </div>
          <p style={{ fontSize: '11.5px', color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '400px' }}>
            {profile.role || 'AI Workshop Creator'} {profile.school ? `• ${profile.school}` : ''}
          </p>
        </div>
      </div>

      {/* Skills quick preview */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
        {profile.skills?.slice(0, 4).map((skill, idx) => (
          <span
            key={idx}
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              padding: '3px 8px',
              borderRadius: '6px',
              background: '#1c1c1c',
              border: '1px solid rgba(255,255,255,0.06)',
              color: '#bbb'
            }}
          >
            {skill}
          </span>
        ))}
        {profile.skills?.length > 4 && (
          <span style={{ fontSize: '11px', color: '#777', fontFamily: 'var(--font-mono)' }}>
            +{profile.skills.length - 4} more
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsProfileModalOpen(true)}
          className="btn btn-sm btn-outline"
          style={{
            marginLeft: '8px',
            padding: '5px 10px',
            fontSize: '11px',
            borderColor: 'rgba(255, 122, 0, 0.3)',
            color: '#FF7A00'
          }}
        >
          <Edit3 size={12} />
          Edit Identity
        </button>
      </div>
    </div>
  );
}
