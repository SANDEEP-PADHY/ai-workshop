// Preset configurations for AI Identity Builder

export const UI_STYLES = [
  {
    id: 'neo-brutalism',
    name: 'Neo Brutalism',
    desc: 'High contrast, bold black borders, stark drop shadows, raw geometry, and vibrant saturated accents.',
    badge: 'Trending',
    previewBg: '#FFFDF9',
    previewBorder: '#000000',
    previewAccent: '#FF7A00',
    previewText: '#000000',
    borderWidth: '3px',
    borderRadius: '4px',
    boxShadow: '4px 4px 0px #000000',
    font: 'Space Grotesk'
  },
  {
    id: 'neumorphism',
    name: 'Neumorphism',
    desc: 'Soft extruded surfaces, dual inner & outer shadows, tactile debossed buttons, and monochromatic harmony.',
    badge: 'Tactile',
    previewBg: '#e0e5ec',
    previewBorder: 'transparent',
    previewAccent: '#3b82f6',
    previewText: '#334155',
    borderWidth: '0px',
    borderRadius: '16px',
    boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff',
    font: 'Inter'
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    desc: 'Frosted translucent surfaces, vivid multi-layer backdrop blurs, 1px specular borders, and ethereal glow.',
    badge: 'Modern',
    previewBg: 'rgba(255, 255, 255, 0.08)',
    previewBorder: 'rgba(255, 255, 255, 0.2)',
    previewAccent: '#FF7A00',
    previewText: '#FFFFFF',
    borderWidth: '1px',
    borderRadius: '18px',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    font: 'Hanken Grotesk'
  },
  {
    id: 'skeuomorphism',
    name: 'Skeuomorphism',
    desc: 'Realistic digital textures, metallic bevels, rich gradients, realistic leather/wood, and depth shadows.',
    badge: 'Realistic',
    previewBg: '#2c2d30',
    previewBorder: '#4a4b50',
    previewAccent: '#d97706',
    previewText: '#f3f4f6',
    borderWidth: '2px',
    borderRadius: '12px',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 8px rgba(0,0,0,0.5)',
    font: 'Georgia'
  },
  {
    id: 'skewmorphism',
    name: 'Skewmorphism',
    desc: 'Dynamic isometric slant, 3D angled cards, futuristic diagonal grids, and aggressive kinetic perspective.',
    badge: '3D Angle',
    previewBg: '#181824',
    previewBorder: '#6366f1',
    previewAccent: '#ec4899',
    previewText: '#FFFFFF',
    borderWidth: '2px',
    borderRadius: '10px',
    boxShadow: '8px 8px 0px rgba(99, 102, 241, 0.4)',
    font: 'Outfit'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    desc: 'Uncluttered whitespace, razor-thin lines, pure typography focus, restrained palette, and zen elegance.',
    badge: 'Clean',
    previewBg: '#121212',
    previewBorder: 'rgba(255, 255, 255, 0.1)',
    previewAccent: '#FFFFFF',
    previewText: '#E5E5E5',
    borderWidth: '1px',
    borderRadius: '0px',
    boxShadow: 'none',
    font: 'Inter'
  },
  {
    id: 'swiss-international',
    name: 'Swiss / International',
    desc: 'Strict mathematical asymmetric grid, bold sans-serif typography, stark hierarchy, and functional clarity.',
    badge: 'Classic',
    previewBg: '#F4F4F0',
    previewBorder: '#1A1A1A',
    previewAccent: '#E11D48',
    previewText: '#1A1A1A',
    borderWidth: '2px',
    borderRadius: '0px',
    boxShadow: 'none',
    font: 'Helvetica Neue'
  },
  {
    id: 'editorial',
    name: 'Editorial',
    desc: 'Magazine-grade luxury typography, elegant serif headlines, multi-column storytelling, and refined margins.',
    badge: 'Sophisticated',
    previewBg: '#0f0f11',
    previewBorder: 'rgba(212, 175, 55, 0.3)',
    previewAccent: '#d4af37',
    previewText: '#f5f5f7',
    borderWidth: '1px',
    borderRadius: '4px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    font: 'Playfair Display'
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    desc: 'Glitch aesthetics, neon scanlines, high-frequency gridlines, terminal HUD readouts, and acid yellow/cyan.',
    badge: 'Futuristic',
    previewBg: '#050811',
    previewBorder: '#00ffcc',
    previewAccent: '#ff0055',
    previewText: '#00ffcc',
    borderWidth: '2px',
    borderRadius: '2px',
    boxShadow: '0 0 15px rgba(0, 255, 204, 0.4), inset 0 0 10px rgba(255, 0, 85, 0.2)',
    font: 'JetBrains Mono'
  },
  {
    id: 'bento',
    name: 'Bento',
    desc: 'Modular asymmetric grid tiles, rounded micro-containers, self-contained widgets, and interactive cards.',
    badge: 'Apple Style',
    previewBg: '#1a1a1e',
    previewBorder: 'rgba(255, 255, 255, 0.08)',
    previewAccent: '#FF7A00',
    previewText: '#FFFFFF',
    borderWidth: '1px',
    borderRadius: '24px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    font: 'Hanken Grotesk'
  },
  {
    id: 'y2k',
    name: 'Y2K',
    desc: 'Late 90s cyber-nostalgia, chrome gradients, bubbly pill shapes, starburst stickers, and iridescent hues.',
    badge: 'Retro Cyber',
    previewBg: '#1e1035',
    previewBorder: '#ff71ce',
    previewAccent: '#01cdfe',
    previewText: '#fffb96',
    borderWidth: '2px',
    borderRadius: '30px',
    boxShadow: '0 0 12px #ff71ce',
    font: 'Comic Neue'
  },
  {
    id: 'material',
    name: 'Material Design',
    desc: 'Physical paper elevation, dynamic color tokens, responsive ripples, floating action buttons, and rounded sheets.',
    badge: 'Systematic',
    previewBg: '#1f1b24',
    previewBorder: 'transparent',
    previewAccent: '#bb86fc',
    previewText: '#e1e1e1',
    borderWidth: '0px',
    borderRadius: '16px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
    font: 'Roboto'
  },
  {
    id: 'soft-ui',
    name: 'Soft UI',
    desc: 'Gentle low-contrast shadows, rounded pastel pills, welcoming tactile surfaces, and friendly micro-interactions.',
    badge: 'Approachable',
    previewBg: '#1e222d',
    previewBorder: 'rgba(255, 255, 255, 0.05)',
    previewAccent: '#38bdf8',
    previewText: '#f1f5f9',
    borderWidth: '1px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
    font: 'Plus Jakarta Sans'
  },
  {
    id: 'dark-developer',
    name: 'Dark Developer',
    desc: 'Hardcore IDE terminal aesthetic, monospaced code badges, syntax color chips, git graph accents, and dark canvas.',
    badge: 'Coder Native',
    previewBg: '#0d1117',
    previewBorder: '#30363d',
    previewAccent: '#58a6ff',
    previewText: '#c9d1d9',
    borderWidth: '1px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
    font: 'JetBrains Mono'
  },
  {
    id: 'futuristic',
    name: 'Futuristic',
    desc: 'Sci-fi UI cockpit, angled telemetry HUDs, glowing status indicators, chamfered corners, and high-tech telemetry.',
    badge: 'Sci-Fi',
    previewBg: '#090d16',
    previewBorder: '#1e3a8a',
    previewAccent: '#38bdf8',
    previewText: '#e0f2fe',
    borderWidth: '1px',
    borderRadius: '6px',
    boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)',
    font: 'Orbitron'
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    desc: 'Strict grayscale mastery, high drama noir contrast, silver metallic strokes, and timeless photographic balance.',
    badge: 'Timeless',
    previewBg: '#000000',
    previewBorder: '#404040',
    previewAccent: '#FFFFFF',
    previewText: '#E5E5E5',
    borderWidth: '1px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(255,255,255,0.05)',
    font: 'Geist'
  },
  {
    id: 'retro',
    name: 'Retro',
    desc: '80s arcade vintage, scanline patterns, pixel accents, synthwave sunsets, and warm CRT phosphor glow.',
    badge: '80s Vintage',
    previewBg: '#1f132b',
    previewBorder: '#f43f5e',
    previewAccent: '#fbbf24',
    previewText: '#fef08a',
    borderWidth: '2px',
    borderRadius: '4px',
    boxShadow: '3px 3px 0px #f43f5e',
    font: 'VT323'
  },
  {
    id: 'claymorphism',
    name: 'Claymorphism',
    desc: 'Puffy 3D clay inflations, thick matte borders, playful pastel geometry, and cheerful tactile buoyancy.',
    badge: 'Playful 3D',
    previewBg: '#2d2438',
    previewBorder: 'rgba(255,255,255,0.15)',
    previewAccent: '#f472b6',
    previewText: '#fce7f3',
    borderWidth: '3px',
    borderRadius: '28px',
    boxShadow: 'inset 0 -8px 12px rgba(0,0,0,0.4), inset 0 8px 12px rgba(255,255,255,0.2), 0 16px 32px rgba(0,0,0,0.5)',
    font: 'Fredoka'
  }
];

export const COLOR_PRESETS = [
  {
    id: 'midnight-orange',
    name: 'Midnight Orange',
    mode: 'dark',
    bg: '#0B0B0B',
    surface: '#151515',
    primary: '#FF7A00',
    secondary: '#202020',
    accent: '#ff9d42',
    text: '#F5F5F5',
    muted: '#969696'
  },
  {
    id: 'cyber-green',
    name: 'Cyber Green',
    mode: 'dark',
    bg: '#080F0B',
    surface: '#101C15',
    primary: '#10B981',
    secondary: '#1A2E23',
    accent: '#34D399',
    text: '#F0FDF4',
    muted: '#6EE7B7'
  },
  {
    id: 'electric-blue',
    name: 'Electric Blue',
    mode: 'dark',
    bg: '#080C14',
    surface: '#111827',
    primary: '#3B82F6',
    secondary: '#1F2937',
    accent: '#60A5FA',
    text: '#F9FAFB',
    muted: '#9CA3AF'
  },
  {
    id: 'arctic',
    name: 'Arctic',
    mode: 'dark',
    bg: '#0B1117',
    surface: '#16222F',
    primary: '#38BDF8',
    secondary: '#24374A',
    accent: '#7DD3FC',
    text: '#F0F9FF',
    muted: '#BAE6FD'
  },
  {
    id: 'mono',
    name: 'Mono Noir',
    mode: 'dark',
    bg: '#050505',
    surface: '#141414',
    primary: '#FFFFFF',
    secondary: '#242424',
    accent: '#A3A3A3',
    text: '#F5F5F5',
    muted: '#737373'
  },
  {
    id: 'sunset',
    name: 'Sunset Glow',
    mode: 'dark',
    bg: '#120A0F',
    surface: '#20121B',
    primary: '#F43F5E',
    secondary: '#331B2A',
    accent: '#FB7185',
    text: '#FFF1F2',
    muted: '#FDA4AF'
  },
  {
    id: 'crimson',
    name: 'Crimson Edge',
    mode: 'dark',
    bg: '#0F0808',
    surface: '#1F1010',
    primary: '#EF4444',
    secondary: '#301818',
    accent: '#F87171',
    text: '#FEF2F2',
    muted: '#FCA5A5'
  },
  {
    id: 'violet',
    name: 'Ultra Violet',
    mode: 'dark',
    bg: '#0E0917',
    surface: '#1C132E',
    primary: '#8B5CF6',
    secondary: '#2B1E45',
    accent: '#A78BFA',
    text: '#F5F3FF',
    muted: '#C4B5FD'
  },
  {
    id: 'ocean',
    name: 'Deep Ocean',
    mode: 'dark',
    bg: '#071018',
    surface: '#0E1E2C',
    primary: '#06B6D4',
    secondary: '#163145',
    accent: '#22D3EE',
    text: '#ECFEFF',
    muted: '#A5F3FC'
  },
  {
    id: 'cream-black',
    name: 'Cream & Black',
    mode: 'light',
    bg: '#FBF9F5',
    surface: '#EFECE6',
    primary: '#18181B',
    secondary: '#E2DED5',
    accent: '#D97706',
    text: '#18181B',
    muted: '#71717A'
  }
];

export const AVATAR_PRESETS = {
  genderPresentations: ['Masculine', 'Feminine', 'Androgynous', 'Non-Binary', 'Stylized / Neutral'],
  ageAppearances: ['Young Student (15-18)', 'University Student (19-22)', 'Young Professional (23-26)', 'Early Career (27-30)', 'Timeless AI Persona'],
  skinTones: ['Fair / Porcelain', 'Light Beige', 'Warm Olive', 'Medium Tan', 'Rich Caramel', 'Deep Bronze', 'Dark Cocoa', 'Cyber Chrome / Stylized'],
  hairStyles: ['Short Fade', 'Messy Waves', 'Sleek Undercut', 'Long Flowing', 'Braids / Locs', 'Buzz Cut', 'Curly Afro', 'Bob Cut', 'Cyberpunk Neon Streaks', 'Ponytail', 'Spiky Anime'],
  hairColors: ['Natural Black', 'Dark Brown', 'Chestnut Brown', 'Blonde', 'Silver / Platinum', 'Cyber Orange', 'Electric Blue', 'Neon Violet', 'Emerald Green', 'Pastel Pink'],
  eyeColors: ['Warm Dark Brown', 'Amber', 'Deep Hazel', 'Ocean Blue', 'Emerald Green', 'Charcoal Gray', 'Glowing Cyber Cyan', 'Golden Honey', 'Violet'],
  facialExpressions: ['Confident & Focused', 'Warm & Friendly Smile', 'Calm & Intelligent', 'Determined & Ambitious', 'Creative Spark / Curious', 'Subtle Mysterious Smile', 'Visionary & Inspiring'],
  faceShapes: ['Oval', 'Chiseled Jawline', 'Angular / Diamond', 'Soft Rounded', 'Heart-shaped', 'Square'],
  bodyTypes: ['Athletic', 'Lean / Slim', 'Standard', 'Tall & Slender', 'Broad Shoulders', 'Stylized Silhouette'],
  
  clothingCategories: [
    { id: 'casual', label: 'Casual', desc: 'Comfortable oversized hoodie, premium t-shirt, everyday denim.' },
    { id: 'smart-casual', label: 'Smart Casual', desc: 'Minimalist blazer over graphic tee, clean chinos, stylish sneakers.' },
    { id: 'formal', label: 'Formal', desc: 'Sharp tailored suit or structured dress, modern minimalist cut.' },
    { id: 'streetwear', label: 'Streetwear', desc: 'Japanese tech-streetwear, layered jacket, cargo pants, statement kicks.' },
    { id: 'techwear', label: 'Techwear', desc: 'Functional modular straps, waterproof matte black fabric, tactical aesthetics.' },
    { id: 'futuristic', label: 'Futuristic', desc: 'Sleek carbon-fiber accented jacket, subtle luminescent fiber lines.' },
    { id: 'cyberpunk', label: 'Cyberpunk', desc: 'High-collar neon-trimmed jacket, holographic badges, cybernetic cuffs.' },
    { id: 'traditional', label: 'Traditional / Cultural', desc: 'Modernized cultural attire with contemporary geometric cuts.' },
    { id: 'sports', label: 'Sports & Active', desc: 'High-performance athletic apparel, lightweight performance gear.' },
    { id: 'custom', label: 'Custom Clothing', desc: 'Enter your custom bespoke outfit description.' }
  ],
  
  poses: [
    'Headshot (Face & Shoulders)',
    'Bust Portrait',
    'Half Body',
    'Full Body Standing',
    'Sitting at Modern Tech Workstation',
    'Walking with Purpose',
    'Looking Directly into Camera with Intense Focus',
    'Dynamic 3/4 Turn Pose',
    'Holding Futuristic Device / Tablet'
  ],
  
  environments: [
    'Ultra-modern Creative Studio with Soft Lighting',
    'Minimal Architectural Glass & Concrete Space',
    'Futuristic AI Research Lab with Ambient Blue/Orange Glow',
    'Hi-tech Developer Workstation with Multiple Monitors',
    'Modern Collaborative Campus Space',
    'Cyberpunk Neo-Tokyo Rooftop at Twilight',
    'Clean Neutral Studio Backdrop with Soft Shadow',
    'Lush Green Botanical Workspace',
    'Abstract Geometric Gradient Void',
    'Custom Environment'
  ],
  
  lightingStyles: [
    'Studio Softbox (Even, Flattering, Diffused)',
    'Cinematic Moody (High Contrast, Deep Shadows)',
    'Natural Golden Hour Sunlight',
    'Dramatic Chiaroscuro with Rim Lighting',
    'Vibrant Cyber Neon (Orange & Cyan Contrast)',
    'High Key Clean Bright Commercial',
    'Low Key Dark Aesthetic with Specular Highlights',
    'Volumetric Fog & Warm Backlight'
  ],
  
  cameraCompositions: [
    'Portrait 85mm Lens (Shallow Depth of Field, Creamy Bokeh)',
    'Close-up Macro Detail Focus',
    'Medium Shot (Waist-Up, Centered)',
    'Wide Shot (Contextual Environment)',
    'Golden Ratio / Rule of Thirds',
    'Cinematic Symmetrical Framing',
    'High-End Fashion Editorial Angle'
  ],
  
  visualStyles: [
    { id: 'photorealistic', name: 'Photorealistic Raw', desc: 'Hyper-realistic 8k photography, authentic skin pores, natural imperfections, Hasselblad shot.' },
    { id: 'cinematic', name: 'Cinematic Movie Still', desc: '35mm anamorphic film look, Arri Alexa color grade, atmospheric depth, cinematic framing.' },
    { id: 'editorial', name: 'Fashion Editorial', desc: 'Vogue-grade high fashion aesthetic, immaculate studio lighting, sharp styling.' },
    { id: '3d-octane', name: '3D Octane / Unreal 5', desc: 'Ray-traced 3D character render, subsurface scattering, Pixar-meets-Cyberpunk realism.' },
    { id: 'pixar-3d', name: 'Pixar-like Stylized 3D', desc: 'Charming stylized 3D animation character, expressive eyes, vibrant soft materials.' },
    { id: 'anime', name: 'Modern Anime / Makoto Shinkai', desc: 'Crisp anime illustration, stunning sky reflections, clean line art, glowing light effects.' },
    { id: 'comic', name: 'Graphic Novel / Comic', desc: 'Dynamic comic art style, rich ink linework, halftone shading, bold stylized shadows.' },
    { id: 'illustration', name: 'Vector / Modern Flat Art', desc: 'Sleek digital editorial illustration, geometric shapes, bold harmonious colors.' },
    { id: 'digital-art', name: 'Digital Concept Art', desc: 'ArtStation trending digital painting, textured brush strokes, epic atmospheric scale.' },
    { id: 'futuristic-cyber', name: 'Futuristic Cyber Hologram', desc: 'Semi-translucent digital identity, data particle overlay, high-tech biometric sheen.' },
    { id: 'minimal-noir', name: 'Minimal Noir / Monochrome', desc: 'Stark black and white, dramatic single light source, intense artistic shadows.' },
    { id: 'retro-synthwave', name: 'Retro Synthwave 80s', desc: 'Vaporwave grid aesthetic, neon rim lights, chrome reflections, vintage CRT glow.' }
  ]
};

export const NEGATIVE_PROMPTS_LIST = [
  { id: 'blurry', label: 'Blurry / Out of focus', recommended: true },
  { id: 'low-res', label: 'Low resolution / Pixelated', recommended: true },
  { id: 'distorted-face', label: 'Distorted face / Deformed eyes', recommended: true },
  { id: 'asymmetrical-eyes', label: 'Asymmetrical / Cross eyes', recommended: true },
  { id: 'extra-fingers', label: 'Extra fingers / Missing fingers', recommended: true },
  { id: 'extra-limbs', label: 'Extra limbs / Extra arms/legs', recommended: true },
  { id: 'deformed-hands', label: 'Deformed hands / Bad hands', recommended: true },
  { id: 'bad-anatomy', label: 'Bad anatomy / Unnatural proportions', recommended: true },
  { id: 'duplicate-person', label: 'Duplicate person / Twin', recommended: true },
  { id: 'cropped-head', label: 'Cropped head / Cut-off hair', recommended: true },
  { id: 'cut-off-body', label: 'Cut-off body awkwardly', recommended: false },
  { id: 'text-watermark', label: 'Text / Watermark / Signature / Logo', recommended: true },
  { id: 'overexposure', label: 'Overexposed / Blown-out highlights', recommended: true },
  { id: 'underexposure', label: 'Underexposed / Muddy shadows', recommended: false },
  { id: 'plastic-skin', label: 'Excessive plastic skin / Mannequin look', recommended: true },
  { id: 'unnatural-expression', label: 'Unnatural creepy smile / Dead eyes', recommended: true },
  { id: 'poor-proportions', label: 'Poor neck / Torso proportions', recommended: true },
  { id: 'cluttered-bg', label: 'Cluttered chaotic messy background', recommended: false },
  { id: 'mutated', label: 'Mutated / Disfigured / Ugly artifacts', recommended: true },
  { id: 'bad-eyes', label: 'Cloudy pupils / Misaligned gaze', recommended: true }
];

export const VIDEO_PRESETS = {
  cameraMovements: [
    'Static (Rock-solid centered framing, no motion jitter)',
    'Slow Push-in (Subtle 8-second forward dolly zoom into face)',
    'Slow Pull-out (Subtle reveal from close-up to waist-up)',
    'Slight Handheld (Organic documentary camera feel with gentle micro-sway)',
    'Cinematic Orbital (Smooth 10-degree slow parallax pan)'
  ],
  expressions: [
    'Confident & Engaging (Direct eye contact, self-assured smile)',
    'Friendly & Welcoming (Warm, approachable, natural smile)',
    'Energetic & Enthusiastic (Vibrant, passionate, bright eyes)',
    'Calm & Professional (Composed, articulate, steady presence)',
    'Curious & Creative (Thoughtful, visionary expression)'
  ],
  gestures: [
    'Talking Naturally (Subtle head tilts and natural eyebrow movement)',
    'Small Hand Gesture (One hand gesturing gently to emphasize speech)',
    'Warm Wave (Friendly wave at opening, then resting hands)',
    'Arms Relaxed (Clean posture, subtle chest breathing rhythm)',
    'Pointing Toward Viewer (Engaging single-point gesture during key skill phrase)'
  ],
  environments: [
    'Studio Setup (Neutral dark backdrop with soft warm key light)',
    'Classroom / Modern Campus (Sleek collaborative learning space in soft bokeh)',
    'High-Tech Lab (Futuristic server racks & holographic screens background)',
    'Creative Workspace (Designer studio with art tablets and moodboards)',
    'Outdoor Campus (Golden hour courtyard with lush greenery background)',
    'Minimal Cyber Void (Clean dark architectural stage with orange accent line)'
  ],
  lightingStyles: [
    'Natural Daylight (Soft, realistic window light)',
    'Studio 3-Point Lighting (Key, fill, and crisp orange rim light)',
    'Cinematic Warm (Rich amber tones, gentle contrast)',
    'Cool Modern (Crisp 5600K daylight with subtle blue ambiance)',
    'Dramatic (Deep cinematic shadows, high dynamic range)'
  ],
  videoStyles: [
    'Cinematic 4K (24fps film look, anamorphic depth, natural skin)',
    'Professional Tech Keynote (Sharp, pristine, Apple-event grade)',
    'Social Media Creator (Vibrant, high-contrast, modern vertical/horizontal)',
    'Documentary Interview (Realistic, authentic, high fidelity)',
    'Futuristic Hologram / Cyber (Subtle digital artifact lines, sleek finish)'
  ],
  framingOptions: [
    'Medium / Waist-Up (Recommended for natural speaking body language)',
    'Close-Up (Focus on facial expressions and lip sync)',
    'Wide (Full context including workspace environment)'
  ],
  avoidances: [
    'No scene changes or cuts (Must be 1 single continuous 8-second take)',
    'No additional characters or people walking in frame',
    'No identity drift (Face, hair, and clothing must match avatar reference 100%)',
    'No deformed hands or impossible finger counts during gestures',
    'No robotic or unnatural lip synchronization',
    'No subtitles, text overlays, or watermarks burned into video',
    'No rapid camera shake or chaotic transitions',
    'No exaggerated cartoon-like morphing'
  ]
};

export const PORTFOLIO_PRESETS = {
  defaultSections: [
    { id: 'hero', name: 'Hero Section', required: true, desc: 'Large title, avatar display, short bio punchline, and primary CTAs' },
    { id: 'about', name: 'About Me', required: true, desc: 'Detailed narrative, personality traits, hobbies, and background' },
    { id: 'skills', name: 'Skills & Tech Stack', required: true, desc: 'Interactive skill badges categorized by proficiency' },
    { id: 'projects', name: 'Featured Projects', required: true, desc: 'Project showcase cards with description, tech tags, and links' },
    { id: 'achievements', name: 'Achievements & Milestones', required: true, desc: 'Awards, hackathon wins, leadership roles, and honors' },
    { id: 'video-intro', name: '8-Second Video Introduction', required: true, desc: 'Embedded video player featuring your generated AI intro video' },
    { id: 'contact', name: 'Contact & Social Links', required: true, desc: 'Direct email form and verified social media handles' }
  ],
  optionalSections: [
    { id: 'education', name: 'Education & Academics', required: false, desc: 'Schools, current grades, key courses, and honors' },
    { id: 'experience', name: 'Experience / Internships', required: false, desc: 'Work experience, student clubs, and freelance history' },
    { id: 'certifications', name: 'Certifications & Badges', required: false, desc: 'Verified courses, licenses, and technical credentials' },
    { id: 'testimonials', name: 'Mentors / Peer Recommendations', required: false, desc: 'Quotes from teachers, mentors, and project teammates' },
    { id: 'gallery', name: 'Creative Gallery / Media', required: false, desc: 'Visual portfolio grid of design work, photos, or diagrams' }
  ],
  typographyOptions: [
    { id: 'modern-sans', label: 'Modern Sans (Hanken Grotesk / Inter)', desc: 'Clean, versatile, developer-friendly, high readability' },
    { id: 'editorial-serif', label: 'Editorial Serif (Playfair / Cormorant)', desc: 'High-end luxury, academic prestige, storytelling flair' },
    { id: 'monospace', label: 'Monospace (JetBrains Mono / Fira Code)', desc: 'Terminal vibe, hacker aesthetic, technical precision' },
    { id: 'geometric', label: 'Geometric Sans (Space Grotesk / Outfit)', desc: 'Modern tech, structural punch, neo-brutalist charm' },
    { id: 'experimental', label: 'Experimental / Display (Syne / Clash)', desc: 'Artistic avant-garde, bold personal statement, creative studio' }
  ],
  animationLevels: [
    { id: 'none', label: 'None (Static & Instant)', desc: 'Zero motion, instant state updates for maximum performance' },
    { id: 'subtle', label: 'Subtle (Recommended)', desc: 'Smooth 200ms fades, gentle button scale, elegant page transitions' },
    { id: 'medium', label: 'Medium (Interactive & Fluid)', desc: 'Staggered card reveals, parallax hero, smooth scroll triggers' },
    { id: 'expressive', label: 'Expressive (High Motion & Kinetic)', desc: 'Bold kinetic typography, 3D tilt cards, magnetic cursor effects' }
  ],
  radiusOptions: [
    { id: 'sharp', label: 'Sharp (0px)', desc: 'Strict rectangular corners, brutalist precision' },
    { id: 'small', label: 'Small (8px)', desc: 'Refined modern compact corners' },
    { id: 'medium', label: 'Medium (16px)', desc: 'Balanced friendly curves, standard modern UI' },
    { id: 'rounded', label: 'Rounded (24px)', desc: 'Pill-like smooth organic containers' }
  ],
  densityOptions: [
    { id: 'spacious', label: 'Spacious (Generous whitespace & large text)', desc: 'Workshop standard: 40px margins, 24px gutters, breathable design' },
    { id: 'balanced', label: 'Balanced (Standard desktop layout)', desc: 'Standard 24px margins, balanced component padding' },
    { id: 'dense', label: 'Dense (Compact telemetry & high data load)', desc: 'Power-user HUD style with tight 12px gutters' }
  ]
};
