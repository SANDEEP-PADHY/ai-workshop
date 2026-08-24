import React, { useState } from 'react';
import { 
  Video, 
  Mic, 
  Camera, 
  Smile, 
  HandMetal, 
  Sun, 
  Film, 
  ChevronRight, 
  ChevronLeft, 
  ShieldAlert, 
  Check, 
  Volume2,
  Sparkles
} from 'lucide-react';
import { useWorkshop } from '../../context/WorkshopContext';
import { VIDEO_PRESETS } from '../../types/presets';
import { generateVideoPrompt } from '../../utils/promptGenerators';
import SelectableChip from '../common/SelectableChip';
import PromptOutput from '../common/PromptOutput';
import ProfileQuickBar from '../profile/ProfileQuickBar';
import Tooltip from '../common/Tooltip';

export default function Step02Video() {
  const { 
    profile, 
    avatarConfig, 
    videoConfig, 
    setVideoConfig, 
    setCurrentStep,
    triggerToast
  } = useWorkshop();

  const updateVideo = (key, value) => {
    setVideoConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const toggleAvoidance = (avoidItem) => {
    setVideoConfig(prev => {
      const current = prev.avoidances || [];
      if (current.includes(avoidItem)) {
        return { ...prev, avoidances: current.filter(a => a !== avoidItem) };
      } else {
        return { ...prev, avoidances: [...current, avoidItem] };
      }
    });
  };

  // Compile real-time prompt text
  const currentPromptText = generateVideoPrompt(profile, avatarConfig, videoConfig);

  // Script preview line
  const name = profile.fullName || 'Alex Rivera';
  const age = profile.age || '19';
  let phrase = '';
  if (videoConfig.endingType === 'skill') {
    phrase = `I'm excellent at ${videoConfig.selectedSkill || profile.skills?.[0] || 'AI engineering and creative design'}.`;
  } else if (videoConfig.endingType === 'hobby') {
    phrase = `my hobby is ${videoConfig.selectedHobby || profile.hobbies?.[0] || 'building interactive web experiments'}.`;
  } else {
    phrase = `I'm passionate about ${videoConfig.selectedPassion || profile.careerInterests?.[0] || 'designing the future of intelligent interfaces'}.`;
  }
  const fullSentence = `Hi, my name is ${name}, I'm ${age} years old, and ${phrase}`;

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Persona quick bar */}
      <ProfileQuickBar />

      {/* Main Studio 2-Column Workstation Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
        gap: '24px',
        alignItems: 'start'
      }}>
        {/* LEFT COLUMN: 8-Second Video Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* SCRIPT BUILDER CARD */}
          <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(255,122,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FF7A00'
              }}>
                <Mic size={18} />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '800' }}>
                  8-Second Spoken Line Construction
                </h3>
                <p style={{ fontSize: '12px', color: '#888' }}>
                  Choose how your AI persona concludes their single-shot intro sentence.
                </p>
              </div>
            </div>

            {/* Ending Selection Tabs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              {[
                { id: 'skill', label: "I'm excellent at...", desc: 'Focus on core technical proficiency' },
                { id: 'hobby', label: "My hobby is...", desc: 'Focus on creative passion & leisure' },
                { id: 'passion', label: "I'm passionate about...", desc: 'Focus on visionary aspirations' }
              ].map(opt => {
                const isSelected = videoConfig.endingType === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => updateVideo('endingType', opt.id)}
                    style={{
                      padding: '12px',
                      background: isSelected ? 'rgba(255, 122, 0, 0.12)' : '#161616',
                      border: isSelected ? '1.5px solid #FF7A00' : '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      transition: 'all 150ms ease'
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: '700', color: isSelected ? '#FFFFFF' : '#CCC' }}>
                      {opt.label}
                    </span>
                    <span style={{ fontSize: '10.5px', color: '#888' }}>
                      {opt.desc}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Spoken target input based on type */}
            {videoConfig.endingType === 'skill' && (
              <div className="form-group animate-fade-in">
                <label className="form-label">Selected Skill to Highlight</label>
                <input
                  type="text"
                  className="form-input"
                  value={videoConfig.selectedSkill || ''}
                  onChange={(e) => updateVideo('selectedSkill', e.target.value)}
                  placeholder="e.g. AI engineering, WebGL shaders, and robotics"
                />
              </div>
            )}

            {videoConfig.endingType === 'hobby' && (
              <div className="form-group animate-fade-in">
                <label className="form-label">Selected Hobby to Highlight</label>
                <input
                  type="text"
                  className="form-input"
                  value={videoConfig.selectedHobby || ''}
                  onChange={(e) => updateVideo('selectedHobby', e.target.value)}
                  placeholder="e.g. generative electronic music and street photography"
                />
              </div>
            )}

            {videoConfig.endingType === 'passion' && (
              <div className="form-group animate-fade-in">
                <label className="form-label">Selected Passion to Highlight</label>
                <input
                  type="text"
                  className="form-input"
                  value={videoConfig.selectedPassion || ''}
                  onChange={(e) => updateVideo('selectedPassion', e.target.value)}
                  placeholder="e.g. designing the next generation of intelligent tools"
                />
              </div>
            )}

            {/* Audio Script Live Teleprompter Box */}
            <div style={{
              background: '#0d0d0d',
              border: '1px solid rgba(255, 122, 0, 0.25)',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#FF7A00', textTransform: 'uppercase', fontWeight: '700' }}>
                  Spoken Script Teleprompter (8.0s Timing)
                </span>
                <span style={{ fontSize: '11px', color: '#777' }}>~16 words / 120 WPM</span>
              </div>
              <p style={{ fontSize: '14.5px', color: '#FFFFFF', fontWeight: '500', fontStyle: 'italic', lineHeight: '1.5' }}>
                "{fullSentence}"
              </p>
            </div>
          </div>

          {/* KINEMATICS & CAMERA PARAMETERS */}
          <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Camera Motion & Framing</h3>
              <p style={{ fontSize: '12px', color: '#888' }}>Configure the camera behavior and character body framing.</p>
            </div>

            <div className="form-group">
              <label className="form-label">
                Camera Framing <Tooltip text="Waist-up is recommended so natural speaking gestures remain visible." />
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {VIDEO_PRESETS.framingOptions.map(f => (
                  <SelectableChip
                    key={f}
                    label={f}
                    selected={videoConfig.framing === f}
                    onClick={() => updateVideo('framing', f)}
                  />
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Camera Movement</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {VIDEO_PRESETS.cameraMovements.map(cam => (
                  <SelectableChip
                    key={cam}
                    label={cam}
                    selected={videoConfig.cameraMovement === cam}
                    onClick={() => updateVideo('cameraMovement', cam)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* EXPRESSION & GESTURE */}
          <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Facial Expression & Gestures</h3>
              <p style={{ fontSize: '12px', color: '#888' }}>Control the energy, expression, and body language during the speech.</p>
            </div>

            <div className="form-group">
              <label className="form-label">Facial Expression</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {VIDEO_PRESETS.expressions.map(exp => (
                  <SelectableChip
                    key={exp}
                    label={exp}
                    selected={videoConfig.expression === exp}
                    onClick={() => updateVideo('expression', exp)}
                  />
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Gesture & Speaking Body Language</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {VIDEO_PRESETS.gestures.map(g => (
                  <SelectableChip
                    key={g}
                    label={g}
                    selected={videoConfig.gesture === g}
                    onClick={() => updateVideo('gesture', g)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ENVIRONMENT, LIGHTING & STYLE */}
          <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Environment, Lighting & Grade</h3>
              <p style={{ fontSize: '12px', color: '#888' }}>Match the video setting with your generated avatar reference.</p>
            </div>

            <div className="form-group">
              <label className="form-label">Video Style & Format</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {VIDEO_PRESETS.videoStyles.map(s => (
                  <SelectableChip
                    key={s}
                    label={s}
                    selected={videoConfig.videoStyle === s}
                    onClick={() => updateVideo('videoStyle', s)}
                  />
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Environment Backdrop</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {VIDEO_PRESETS.environments.map(e => (
                  <SelectableChip
                    key={e}
                    label={e}
                    selected={videoConfig.environment === e}
                    onClick={() => updateVideo('environment', e)}
                  />
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Lighting Style</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {VIDEO_PRESETS.lightingStyles.map(l => (
                  <SelectableChip
                    key={l}
                    label={l}
                    selected={videoConfig.lighting === l}
                    onClick={() => updateVideo('lighting', l)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CONTINUITY & NEGATIVE RESTRICTIONS */}
          <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Negative / Avoid Restrictions</h3>
              <p style={{ fontSize: '12px', color: '#888' }}>Enforce single continuous shot rules and zero identity drift.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {VIDEO_PRESETS.avoidances.map((avoid, idx) => {
                const isSelected = (videoConfig.avoidances || []).includes(avoid);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleAvoidance(avoid)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 14px',
                      background: isSelected ? 'rgba(255, 122, 0, 0.12)' : '#161616',
                      border: isSelected ? '1px solid #FF7A00' : '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 150ms ease'
                    }}
                  >
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '4px',
                      background: isSelected ? '#FF7A00' : '#222',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0B0B0B',
                      flexShrink: 0
                    }}>
                      {isSelected && <Check size={13} strokeWidth={3} />}
                    </div>
                    <span style={{ fontSize: '13px', color: isSelected ? '#FFF' : '#AAA' }}>
                      {avoid}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="btn btn-secondary"
            >
              <ChevronLeft size={16} /> Back to 01 Avatar
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep(3)}
              className="btn btn-lg btn-primary"
            >
              Continue to 03 Portfolio Builder
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Live Video Prompt Engine */}
        <div style={{ position: 'sticky', top: '130px' }}>
          <PromptOutput
            title="8-SECOND INTRO VIDEO PROMPT"
            subtitle="Stage 02 • Single Continuous Shot & Audio Sync"
            promptText={currentPromptText}
            stepKey="video"
            onReset={() => {}}
            onRegenerate={() => {
              triggerToast('Re-synthesized Video prompt from active parameters', 'success');
            }}
          />
        </div>
      </div>
    </div>
  );
}
