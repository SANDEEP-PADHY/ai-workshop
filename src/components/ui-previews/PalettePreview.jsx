import React from 'react';
import { Palette, Sun, Moon, Sparkles } from 'lucide-react';
import { COLOR_PRESETS } from '../../types/presets';
import { useWorkshop } from '../../context/WorkshopContext';

export default function PalettePreview() {
  const { portfolioConfig, setPortfolioConfig, profile } = useWorkshop();
  const { themeColors, selectedPresetId, themeMode } = portfolioConfig;

  const handlePresetSelect = (preset) => {
    setPortfolioConfig(prev => ({
      ...prev,
      selectedPresetId: preset.id,
      themeMode: preset.mode,
      themeColors: {
        bg: preset.bg,
        surface: preset.surface,
        primary: preset.primary,
        secondary: preset.secondary,
        accent: preset.accent,
        text: preset.text,
        muted: preset.muted
      }
    }));
  };

  const handleColorChange = (key, value) => {
    setPortfolioConfig(prev => ({
      ...prev,
      selectedPresetId: 'custom',
      themeColors: {
        ...prev.themeColors,
        [key]: value
      }
    }));
  };

  const toggleThemeMode = () => {
    const nextMode = themeMode === 'dark' ? 'light' : 'dark';
    if (nextMode === 'light') {
      const lightPreset = COLOR_PRESETS.find(p => p.mode === 'light') || {
        bg: '#FBF9F5', surface: '#EFECE6', primary: '#18181B', secondary: '#E2DED5', accent: '#D97706', text: '#18181B', muted: '#71717A'
      };
      handlePresetSelect(lightPreset);
    } else {
      const darkPreset = COLOR_PRESETS.find(p => p.id === 'midnight-orange');
      handlePresetSelect(darkPreset);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Curated Presets Bar */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <label className="form-label" style={{ margin: 0 }}>
            Curated Color Presets
          </label>
          
          <button
            type="button"
            onClick={toggleThemeMode}
            className="btn btn-sm btn-outline"
            style={{ padding: '4px 10px', fontSize: '11px' }}
          >
            {themeMode === 'dark' ? <Moon size={13} color="#FF7A00" /> : <Sun size={13} color="#FF7A00" />}
            {themeMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
          gap: '8px'
        }}>
          {COLOR_PRESETS.map(preset => {
            const isSelected = selectedPresetId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => handlePresetSelect(preset)}
                style={{
                  padding: '8px 10px',
                  background: isSelected ? 'rgba(255, 122, 0, 0.14)' : '#181818',
                  border: isSelected ? '1px solid #FF7A00' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  textAlign: 'left',
                  transition: 'all 150ms ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: preset.primary
                  }} />
                  <span style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: preset.surface,
                    border: '1px solid rgba(255,255,255,0.2)'
                  }} />
                  <span style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: preset.accent
                  }} />
                </div>
                <span style={{ fontSize: '12px', fontWeight: isSelected ? '700' : '500', color: isSelected ? '#FFFFFF' : '#BBB' }}>
                  {preset.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Hex Pickers & Live Preview Split */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        background: '#141414',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '20px'
      }}>
        {/* Left: Color Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h4 style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: '#888', textTransform: 'uppercase' }}>
            Palette Swatches
          </h4>

          {[
            { key: 'bg', label: 'Background' },
            { key: 'surface', label: 'Surface Card' },
            { key: 'primary', label: 'Primary Accent' },
            { key: 'secondary', label: 'Secondary Surface' },
            { key: 'accent', label: 'Subtle Accent' },
            { key: 'text', label: 'Text Main' },
            { key: 'muted', label: 'Muted Text' }
          ].map(({ key, label }) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <span style={{ fontSize: '12.5px', color: '#BBB', width: '110px' }}>{label}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
                <input
                  type="color"
                  value={themeColors[key] || '#000000'}
                  onChange={(e) => handleColorChange(key, e.target.value)}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                />
                <input
                  type="text"
                  value={themeColors[key] || ''}
                  onChange={(e) => handleColorChange(key, e.target.value)}
                  style={{
                    flex: 1,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    padding: '6px 10px',
                    background: '#1d1d1d',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '6px',
                    color: '#FFF'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right: Live Interactive Mini Website Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h4 style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: '#888', textTransform: 'uppercase' }}>
            Live Mini Website Preview
          </h4>

          <div style={{
            flex: 1,
            minHeight: '220px',
            background: themeColors.bg,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '14px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            color: themeColors.text,
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
          }}>
            {/* Mock Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '4px', background: themeColors.primary }} />
                <span style={{ fontSize: '12px', fontWeight: '800', color: themeColors.text }}>
                  {profile.fullName || 'Alex Rivera'}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontSize: '10px', color: themeColors.muted }}>Projects</span>
                <span style={{ fontSize: '10px', color: themeColors.muted }}>About</span>
                <span style={{ fontSize: '10px', color: themeColors.primary, fontWeight: '700' }}>Contact</span>
              </div>
            </div>

            {/* Mock Hero Container */}
            <div style={{
              padding: '12px',
              background: themeColors.surface,
              borderRadius: '10px',
              border: `1px solid ${themeColors.secondary}`,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: themeColors.accent, textTransform: 'uppercase' }}>
                {profile.role || 'Creative Coder & AI Creator'}
              </span>
              <div style={{ fontSize: '14px', fontWeight: '800', lineHeight: '1.2', color: themeColors.text }}>
                Designing the next digital frontier
              </div>
              <p style={{ fontSize: '10.5px', color: themeColors.muted, lineHeight: '1.3' }}>
                {profile.shortBio ? profile.shortBio.slice(0, 75) + '...' : 'Crafting intelligent interfaces and generative experiences.'}
              </p>
              <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                <button
                  type="button"
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: themeColors.primary,
                    color: themeColors.bg === '#0B0B0B' || themeColors.bg === '#050505' ? '#0B0B0B' : '#FFFFFF',
                    border: 'none',
                    fontSize: '10px',
                    fontWeight: '700'
                  }}
                >
                  View Projects
                </button>
                <button
                  type="button"
                  style={{
                    padding: '4px 8px',
                    borderRadius: '6px',
                    background: 'transparent',
                    border: `1px solid ${themeColors.accent}`,
                    color: themeColors.text,
                    fontSize: '10px'
                  }}
                >
                  Intro Video
                </button>
              </div>
            </div>

            {/* Mock Skill Chips */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {(profile.skills?.slice(0, 3) || ['React', 'Python', 'AI']).map((s, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '9px',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: themeColors.secondary,
                    color: themeColors.text
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
