import React, { useState } from 'react';
import { X, Plus, Trash2, User, Sparkles, Check, FileText, Briefcase, Award, Globe, HelpCircle } from 'lucide-react';
import { useWorkshop } from '../../context/WorkshopContext';
import Tooltip from '../common/Tooltip';

export default function ProfileModal() {
  const { 
    isProfileModalOpen, 
    setIsProfileModalOpen, 
    profile, 
    setProfile, 
    loadSampleData,
    triggerToast 
  } = useWorkshop();

  const [activeTab, setActiveTab] = useState('identity');
  const [newSkill, setNewSkill] = useState('');
  const [newHobby, setNewHobby] = useState('');
  const [newAchievement, setNewAchievement] = useState('');

  if (!isProfileModalOpen) return null;

  const handleUpdate = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSocialUpdate = (platform, value) => {
    setProfile(prev => ({
      ...prev,
      socials: {
        ...prev.socials,
        [platform]: value
      }
    }));
  };

  // Skill management
  const addSkill = (skillToAdd) => {
    const s = (skillToAdd || newSkill).trim();
    if (!s) return;
    if (profile.skills.includes(s)) {
      triggerToast('Skill already in your profile list', 'info');
      return;
    }
    setProfile(prev => ({
      ...prev,
      skills: [...(prev.skills || []), s]
    }));
    setNewSkill('');
  };

  const removeSkill = (index) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  // Project management
  const addProject = () => {
    setProfile(prev => ({
      ...prev,
      projects: [
        ...(prev.projects || []),
        { name: '', description: '', tech: '', link: '' }
      ]
    }));
  };

  const updateProject = (index, field, value) => {
    setProfile(prev => {
      const updated = [...(prev.projects || [])];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, projects: updated };
    });
  };

  const removeProject = (index) => {
    setProfile(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  // Achievement management
  const addAchievement = () => {
    if (!newAchievement.trim()) return;
    setProfile(prev => ({
      ...prev,
      achievements: [...(prev.achievements || []), newAchievement.trim()]
    }));
    setNewAchievement('');
  };

  const removeAchievement = (index) => {
    setProfile(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }));
  };

  const skillSuggestions = [
    'Coding', 'Robotics', 'Design', 'Photography', 'Public Speaking', 
    'Gaming', 'Writing', 'Entrepreneurship', 'AI', 'Electronics', 
    '3D Modeling', 'Video Editing', 'Music Production'
  ];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.82)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '880px',
        maxHeight: '90vh',
        background: '#141414',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 122, 0, 0.1)',
        overflow: 'hidden'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '20px 24px',
          background: '#191919',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(255, 122, 0, 0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FF7A00'
            }}>
              <User size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#F5F5F5' }}>
                Student Profile & Identity Core
              </h2>
              <p style={{ fontSize: '12px', color: '#888' }}>
                This global information is shared dynamically across your Avatar, Video, and Portfolio prompts.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              onClick={loadSampleData}
              className="btn btn-sm btn-secondary"
              title="Load pre-filled sample student profile"
            >
              <Sparkles size={13} color="#FF7A00" />
              Load Sample
            </button>
            <button
              type="button"
              onClick={() => setIsProfileModalOpen(false)}
              className="btn btn-sm btn-outline"
              style={{ borderRadius: '50%', width: '32px', height: '32px', padding: 0 }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Tab Navigation */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          background: '#111111',
          padding: '4px 16px 0',
          gap: '4px',
          overflowX: 'auto'
        }}>
          {[
            { id: 'identity', label: 'Identity', icon: User },
            { id: 'personal', label: 'Personal & Bio', icon: FileText },
            { id: 'skills', label: 'Skills & Stack', icon: Sparkles },
            { id: 'projects', label: 'Projects', icon: Briefcase },
            { id: 'achievements', label: 'Achievements', icon: Award },
            { id: 'socials', label: 'Social / Contact', icon: Globe }
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
                  gap: '8px',
                  padding: '10px 16px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: isActive ? '2px solid #FF7A00' : '2px solid transparent',
                  color: isActive ? '#FFFFFF' : '#888888',
                  fontSize: '13px',
                  fontWeight: isActive ? '700' : '500',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={14} color={isActive ? '#FF7A00' : '#777'} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Body Content */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
          {/* TAB 1: IDENTITY */}
          {activeTab === 'identity' && (
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">
                    Full Name <Tooltip text="Your full personal or display name used in introductions." />
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.fullName}
                    onChange={(e) => handleUpdate('fullName', e.target.value)}
                    placeholder="e.g. Alex Rivera"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Age <Tooltip text="Your age in years, utilized in video spoken lines and avatar age styling." />
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.age}
                    onChange={(e) => handleUpdate('age', e.target.value)}
                    placeholder="e.g. 19"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Pronouns</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.pronouns}
                    onChange={(e) => handleUpdate('pronouns', e.target.value)}
                    placeholder="e.g. They/Them, He/Him, She/Her"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Location / City</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.location}
                    onChange={(e) => handleUpdate('location', e.target.value)}
                    placeholder="e.g. San Francisco, CA or London, UK"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Role / Student Status</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.role}
                    onChange={(e) => handleUpdate('role', e.target.value)}
                    placeholder="e.g. AI Student & Full-Stack Developer"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">School / College</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.school}
                    onChange={(e) => handleUpdate('school', e.target.value)}
                    placeholder="e.g. Stanford University or Tech High School"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Class / Course</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.courseClass}
                    onChange={(e) => handleUpdate('courseClass', e.target.value)}
                    placeholder="e.g. Applied Generative AI Workshop 2026"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PERSONAL */}
          {activeTab === 'personal' && (
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">
                  Short Narrative Bio <Tooltip text="A 2-3 sentence overview of who you are and what excites you." />
                </label>
                <textarea
                  className="form-textarea"
                  value={profile.shortBio}
                  onChange={(e) => handleUpdate('shortBio', e.target.value)}
                  placeholder="Tell your story..."
                  rows={3}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Hobbies (Comma separated)</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.hobbies ? profile.hobbies.join(', ') : ''}
                    onChange={(e) => handleUpdate('hobbies', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                    placeholder="e.g. Creative Coding, Photography, Gaming"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Interests (Comma separated)</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.interests ? profile.interests.join(', ') : ''}
                    onChange={(e) => handleUpdate('interests', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                    placeholder="e.g. Generative UI, Robotics, Neural Shaders"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Personality Traits</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.personalityTraits ? profile.personalityTraits.join(', ') : ''}
                    onChange={(e) => handleUpdate('personalityTraits', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                    placeholder="e.g. Curious, Analytical, Ambitious"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Career Aspirations</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.careerInterests ? profile.careerInterests.join(', ') : ''}
                    onChange={(e) => handleUpdate('careerInterests', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                    placeholder="e.g. AI Interface Architect, Creative Director"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SKILLS */}
          {activeTab === 'skills' && (
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  className="form-input"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  placeholder="Type a skill and press Enter..."
                />
                <button
                  type="button"
                  onClick={() => addSkill()}
                  className="btn btn-primary"
                  style={{ flexShrink: 0 }}
                >
                  <Plus size={16} /> Add Skill
                </button>
              </div>

              {/* Suggestions */}
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#888', textTransform: 'uppercase' }}>
                  Quick Suggestions:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                  {skillSuggestions.map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => addSkill(s)}
                      style={{
                        padding: '4px 10px',
                        background: '#1c1c1c',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '8px',
                        color: '#bbb',
                        fontSize: '12px',
                        cursor: 'pointer'
                      }}
                    >
                      + {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Skills List */}
              <div style={{ marginTop: '12px' }}>
                <label className="form-label">Your Active Skills ({profile.skills?.length || 0})</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                  {profile.skills?.map((skill, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        background: 'rgba(255, 122, 0, 0.12)',
                        border: '1px solid rgba(255, 122, 0, 0.4)',
                        borderRadius: '10px',
                        color: '#F5F5F5',
                        fontSize: '13px',
                        fontWeight: '500'
                      }}
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(idx)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#FF7A00',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <X size={13} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#999' }}>
                  Add projects to showcase on your portfolio specification.
                </span>
                <button
                  type="button"
                  onClick={addProject}
                  className="btn btn-sm btn-primary"
                >
                  <Plus size={14} /> Add Project
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {profile.projects?.map((proj, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '16px',
                      background: '#1a1a1a',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#FF7A00', fontWeight: '700' }}>
                        PROJECT 0{idx + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeProject(idx)}
                        style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                        title="Delete project"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <input
                        type="text"
                        className="form-input"
                        value={proj.name}
                        onChange={(e) => updateProject(idx, 'name', e.target.value)}
                        placeholder="Project Name (e.g. NeuralStudio)"
                      />
                      <input
                        type="text"
                        className="form-input"
                        value={proj.tech}
                        onChange={(e) => updateProject(idx, 'tech', e.target.value)}
                        placeholder="Technologies (e.g. React, Python)"
                      />
                    </div>

                    <textarea
                      className="form-textarea"
                      style={{ minHeight: '60px' }}
                      value={proj.description}
                      onChange={(e) => updateProject(idx, 'description', e.target.value)}
                      placeholder="Brief description of what you built and the impact..."
                    />

                    <input
                      type="text"
                      className="form-input"
                      value={proj.link}
                      onChange={(e) => updateProject(idx, 'link', e.target.value)}
                      placeholder="Optional URL / Repo Link (e.g. https://github.com/...)"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: ACHIEVEMENTS */}
          {activeTab === 'achievements' && (
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  className="form-input"
                  value={newAchievement}
                  onChange={(e) => setNewAchievement(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addAchievement())}
                  placeholder="e.g. 1st Place Hackathon Winner, Open Source Contributor..."
                />
                <button
                  type="button"
                  onClick={addAchievement}
                  className="btn btn-primary"
                  style={{ flexShrink: 0 }}
                >
                  <Plus size={16} /> Add
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {profile.achievements?.map((ach, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      background: '#191919',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '10px',
                      fontSize: '13.5px'
                    }}
                  >
                    <span>🏆 {ach}</span>
                    <button
                      type="button"
                      onClick={() => removeAchievement(idx)}
                      style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: SOCIALS */}
          {activeTab === 'socials' && (
            <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">GitHub URL</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.socials?.github || ''}
                  onChange={(e) => handleSocialUpdate('github', e.target.value)}
                  placeholder="https://github.com/username"
                />
              </div>

              <div className="form-group">
                <label className="form-label">LinkedIn URL</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.socials?.linkedin || ''}
                  onChange={(e) => handleSocialUpdate('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/username"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  value={profile.socials?.email || ''}
                  onChange={(e) => handleSocialUpdate('email', e.target.value)}
                  placeholder="student@example.edu"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Instagram / Social</label>
                <input
                  type="text"
                  className="form-input"
                  value={profile.socials?.instagram || ''}
                  onChange={(e) => handleSocialUpdate('instagram', e.target.value)}
                  placeholder="https://instagram.com/username"
                />
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '16px 24px',
          background: '#191919',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '12px', color: '#888', fontFamily: 'var(--font-mono)' }}>
            ✓ Auto-saved locally in browser storage
          </span>
          <button
            type="button"
            onClick={() => {
              setIsProfileModalOpen(false);
              triggerToast('Student profile updated!', 'success');
            }}
            className="btn btn-primary"
          >
            <Check size={16} /> Save & Return to Studio
          </button>
        </div>
      </div>
    </div>
  );
}
