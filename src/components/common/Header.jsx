import React from 'react';
import { User, Sparkles, Download, RotateCcw, CheckCircle, ChevronRight, Layers, FileCode } from 'lucide-react';
import { useWorkshop } from '../../context/WorkshopContext';

export default function Header() {
  const { 
    currentStep, 
    setCurrentStep, 
    setIsProfileModalOpen, 
    profile, 
    resetToDefaults, 
    exportSessionJSON 
  } = useWorkshop();

  const steps = [
    { num: 1, id: '01', title: 'AVATAR', sub: 'Gemini Image' },
    { num: 2, id: '02', title: 'VIDEO', sub: '8s Single Shot' },
    { num: 3, id: '03', title: 'PORTFOLIO', sub: 'UI Spec' },
    { num: 4, id: '04', title: 'SUMMARY', sub: 'Master Cockpit' }
  ];

  // Calculate profile completion percentage
  const calculateProfileCompletion = () => {
    let score = 0;
    const total = 7;
    if (profile.fullName) score++;
    if (profile.age) score++;
    if (profile.role) score++;
    if (profile.shortBio) score++;
    if (profile.skills && profile.skills.length > 0) score++;
    if (profile.projects && profile.projects.length > 0) score++;
    if (profile.socials && (profile.socials.github || profile.socials.email)) score++;
    return Math.round((score / total) * 100);
  };

  const profilePct = calculateProfileCompletion();
  const stepProgressPct = (currentStep / 4) * 100;

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 900,
      background: 'rgba(11, 11, 11, 0.88)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      transition: 'all 200ms ease'
    }}>
      {/* Top Main Nav */}
      <div style={{
        maxWidth: '1560px',
        margin: '0 auto',
        padding: '14px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Brand Logo & Workstation Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #FF7A00 0%, #d95800 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(255, 122, 0, 0.35)'
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0B0B0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#0B0B0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#0B0B0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '17px', fontWeight: '800', letterSpacing: '-0.01em', color: '#F5F5F5' }}>
                AI IDENTITY BUILDER
              </h1>
              <span style={{
                fontSize: '10px',
                fontWeight: '700',
                fontFamily: 'var(--font-mono)',
                padding: '2px 7px',
                borderRadius: '6px',
                background: 'rgba(255, 122, 0, 0.15)',
                color: '#FF7A00',
                border: '1px solid rgba(255, 122, 0, 0.3)'
              }}>
                STUDIO v1.0
              </span>
            </div>
            <p style={{ fontSize: '11px', color: '#888', fontFamily: 'var(--font-mono)' }}>
              3-HOUR STUDENT AI WORKSHOP • PROMPT SYNTHESIS WORKSTATION
            </p>
          </div>
        </div>

        {/* Global Student Profile Badge Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            type="button"
            onClick={() => setIsProfileModalOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 16px',
              background: '#161616',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '14px',
              cursor: 'pointer',
              transition: 'all 150ms ease',
              textAlign: 'left'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FF7A00';
              e.currentTarget.style.background = '#1c1c1c';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.background = '#161616';
            }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              background: 'rgba(255, 122, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FF7A00',
              fontWeight: '700',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px'
            }}>
              <User size={16} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#F5F5F5' }}>
                  {profile.fullName || 'Student Profile'}
                </span>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: profilePct >= 80 ? '#10b981' : '#FF7A00'
                }} />
              </div>
              <span style={{ fontSize: '11px', color: '#888', fontFamily: 'var(--font-mono)' }}>
                About Me • {profilePct}% Filled
              </span>
            </div>
          </button>

          {/* Quick Export / Reset Actions */}
          <button
            type="button"
            onClick={exportSessionJSON}
            className="btn btn-sm btn-outline"
            title="Export full session as JSON"
          >
            <Download size={14} />
            <span style={{ display: 'none', md: 'inline' }}>Export</span>
          </button>

          <button
            type="button"
            onClick={resetToDefaults}
            className="btn btn-sm btn-outline"
            title="Reset workspace"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* 3-Step Breadcrumbs & Workflow Navigation */}
      <div style={{
        maxWidth: '1560px',
        margin: '0 auto',
        padding: '0 28px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          overflowX: 'auto',
          paddingBottom: '4px',
          width: '100%'
        }}>
          {steps.map((step, idx) => {
            const isActive = currentStep === step.num;
            const isDone = currentStep > step.num;

            return (
              <React.Fragment key={step.id}>
                <button
                  type="button"
                  onClick={() => setCurrentStep(step.num)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    background: isActive ? 'rgba(255, 122, 0, 0.14)' : isDone ? '#141414' : '#111111',
                    border: isActive ? '1px solid #FF7A00' : isDone ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.05)',
                    color: isActive ? '#FFFFFF' : isDone ? '#E5E5E5' : '#666666',
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                    flexShrink: 0
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '2px 6px',
                    borderRadius: '6px',
                    background: isActive ? '#FF7A00' : isDone ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    color: isActive ? '#0B0B0B' : isDone ? '#FFF' : '#666'
                  }}>
                    {step.id}
                  </span>
                  
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '13px', fontWeight: isActive ? '700' : '600', letterSpacing: '0.02em' }}>
                      {step.title}
                    </div>
                  </div>

                  {isDone && (
                    <CheckCircle size={14} color="#10b981" style={{ marginLeft: '4px' }} />
                  )}
                </button>

                {idx < steps.length - 1 && (
                  <ChevronRight size={14} color="#444" style={{ flexShrink: 0 }} />
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {/* Progress percentage line */}
      <div style={{ width: '100%', height: '2px', background: '#181818' }}>
        <div style={{
          width: `${stepProgressPct}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #FF7A00 0%, #ff9e3b 100%)',
          boxShadow: '0 0 8px #FF7A00',
          transition: 'width 300ms cubic-bezier(0.16, 1, 0.3, 1)'
        }} />
      </div>
    </header>
  );
}
