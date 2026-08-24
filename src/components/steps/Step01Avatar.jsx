import React, { useState } from 'react';
import { 
  User, 
  Sparkles, 
  Shirt, 
  Camera, 
  Sun, 
  Layers, 
  ShieldAlert, 
  ChevronRight, 
  ChevronDown, 
  Sliders, 
  Plus, 
  X,
  Palette,
  Check
} from 'lucide-react';
import { useWorkshop } from '../../context/WorkshopContext';
import { AVATAR_PRESETS, NEGATIVE_PROMPTS_LIST } from '../../types/presets';
import { generateAvatarPrompt } from '../../utils/promptGenerators';
import SelectableChip from '../common/SelectableChip';
import PromptOutput from '../common/PromptOutput';
import ProfileQuickBar from '../profile/ProfileQuickBar';
import Tooltip from '../common/Tooltip';

export default function Step01Avatar() {
  const { 
    profile, 
    avatarConfig, 
    setAvatarConfig, 
    negativePrompts, 
    setNegativePrompts,
    customNegatives,
    setCustomNegatives,
    setCurrentStep,
    triggerToast
  } = useWorkshop();

  const [activeSection, setActiveSection] = useState('appearance');
  const [newCustomNegative, setNewCustomNegative] = useState('');

  const updateAvatar = (key, value) => {
    setAvatarConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Negative prompt handlers
  const toggleNegative = (label) => {
    if (negativePrompts.includes(label)) {
      setNegativePrompts(prev => prev.filter(n => n !== label));
    } else {
      setNegativePrompts(prev => [...prev, label]);
    }
  };

  const selectAllRecommended = () => {
    const recommended = NEGATIVE_PROMPTS_LIST.filter(n => n.recommended).map(n => n.label);
    setNegativePrompts(recommended);
    triggerToast('Applied recommended negative prompts!', 'success');
  };

  const clearAllNegatives = () => {
    setNegativePrompts([]);
    triggerToast('Cleared all negative prompts', 'info');
  };

  const addCustomNegative = () => {
    const tag = newCustomNegative.trim();
    if (!tag) return;
    if (!customNegatives.includes(tag)) {
      setCustomNegatives(prev => [...prev, tag]);
      setNegativePrompts(prev => [...prev, tag]);
    }
    setNewCustomNegative('');
  };

  const removeCustomNegative = (tag) => {
    setCustomNegatives(prev => prev.filter(t => t !== tag));
    setNegativePrompts(prev => prev.filter(n => n !== tag));
  };

  // Generate real-time prompt text
  const currentPromptText = generateAvatarPrompt(profile, avatarConfig, negativePrompts);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Persona quick overview banner */}
      <ProfileQuickBar />

      {/* Main Studio 2-Column Workstation Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
        gap: '24px',
        alignItems: 'start'
      }}>
        {/* LEFT COLUMN: Avatar Configuration Studio */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Navigation Accordion Tabs */}
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
              { id: 'appearance', label: 'Appearance', icon: User },
              { id: 'clothing', label: 'Clothing', icon: Shirt },
              { id: 'composition', label: 'Pose & Camera', icon: Camera },
              { id: 'environment', label: 'Environment & Light', icon: Sun },
              { id: 'styles', label: 'Visual Style', icon: Palette },
              { id: 'negatives', label: 'Negative Prompts', icon: ShieldAlert }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveSection(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    background: isActive ? 'rgba(255, 122, 0, 0.15)' : 'transparent',
                    border: isActive ? '1px solid #FF7A00' : '1px solid transparent',
                    borderRadius: '10px',
                    color: isActive ? '#FFFFFF' : '#888888',
                    fontSize: '12.5px',
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

          {/* TAB 1: APPEARANCE */}
          {activeSection === 'appearance' && (
            <div className="glass-card animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Character Appearance & Physical Traits</h3>
                <p style={{ fontSize: '12px', color: '#888' }}>Define the anatomical traits and facial expression of your AI persona.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">
                    Gender Presentation <Tooltip text="The visual gender styling for image generation." />
                  </label>
                  <select
                    className="form-select"
                    value={avatarConfig.gender}
                    onChange={(e) => updateAvatar('gender', e.target.value)}
                  >
                    {AVATAR_PRESETS.genderPresentations.map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Age Appearance <Tooltip text="Perceived age bracket in the generated portrait." />
                  </label>
                  <select
                    className="form-select"
                    value={avatarConfig.ageAppearance}
                    onChange={(e) => updateAvatar('ageAppearance', e.target.value)}
                  >
                    {AVATAR_PRESETS.ageAppearances.map(a => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Skin Tone</label>
                  <select
                    className="form-select"
                    value={avatarConfig.skinTone}
                    onChange={(e) => updateAvatar('skinTone', e.target.value)}
                  >
                    {AVATAR_PRESETS.skinTones.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Facial Expression</label>
                  <select
                    className="form-select"
                    value={avatarConfig.facialExpression}
                    onChange={(e) => updateAvatar('facialExpression', e.target.value)}
                  >
                    {AVATAR_PRESETS.facialExpressions.map(ex => (
                      <option key={ex} value={ex}>{ex}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Hair Style</label>
                  <select
                    className="form-select"
                    value={avatarConfig.hairStyle}
                    onChange={(e) => updateAvatar('hairStyle', e.target.value)}
                  >
                    {AVATAR_PRESETS.hairStyles.map(h => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Hair Color</label>
                  <select
                    className="form-select"
                    value={avatarConfig.hairColor}
                    onChange={(e) => updateAvatar('hairColor', e.target.value)}
                  >
                    {AVATAR_PRESETS.hairColors.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Eye Color</label>
                  <select
                    className="form-select"
                    value={avatarConfig.eyeColor}
                    onChange={(e) => updateAvatar('eyeColor', e.target.value)}
                  >
                    {AVATAR_PRESETS.eyeColors.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Face Shape</label>
                  <select
                    className="form-select"
                    value={avatarConfig.faceShape}
                    onChange={(e) => updateAvatar('faceShape', e.target.value)}
                  >
                    {AVATAR_PRESETS.faceShapes.map(f => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Body Type</label>
                  <select
                    className="form-select"
                    value={avatarConfig.bodyType}
                    onChange={(e) => updateAvatar('bodyType', e.target.value)}
                  >
                    {AVATAR_PRESETS.bodyTypes.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CLOTHING */}
          {activeSection === 'clothing' && (
            <div className="glass-card animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Wardrobe & Clothing Presets</h3>
                <p style={{ fontSize: '12px', color: '#888' }}>Select an outfit archetype or create your own custom styling description.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
                {AVATAR_PRESETS.clothingCategories.map(cat => {
                  const isSelected = avatarConfig.clothingCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        updateAvatar('clothingCategory', cat.id);
                        if (cat.id !== 'custom') {
                          updateAvatar('clothingPresetDescription', cat.desc);
                        }
                      }}
                      style={{
                        padding: '14px',
                        background: isSelected ? 'rgba(255, 122, 0, 0.12)' : '#171717',
                        border: isSelected ? '1.5px solid #FF7A00' : '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '14px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        transition: 'all 150ms ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: isSelected ? '#FFFFFF' : '#D0D0D0' }}>
                          {cat.label}
                        </span>
                        {isSelected && <Check size={14} color="#FF7A00" strokeWidth={3} />}
                      </div>
                      <p style={{ fontSize: '11px', color: '#888', lineHeight: '1.4' }}>
                        {cat.desc}
                      </p>
                    </button>
                  );
                })}
              </div>

              {avatarConfig.clothingCategory === 'custom' && (
                <div className="form-group animate-fade-in" style={{ marginTop: '10px' }}>
                  <label className="form-label">
                    Custom Clothing Description <Tooltip text="Describe fabric, cuts, layers, and brand aesthetics." />
                  </label>
                  <textarea
                    className="form-textarea"
                    value={avatarConfig.customClothing}
                    onChange={(e) => updateAvatar('customClothing', e.target.value)}
                    placeholder="e.g. Asymmetrical charcoal blazer over high-neck knit sweater with chrome pendant necklace..."
                    rows={3}
                  />
                </div>
              )}
            </div>
          )}

          {/* TAB 3: POSE & CAMERA */}
          {activeSection === 'composition' && (
            <div className="glass-card animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Pose, Framing & Camera Optics</h3>
                <p style={{ fontSize: '12px', color: '#888' }}>Configure the angle, framing composition, and camera focal characteristics.</p>
              </div>

              <div className="form-group">
                <label className="form-label">Pose & Framing Angle</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                  {AVATAR_PRESETS.poses.map(p => (
                    <SelectableChip
                      key={p}
                      label={p}
                      selected={avatarConfig.pose === p}
                      onClick={() => updateAvatar('pose', p)}
                    />
                  ))}
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '10px' }}>
                <label className="form-label">Camera Lens & Composition Rule</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                  {AVATAR_PRESETS.cameraCompositions.map(c => (
                    <SelectableChip
                      key={c}
                      label={c}
                      selected={avatarConfig.camera === c}
                      onClick={() => updateAvatar('camera', c)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ENVIRONMENT & LIGHT */}
          {activeSection === 'environment' && (
            <div className="glass-card animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Environment Backdrop & Lighting</h3>
                <p style={{ fontSize: '12px', color: '#888' }}>Set the scene environment and illumination atmosphere.</p>
              </div>

              <div className="form-group">
                <label className="form-label">Scene Environment Backdrop</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                  {AVATAR_PRESETS.environments.map(env => (
                    <SelectableChip
                      key={env}
                      label={env}
                      selected={avatarConfig.environment === env}
                      onClick={() => updateAvatar('environment', env)}
                    />
                  ))}
                </div>
              </div>

              {avatarConfig.environment === 'Custom Environment' && (
                <div className="form-group animate-fade-in">
                  <label className="form-label">Custom Environment Description</label>
                  <input
                    type="text"
                    className="form-input"
                    value={avatarConfig.customEnvironment || ''}
                    onChange={(e) => updateAvatar('customEnvironment', e.target.value)}
                    placeholder="e.g. Glass greenhouse with floating holographic wireframe displays..."
                  />
                </div>
              )}

              <div className="form-group" style={{ marginTop: '10px' }}>
                <label className="form-label">Lighting Style & Shadow Ratio</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                  {AVATAR_PRESETS.lightingStyles.map(light => (
                    <SelectableChip
                      key={light}
                      label={light}
                      selected={avatarConfig.lighting === light}
                      onClick={() => updateAvatar('lighting', light)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: VISUAL STYLES */}
          {activeSection === 'styles' && (
            <div className="glass-card animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Visual Style & Rendering Medium</h3>
                <p style={{ fontSize: '12px', color: '#888' }}>Choose from 12+ artistic rendering mediums from photorealism to stylized 3D.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
                {AVATAR_PRESETS.visualStyles.map(style => {
                  const isSelected = avatarConfig.visualStyle === style.name;
                  return (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => updateAvatar('visualStyle', style.name)}
                      style={{
                        padding: '16px',
                        background: isSelected ? 'rgba(255, 122, 0, 0.14)' : '#181818',
                        border: isSelected ? '1.5px solid #FF7A00' : '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '14px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        transition: 'all 150ms ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: isSelected ? '#FFFFFF' : '#E0E0E0' }}>
                          {style.name}
                        </span>
                        {isSelected && <Check size={16} color="#FF7A00" strokeWidth={3} />}
                      </div>
                      <p style={{ fontSize: '11px', color: '#888', lineHeight: '1.4' }}>
                        {style.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 6: NEGATIVE PROMPTS */}
          {activeSection === 'negatives' && (
            <div className="glass-card animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Negative Prompts Matrix</h3>
                  <p style={{ fontSize: '12px', color: '#888' }}>Filter out common generative AI artifacts, deformations, and unwanted elements.</p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={selectAllRecommended}
                    className="btn btn-sm btn-orange-outline"
                  >
                    Select All Recommended
                  </button>
                  <button
                    type="button"
                    onClick={clearAllNegatives}
                    className="btn btn-sm btn-outline"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              {/* Selectable Negative Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {NEGATIVE_PROMPTS_LIST.map(neg => {
                  const isSelected = negativePrompts.includes(neg.label);
                  return (
                    <SelectableChip
                      key={neg.id}
                      label={neg.label}
                      badge={neg.recommended ? 'Rec' : null}
                      selected={isSelected}
                      onClick={() => toggleNegative(neg.label)}
                    />
                  );
                })}

                {/* Custom Negative Tags */}
                {customNegatives.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      background: 'rgba(255, 122, 0, 0.15)',
                      border: '1px solid #FF7A00',
                      borderRadius: '12px',
                      color: '#FFF',
                      fontSize: '13px'
                    }}
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeCustomNegative(tag)}
                      style={{ background: 'none', border: 'none', color: '#FF7A00', cursor: 'pointer' }}
                    >
                      <X size={13} />
                    </button>
                  </span>
                ))}
              </div>

              {/* Add Custom Negative */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <input
                  type="text"
                  className="form-input"
                  value={newCustomNegative}
                  onChange={(e) => setNewCustomNegative(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomNegative())}
                  placeholder="Add custom negative constraint (e.g. sunglasses, neon logo)..."
                />
                <button
                  type="button"
                  onClick={addCustomNegative}
                  className="btn btn-secondary"
                  style={{ flexShrink: 0 }}
                >
                  <Plus size={14} /> Add
                </button>
              </div>
            </div>
          )}

          {/* Footer Action to Step 02 */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="btn btn-lg btn-primary"
            >
              Continue to 02 Video Setup
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Live Gemini Avatar Prompt Terminal Engine */}
        <div style={{ position: 'sticky', top: '130px' }}>
          <PromptOutput
            title="GEMINI AVATAR PROMPT"
            subtitle="Stage 01 • Master Image Generation Prompt"
            promptText={currentPromptText}
            stepKey="avatar"
            onReset={() => {}}
            onRegenerate={() => {
              triggerToast('Re-synthesized Avatar prompt from active parameters', 'success');
            }}
          />
        </div>
      </div>
    </div>
  );
}
