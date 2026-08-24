import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  UI_STYLES, 
  COLOR_PRESETS, 
  AVATAR_PRESETS, 
  NEGATIVE_PROMPTS_LIST, 
  VIDEO_PRESETS, 
  PORTFOLIO_PRESETS 
} from '../types/presets';

const STORAGE_KEY = 'ai_identity_builder_v1';

const INITIAL_PROFILE = {
  fullName: 'Alex Rivera',
  age: '19',
  pronouns: 'They/Them',
  location: 'San Francisco, CA',
  role: 'AI & Creative Technology Student',
  school: 'Design & Code Academy',
  courseClass: 'Applied Generative AI & Interactive Systems',
  shortBio: 'Creative technologist and developer passionate about building autonomous multi-modal agents, procedural graphics, and human-centered AI interfaces.',
  hobbies: ['Creative Coding', 'Modular Synthesizers', 'Sci-Fi Reading', 'Urban Photography'],
  interests: ['Generative UI', 'Neural Rendering', 'Human-AI Interaction', 'Spatial Computing'],
  personalityTraits: ['Curious', 'Analytical', 'Visionary', 'Methodical'],
  favoriteSubjects: ['Computer Science', 'Interaction Design', 'Cognitive Psychology', 'Mathematics'],
  careerInterests: ['AI Interface Architect', 'Creative Technologist', 'Machine Learning Engineer'],
  skills: ['Python', 'React', 'TypeScript', 'PyTorch', 'UI/UX Design', 'Three.js', 'Shader Programming'],
  achievements: [
    '1st Place Winner - Global Generative AI Hackathon 2025',
    'Open Source Contributor to Major Prompt Engineering Tools',
    'Published Interactive WebGL Article on Modern Web Shaders'
  ],
  projects: [
    {
      name: 'NeuralStudio',
      description: 'Real-time generative UI design workbench and token synthesizer powered by multimodal models.',
      tech: 'React, Vite, WebGL, Tailwind',
      link: 'https://github.com/alexrivera/neural-studio'
    },
    {
      name: 'AgenticFlow',
      description: 'Autonomous multi-step pipeline coordinator with live visual execution graph.',
      tech: 'Python, FastAPI, Gemini API',
      link: 'https://github.com/alexrivera/agentic-flow'
    },
    {
      name: 'VoxelMorph',
      description: 'Interactive 3D spatial web experiment exploring kinetic data topologies.',
      tech: 'Three.js, GLSL, Web Audio API',
      link: 'https://alexrivera.dev/voxelmorph'
    }
  ],
  socials: {
    github: 'https://github.com/alexrivera',
    linkedin: 'https://linkedin.com/in/alexrivera-tech',
    instagram: 'https://instagram.com/alex.rivera.ai',
    email: 'alex.rivera@example.edu',
    portfolio: 'https://alexrivera.dev',
    other: ''
  }
};

const INITIAL_AVATAR = {
  gender: 'Masculine',
  ageAppearance: 'University Student (19-22)',
  skinTone: 'Warm Olive',
  hairStyle: 'Sleek Undercut',
  hairColor: 'Natural Black',
  eyeColor: 'Warm Dark Brown',
  facialExpression: 'Confident & Focused',
  faceShape: 'Chiseled Jawline',
  bodyType: 'Athletic',
  clothingCategory: 'techwear',
  clothingPresetDescription: 'Modern minimalist techwear jacket with subtle geometric orange accents, structured collar, and matte black technical fabric.',
  customClothing: '',
  pose: 'Bust Portrait looking directly into camera with intense focus',
  environment: 'Ultra-modern Creative Studio with Soft Lighting and subtle ambient orange rim light',
  customEnvironment: '',
  lighting: 'Studio Softbox with dramatic cinematic rim lighting',
  camera: 'Portrait 85mm Lens, shallow depth of field, creamy bokeh, crisp focal clarity',
  visualStyle: 'Photorealistic Raw'
};

const INITIAL_VIDEO = {
  endingType: 'skill', // 'skill' | 'hobby' | 'passion'
  selectedSkill: 'building generative AI interfaces and creative coding',
  selectedHobby: 'building interactive web experiments and generative music',
  selectedPassion: 'designing the next generation of intelligent tools for students',
  cameraMovement: 'Slow Push-in (Subtle 8-second forward dolly zoom into face)',
  expression: 'Confident & Engaging (Direct eye contact, self-assured smile)',
  gesture: 'Talking Naturally (Subtle head tilts and natural eyebrow movement)',
  environment: 'Studio Setup (Neutral dark backdrop with soft warm key light)',
  lighting: 'Studio 3-Point Lighting (Key, fill, and crisp orange rim light)',
  videoStyle: 'Cinematic 4K (24fps film look, anamorphic depth, natural skin)',
  framing: 'Medium / Waist-Up (Recommended for natural speaking body language)',
  avoidances: [
    'No scene changes or cuts (Must be 1 single continuous 8-second take)',
    'No additional characters or people walking in frame',
    'No identity drift (Face, hair, and clothing must match avatar reference 100%)',
    'No deformed hands or impossible finger counts during gestures',
    'No robotic or unnatural lip synchronization',
    'No subtitles, text overlays, or watermarks burned into video'
  ]
};

const INITIAL_PORTFOLIO = {
  selectedStyleId: 'glassmorphism',
  selectedStyleName: 'Glassmorphism',
  selectedStyleDesc: 'Frosted translucent surfaces, vivid multi-layer backdrop blurs, 1px specular borders, and ethereal glow.',
  themeMode: 'dark',
  selectedPresetId: 'midnight-orange',
  themeColors: {
    bg: '#0B0B0B',
    surface: '#151515',
    primary: '#FF7A00',
    secondary: '#202020',
    accent: '#ff9d42',
    text: '#F5F5F5',
    muted: '#969696'
  },
  sections: [
    { id: 'hero', name: 'Hero Section', required: true, desc: 'Large headline, avatar display, short bio punchline, and primary CTAs' },
    { id: 'video-intro', name: '8-Second Video Intro', required: true, desc: 'Embedded video player featuring your generated AI intro video' },
    { id: 'about', name: 'About Me', required: true, desc: 'Detailed narrative bio, personality traits, and background' },
    { id: 'skills', name: 'Skills & Tech Stack', required: true, desc: 'Interactive skill badges categorized by proficiency' },
    { id: 'projects', name: 'Featured Projects', required: true, desc: 'Project showcase cards with description, tech tags, and links' },
    { id: 'achievements', name: 'Achievements & Milestones', required: true, desc: 'Awards, hackathon wins, leadership roles, and honors' },
    { id: 'contact', name: 'Contact & Social Links', required: true, desc: 'Direct message form and verified external links' }
  ],
  typography: 'modern-sans',
  typographyLabel: 'Modern Sans (Hanken Grotesk / Inter)',
  animationLevel: 'subtle',
  animationLevelLabel: 'Subtle (Smooth 200ms fades, gentle button scale, elegant transitions)',
  radius: 'medium',
  radiusLabel: 'Medium (16px balanced friendly curves)',
  density: 'spacious',
  densityLabel: 'Spacious (Generous 40px margins, 24px gutters, breathable design)'
};

const WorkshopContext = createContext(null);

export function WorkshopProvider({ children }) {
  // Step navigation: 1 = Avatar, 2 = Video, 3 = Portfolio, 4 = Summary
  const [currentStep, setCurrentStep] = useState(1);
  
  // Modals & UI state
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Core workshop data state
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.profile || INITIAL_PROFILE;
      }
    } catch (e) {
      console.warn('Failed to parse saved profile', e);
    }
    return INITIAL_PROFILE;
  });

  const [avatarConfig, setAvatarConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.avatarConfig || INITIAL_AVATAR;
      }
    } catch (e) {}
    return INITIAL_AVATAR;
  });

  const [negativePrompts, setNegativePrompts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.negativePrompts) return parsed.negativePrompts;
      }
    } catch (e) {}
    // Default to recommended negative prompts
    return NEGATIVE_PROMPTS_LIST.filter(n => n.recommended).map(n => n.label);
  });

  const [customNegatives, setCustomNegatives] = useState([]);

  const [videoConfig, setVideoConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.videoConfig || INITIAL_VIDEO;
      }
    } catch (e) {}
    return INITIAL_VIDEO;
  });

  const [portfolioConfig, setPortfolioConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.portfolioConfig || INITIAL_PORTFOLIO;
      }
    } catch (e) {}
    return INITIAL_PORTFOLIO;
  });

  const [userEditedPrompts, setUserEditedPrompts] = useState({
    avatar: null,
    video: null,
    portfolio: null
  });

  // Persist to localStorage whenever state changes
  useEffect(() => {
    try {
      const payload = {
        profile,
        avatarConfig,
        negativePrompts,
        customNegatives,
        videoConfig,
        portfolioConfig,
        currentStep
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.warn('Failed to save state to localStorage', e);
    }
  }, [profile, avatarConfig, negativePrompts, customNegatives, videoConfig, portfolioConfig, currentStep]);

  // Toast notification manager
  const triggerToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Reset entire state
  const resetToDefaults = () => {
    if (window.confirm('Reset all workshop parameters and student information to defaults?')) {
      setProfile(INITIAL_PROFILE);
      setAvatarConfig(INITIAL_AVATAR);
      setNegativePrompts(NEGATIVE_PROMPTS_LIST.filter(n => n.recommended).map(n => n.label));
      setCustomNegatives([]);
      setVideoConfig(INITIAL_VIDEO);
      setPortfolioConfig(INITIAL_PORTFOLIO);
      setUserEditedPrompts({ avatar: null, video: null, portfolio: null });
      setCurrentStep(1);
      localStorage.removeItem(STORAGE_KEY);
      triggerToast('All data has been reset to workshop defaults', 'info');
    }
  };

  // Load sample student dataset
  const loadSampleData = () => {
    setProfile(INITIAL_PROFILE);
    setAvatarConfig(INITIAL_AVATAR);
    setNegativePrompts(NEGATIVE_PROMPTS_LIST.filter(n => n.recommended).map(n => n.label));
    setVideoConfig(INITIAL_VIDEO);
    setPortfolioConfig(INITIAL_PORTFOLIO);
    setUserEditedPrompts({ avatar: null, video: null, portfolio: null });
    triggerToast('Loaded Alex Rivera student sample identity!', 'success');
  };

  // Export JSON file
  const exportSessionJSON = () => {
    const payload = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      profile,
      avatarConfig,
      negativePrompts,
      customNegatives,
      videoConfig,
      portfolioConfig
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-identity-${(profile.fullName || 'student').toLowerCase().replace(/\s+/g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
    triggerToast('Identity configuration exported as JSON', 'success');
  };

  // Import JSON file
  const importSessionJSON = (jsonString) => {
    try {
      const data = JSON.parse(jsonString);
      if (data.profile) setProfile(data.profile);
      if (data.avatarConfig) setAvatarConfig(data.avatarConfig);
      if (data.negativePrompts) setNegativePrompts(data.negativePrompts);
      if (data.videoConfig) setVideoConfig(data.videoConfig);
      if (data.portfolioConfig) setPortfolioConfig(data.portfolioConfig);
      triggerToast('Identity successfully imported from JSON file!', 'success');
      return true;
    } catch (e) {
      triggerToast('Invalid JSON configuration file format', 'error');
      return false;
    }
  };

  return (
    <WorkshopContext.Provider value={{
      currentStep,
      setCurrentStep,
      isProfileModalOpen,
      setIsProfileModalOpen,
      toasts,
      triggerToast,
      profile,
      setProfile,
      avatarConfig,
      setAvatarConfig,
      negativePrompts,
      setNegativePrompts,
      customNegatives,
      setCustomNegatives,
      videoConfig,
      setVideoConfig,
      portfolioConfig,
      setPortfolioConfig,
      userEditedPrompts,
      setUserEditedPrompts,
      resetToDefaults,
      loadSampleData,
      exportSessionJSON,
      importSessionJSON
    }}>
      {children}
    </WorkshopContext.Provider>
  );
}

export function useWorkshop() {
  const context = useContext(WorkshopContext);
  if (!context) {
    throw new Error('useWorkshop must be used within a WorkshopProvider');
  }
  return context;
}
