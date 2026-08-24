import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Copy, 
  Download, 
  FileText, 
  Sparkles, 
  ChevronLeft, 
  Terminal, 
  ExternalLink,
  Layers,
  Video,
  User,
  Globe
} from 'lucide-react';
import { useWorkshop } from '../../context/WorkshopContext';
import { 
  generateAvatarPrompt, 
  generateVideoPrompt, 
  generatePortfolioPrompt, 
  generateAllPromptsBundle 
} from '../../utils/promptGenerators';
import ProfileQuickBar from '../profile/ProfileQuickBar';

export default function Step04Summary() {
  const { 
    profile, 
    avatarConfig, 
    negativePrompts, 
    videoConfig, 
    portfolioConfig, 
    setCurrentStep, 
    triggerToast,
    exportSessionJSON 
  } = useWorkshop();

  const [copiedSection, setCopiedSection] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const avatarPrompt = generateAvatarPrompt(profile, avatarConfig, negativePrompts);
  const videoPrompt = generateVideoPrompt(profile, avatarConfig, videoConfig);
  const portfolioPrompt = generatePortfolioPrompt(profile, avatarConfig, videoConfig, portfolioConfig);
  const fullBundleText = generateAllPromptsBundle(profile, avatarConfig, videoConfig, portfolioConfig, negativePrompts);

  const handleCopySingle = async (key, text, title) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSection(key);
      triggerToast(`Copied ${title} to clipboard!`, 'success');
      setTimeout(() => setCopiedSection(null), 2000);
    } catch (e) {
      triggerToast('Failed to copy to clipboard', 'error');
    }
  };

  const handleCopyAll = async () => {
    try {
      await navigator.clipboard.writeText(fullBundleText);
      setCopiedAll(true);
      triggerToast('Copied ALL 3 workshop prompts in sequence!', 'success');
      setTimeout(() => setCopiedAll(false), 2500);
    } catch (e) {
      triggerToast('Failed to copy full bundle', 'error');
    }
  };

  const downloadMarkdownFile = () => {
    const blob = new Blob([fullBundleText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-identity-${(profile.fullName || 'student').toLowerCase().replace(/\s+/g, '-')}-bundle.md`;
    a.click();
    URL.revokeObjectURL(url);
    triggerToast('Downloaded complete workshop Markdown bundle!', 'success');
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <ProfileQuickBar />

      {/* Hero Cockpit Title & Master Copy Bar */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 122, 0, 0.12) 0%, rgba(20, 20, 20, 0.9) 100%)',
        border: '1px solid rgba(255, 122, 0, 0.3)',
        borderRadius: '24px',
        padding: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '16px',
            background: '#FF7A00',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0B0B0B',
            boxShadow: '0 0 25px rgba(255, 122, 0, 0.5)'
          }}>
            <Sparkles size={28} strokeWidth={2.5} />
          </div>
          <div>
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#FF7A00', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Master Output • 3-Hour AI Workshop Deliverables
            </span>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#FFFFFF', marginTop: '2px' }}>
              Your Complete AI Identity Suite
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '6px', fontSize: '13px', color: '#A0A0A0' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} color="#10b981" /> 01 Avatar Prompt Ready
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} color="#10b981" /> 02 Video Script Ready
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} color="#10b981" /> 03 Portfolio Spec Ready
              </span>
            </div>
          </div>
        </div>

        {/* Master Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={downloadMarkdownFile}
            className="btn btn-secondary"
            style={{ padding: '12px 18px', fontSize: '14px' }}
          >
            <Download size={16} />
            Download .MD Bundle
          </button>

          <button
            type="button"
            onClick={handleCopyAll}
            className="btn btn-primary"
            style={{
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: '800',
              background: copiedAll ? '#10b981' : '#FF7A00',
              color: copiedAll ? '#FFFFFF' : '#0B0B0B',
              boxShadow: copiedAll ? '0 0 20px rgba(16, 185, 129, 0.5)' : '0 4px 25px rgba(255, 122, 0, 0.4)'
            }}
          >
            {copiedAll ? <CheckCircle2 size={18} /> : <Copy size={18} />}
            {copiedAll ? 'ALL PROMPTS COPIED!' : 'COPY ALL PROMPTS'}
          </button>
        </div>
      </div>

      {/* 3 Sequential Master Output Panels */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* PANEL 01: AVATAR PROMPT */}
        <div style={{
          background: '#131313',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '18px 24px',
            background: '#181818',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: '700',
                padding: '4px 8px',
                borderRadius: '6px',
                background: '#FF7A00',
                color: '#0B0B0B'
              }}>
                01
              </span>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#FFFFFF' }}>
                  GEMINI AVATAR IMAGE PROMPT
                </h3>
                <span style={{ fontSize: '11.5px', color: '#888' }}>
                  Style: {avatarConfig.visualStyle} • Pose: {avatarConfig.pose?.split('(')[0]} • Skin: {avatarConfig.skinTone}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="btn btn-sm btn-outline"
              >
                Modify Stage 01
              </button>
              <button
                type="button"
                onClick={() => handleCopySingle('avatar', avatarPrompt, '01 Avatar Prompt')}
                className="btn btn-sm btn-primary"
                style={{
                  minWidth: '130px',
                  background: copiedSection === 'avatar' ? '#10b981' : '#FF7A00',
                  color: copiedSection === 'avatar' ? '#FFFFFF' : '#0B0B0B'
                }}
              >
                {copiedSection === 'avatar' ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                {copiedSection === 'avatar' ? 'Copied!' : 'Copy 01 Avatar'}
              </button>
            </div>
          </div>

          <div style={{ padding: '20px 24px', background: '#0e0e0e' }}>
            <pre style={{
              margin: 0,
              color: '#D4D4D4',
              fontFamily: 'var(--font-mono)',
              fontSize: '12.5px',
              lineHeight: '1.65',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              maxHeight: '260px',
              overflowY: 'auto'
            }}>
              {avatarPrompt}
            </pre>
          </div>
        </div>

        {/* PANEL 02: VIDEO PROMPT */}
        <div style={{
          background: '#131313',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '18px 24px',
            background: '#181818',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: '700',
                padding: '4px 8px',
                borderRadius: '6px',
                background: '#FF7A00',
                color: '#0B0B0B'
              }}>
                02
              </span>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#FFFFFF' }}>
                  8-SECOND INTRO VIDEO GENERATION PROMPT
                </h3>
                <span style={{ fontSize: '11.5px', color: '#888' }}>
                  Single Take • Framing: {videoConfig.framing?.split('(')[0]} • Motion: {videoConfig.cameraMovement?.split('(')[0]}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="btn btn-sm btn-outline"
              >
                Modify Stage 02
              </button>
              <button
                type="button"
                onClick={() => handleCopySingle('video', videoPrompt, '02 Video Prompt')}
                className="btn btn-sm btn-primary"
                style={{
                  minWidth: '130px',
                  background: copiedSection === 'video' ? '#10b981' : '#FF7A00',
                  color: copiedSection === 'video' ? '#FFFFFF' : '#0B0B0B'
                }}
              >
                {copiedSection === 'video' ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                {copiedSection === 'video' ? 'Copied!' : 'Copy 02 Video'}
              </button>
            </div>
          </div>

          <div style={{ padding: '20px 24px', background: '#0e0e0e' }}>
            <pre style={{
              margin: 0,
              color: '#D4D4D4',
              fontFamily: 'var(--font-mono)',
              fontSize: '12.5px',
              lineHeight: '1.65',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              maxHeight: '260px',
              overflowY: 'auto'
            }}>
              {videoPrompt}
            </pre>
          </div>
        </div>

        {/* PANEL 03: PORTFOLIO SPECIFICATION */}
        <div style={{
          background: '#131313',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '18px 24px',
            background: '#181818',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: '700',
                padding: '4px 8px',
                borderRadius: '6px',
                background: '#FF7A00',
                color: '#0B0B0B'
              }}>
                03
              </span>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#FFFFFF' }}>
                  ANTIGRAVITY / STITCH PORTFOLIO SPECIFICATION
                </h3>
                <span style={{ fontSize: '11.5px', color: '#888' }}>
                  Design Style: {portfolioConfig.selectedStyleName} • Sections: {portfolioConfig.sections?.length} active • Palette: {portfolioConfig.selectedPresetId}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="btn btn-sm btn-outline"
              >
                Modify Stage 03
              </button>
              <button
                type="button"
                onClick={() => handleCopySingle('portfolio', portfolioPrompt, '03 Portfolio Spec')}
                className="btn btn-sm btn-primary"
                style={{
                  minWidth: '130px',
                  background: copiedSection === 'portfolio' ? '#10b981' : '#FF7A00',
                  color: copiedSection === 'portfolio' ? '#FFFFFF' : '#0B0B0B'
                }}
              >
                {copiedSection === 'portfolio' ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                {copiedSection === 'portfolio' ? 'Copied!' : 'Copy 03 Spec'}
              </button>
            </div>
          </div>

          <div style={{ padding: '20px 24px', background: '#0e0e0e' }}>
            <pre style={{
              margin: 0,
              color: '#D4D4D4',
              fontFamily: 'var(--font-mono)',
              fontSize: '12.5px',
              lineHeight: '1.65',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              maxHeight: '280px',
              overflowY: 'auto'
            }}>
              {portfolioPrompt}
            </pre>
          </div>
        </div>
      </div>

      {/* Workshop Next Steps & Quick Navigation Footer */}
      <div style={{
        background: '#161616',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <button
          type="button"
          onClick={() => setCurrentStep(3)}
          className="btn btn-secondary"
        >
          <ChevronLeft size={16} /> Back to 03 Portfolio
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            onClick={exportSessionJSON}
            className="btn btn-outline"
          >
            <Download size={14} /> Backup Session JSON
          </button>
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className="btn btn-primary"
          >
            Start Over / Refine Identity
          </button>
        </div>
      </div>
    </div>
  );
}
