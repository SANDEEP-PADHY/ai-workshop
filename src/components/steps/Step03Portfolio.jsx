import React, { useState } from 'react';
import { 
  Globe, 
  Palette, 
  Layers, 
  Sliders, 
  Type, 
  Move, 
  Plus, 
  Trash2, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  ArrowUp, 
  ArrowDown,
  Sparkles
} from 'lucide-react';
import { useWorkshop } from '../../context/WorkshopContext';
import { UI_STYLES, PORTFOLIO_PRESETS } from '../../types/presets';
import { generatePortfolioPrompt } from '../../utils/promptGenerators';
import StyleCard from '../ui-previews/StyleCard';
import PalettePreview from '../ui-previews/PalettePreview';
import PromptOutput from '../common/PromptOutput';
import ProfileQuickBar from '../profile/ProfileQuickBar';
import Tooltip from '../common/Tooltip';

export default function Step03Portfolio() {
  const { 
    profile, 
    avatarConfig, 
    videoConfig, 
    portfolioConfig, 
    setPortfolioConfig, 
    setCurrentStep,
    triggerToast
  } = useWorkshop();

  const [activeTab, setActiveTab] = useState('styles');

  const updatePortfolio = (key, value) => {
    setPortfolioConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleStyleSelect = (style) => {
    setPortfolioConfig(prev => ({
      ...prev,
      selectedStyleId: style.id,
      selectedStyleName: style.name,
      selectedStyleDesc: style.desc
    }));
    triggerToast(`Selected UI Style: ${style.name}`, 'info');
  };

  // Section toggles and reordering
  const toggleSection = (sectionItem) => {
    setPortfolioConfig(prev => {
      const current = prev.sections || [];
      const exists = current.some(s => s.id === sectionItem.id);
      if (exists) {
        return {
          ...prev,
          sections: current.filter(s => s.id !== sectionItem.id)
        };
      } else {
        return {
          ...prev,
          sections: [...current, sectionItem]
        };
      }
    });
  };

  const moveSection = (index, direction) => {
    setPortfolioConfig(prev => {
      const current = [...(prev.sections || [])];
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= current.length) return prev;
      const temp = current[index];
      current[index] = current[targetIndex];
      current[targetIndex] = temp;
      return { ...prev, sections: current };
    });
  };

  // Generate real-time Antigravity/Stitch website specification
  const currentPromptText = generatePortfolioPrompt(profile, avatarConfig, videoConfig, portfolioConfig);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Persona overview banner */}
      <ProfileQuickBar />

      {/* Main Studio 2-Column Workstation Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
        gap: '24px',
        alignItems: 'start'
      }}>
        {/* LEFT COLUMN: Portfolio Specification Architect */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Section Navigation Tabs */}
          <div style={{
            display: 'flex',
            gap: '8px',
            background: '#141414',
            padding: '6px',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.06)',
            overflowX: 'auto'
          }}>
            {[
              { id: 'styles', label: '18 UI Styles', icon: Palette },
              { id: 'colors', label: 'Color System', icon: Sparkles },
              { id: 'sections', label: 'Section Architect', icon: Layers },
              { id: 'personality', label: 'Typography & Motion', icon: Sliders }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    background: isActive ? 'rgba(255, 122, 0, 0.15)' : 'transparent',
                    border: isActive ? '1px solid #FF7A00' : '1px solid transparent',
                    borderRadius: '10px',
                    color: isActive ? '#FFFFFF' : '#888888',
                    fontSize: '13px',
                    fontWeight: isActive ? '700' : '500',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 150ms ease'
                  }}
                >
                  <Icon size={14} color={isActive ? '#FF7A00' : '#777'} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* TAB 1: 18 UI STYLES VISUAL CARDS GRID */}
          {activeTab === 'styles' && (
            <div className="glass-card animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800' }}>
                  Visual Design System Architecture (18 Styles)
                </h3>
                <p style={{ fontSize: '12px', color: '#888' }}>
                  Select an aesthetic foundation. Stitch will generate a coherent design based on your chosen paradigm.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '14px'
              }}>
                {UI_STYLES.map(styleItem => (
                  <StyleCard
                    key={styleItem.id}
                    styleItem={styleItem}
                    selected={portfolioConfig.selectedStyleId === styleItem.id}
                    onSelect={() => handleStyleSelect(styleItem)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: LIVE COLOR THEME BUILDER */}
          {activeTab === 'colors' && (
            <div className="glass-card animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Color Palette & Token System</h3>
                <p style={{ fontSize: '12px', color: '#888' }}>
                  Choose a curated color harmony or customize individual hex tokens with live mini website feedback.
                </p>
              </div>

              <PalettePreview />
            </div>
          )}

          {/* TAB 3: SECTION ARCHITECT & REORDERING */}
          {activeTab === 'sections' && (
            <div className="glass-card animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Portfolio Section Architecture</h3>
                <p style={{ fontSize: '12px', color: '#888' }}>
                  Enable required modules and reorder sections according to your storytelling priority.
                </p>
              </div>

              {/* Active / Ordered Sections List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#FF7A00', textTransform: 'uppercase', fontWeight: '700' }}>
                  Enabled Sections Order ({portfolioConfig.sections?.length || 0})
                </span>

                {portfolioConfig.sections?.map((sec, idx) => (
                  <div
                    key={sec.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      background: '#181818',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      gap: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: '#888',
                        background: '#242424',
                        padding: '2px 6px',
                        borderRadius: '4px'
                      }}>
                        0{idx + 1}
                      </span>
                      <div>
                        <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#FFF' }}>
                          {sec.name}
                        </div>
                        <div style={{ fontSize: '11px', color: '#777' }}>
                          {sec.desc}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        type="button"
                        onClick={() => moveSection(idx, -1)}
                        disabled={idx === 0}
                        className="btn btn-sm btn-outline"
                        style={{ padding: '4px 8px', opacity: idx === 0 ? 0.3 : 1 }}
                        title="Move Up"
                      >
                        <ArrowUp size={13} />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveSection(idx, 1)}
                        disabled={idx === portfolioConfig.sections.length - 1}
                        className="btn btn-sm btn-outline"
                        style={{ padding: '4px 8px', opacity: idx === portfolioConfig.sections.length - 1 ? 0.3 : 1 }}
                        title="Move Down"
                      >
                        <ArrowDown size={13} />
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleSection(sec)}
                        className="btn btn-sm btn-outline"
                        style={{ padding: '4px 8px', color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.3)' }}
                        title="Remove Section"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional Sections Available */}
              <div style={{ marginTop: '10px' }}>
                <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#888', textTransform: 'uppercase' }}>
                  Available Optional Sections
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px', marginTop: '8px' }}>
                  {PORTFOLIO_PRESETS.optionalSections.map(opt => {
                    const isAdded = portfolioConfig.sections?.some(s => s.id === opt.id);
                    if (isAdded) return null;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleSection(opt)}
                        style={{
                          padding: '10px 14px',
                          background: '#151515',
                          border: '1px dashed rgba(255,255,255,0.15)',
                          borderRadius: '10px',
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '12.5px', fontWeight: '600', color: '#CCC' }}>
                            {opt.name}
                          </div>
                          <div style={{ fontSize: '10.5px', color: '#777' }}>
                            {opt.desc}
                          </div>
                        </div>
                        <Plus size={14} color="#FF7A00" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: WEBSITE PERSONALITY & CONTROLS */}
          {activeTab === 'personality' && (
            <div className="glass-card animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Website Personality & Micro-Interactions</h3>
                <p style={{ fontSize: '12px', color: '#888' }}>
                  Fine-tune typography scale, animation intensity, corner radius, and layout density.
                </p>
              </div>

              {/* Typography */}
              <div className="form-group">
                <label className="form-label">Typography Family Hierarchy</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px' }}>
                  {PORTFOLIO_PRESETS.typographyOptions.map(t => {
                    const isSelected = portfolioConfig.typography === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          updatePortfolio('typography', t.id);
                          updatePortfolio('typographyLabel', t.label);
                        }}
                        style={{
                          padding: '12px',
                          background: isSelected ? 'rgba(255, 122, 0, 0.12)' : '#161616',
                          border: isSelected ? '1.5px solid #FF7A00' : '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '12px',
                          textAlign: 'left',
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{ fontSize: '13px', fontWeight: '700', color: isSelected ? '#FFFFFF' : '#CCC' }}>
                          {t.label}
                        </div>
                        <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>
                          {t.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Animation Level */}
              <div className="form-group" style={{ marginTop: '10px' }}>
                <label className="form-label">Motion & Animation Intensity</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                  {PORTFOLIO_PRESETS.animationLevels.map(a => {
                    const isSelected = portfolioConfig.animationLevel === a.id;
                    return (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => {
                          updatePortfolio('animationLevel', a.id);
                          updatePortfolio('animationLevelLabel', a.label);
                        }}
                        style={{
                          padding: '12px',
                          background: isSelected ? 'rgba(255, 122, 0, 0.12)' : '#161616',
                          border: isSelected ? '1.5px solid #FF7A00' : '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '12px',
                          textAlign: 'left',
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{ fontSize: '13px', fontWeight: '700', color: isSelected ? '#FFFFFF' : '#CCC' }}>
                          {a.label}
                        </div>
                        <div style={{ fontSize: '10.5px', color: '#888', marginTop: '2px' }}>
                          {a.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Corner Radius & Density Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '10px' }}>
                <div className="form-group">
                  <label className="form-label">Corner Radius</label>
                  <select
                    className="form-select"
                    value={portfolioConfig.radius}
                    onChange={(e) => {
                      const sel = PORTFOLIO_PRESETS.radiusOptions.find(r => r.id === e.target.value);
                      updatePortfolio('radius', e.target.value);
                      if (sel) updatePortfolio('radiusLabel', sel.desc);
                    }}
                  >
                    {PORTFOLIO_PRESETS.radiusOptions.map(r => (
                      <option key={r.id} value={r.id}>{r.label} — {r.desc}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Layout Density & Spacing</label>
                  <select
                    className="form-select"
                    value={portfolioConfig.density}
                    onChange={(e) => {
                      const sel = PORTFOLIO_PRESETS.densityOptions.find(d => d.id === e.target.value);
                      updatePortfolio('density', e.target.value);
                      if (sel) updatePortfolio('densityLabel', sel.desc);
                    }}
                  >
                    {PORTFOLIO_PRESETS.densityOptions.map(d => (
                      <option key={d.id} value={d.id}>{d.label} — {d.desc}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="btn btn-secondary"
            >
              <ChevronLeft size={16} /> Back to 02 Video
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep(4)}
              className="btn btn-lg btn-primary"
            >
              View Master Summary Cockpit
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Live Antigravity/Stitch Specification Output */}
        <div style={{ position: 'sticky', top: '130px' }}>
          <PromptOutput
            title="ANTIGRAVITY / STITCH SPECIFICATION"
            subtitle="Stage 03 • Comprehensive Design Specification"
            promptText={currentPromptText}
            stepKey="portfolio"
            onReset={() => {}}
            onRegenerate={() => {
              triggerToast('Re-synthesized Portfolio specification from active parameters', 'success');
            }}
          />
        </div>
      </div>
    </div>
  );
}
