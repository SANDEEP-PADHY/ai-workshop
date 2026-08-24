// Dynamic prompt synthesis engines for Avatar, Video, and Portfolio

/**
 * Generates the Gemini Avatar Image Prompt
 */
export function generateAvatarPrompt(profile, avatar, negativePrompts) {
  const name = profile.fullName || 'Alex Rivera';
  const age = profile.age || '19';
  const role = profile.role || 'Computer Science Student & Creative Coder';
  const school = profile.school ? ` at ${profile.school}` : '';
  const skills = profile.skills && profile.skills.length > 0 ? profile.skills.slice(0, 3).join(', ') : 'Coding, UI Design';
  
  const selectedStyle = avatar.visualStyle || 'Photorealistic Raw';
  const gender = avatar.gender || 'Masculine';
  const ageApp = avatar.ageAppearance || 'University Student (19-22)';
  const skin = avatar.skinTone || 'Warm Olive';
  const hair = `${avatar.hairColor || 'Natural Black'} ${avatar.hairStyle || 'Sleek Undercut'}`;
  const eyes = avatar.eyeColor || 'Warm Dark Brown';
  const expression = avatar.facialExpression || 'Confident & Focused';
  const faceShape = avatar.faceShape || 'Chiseled Jawline';
  const bodyType = avatar.bodyType || 'Athletic';

  const clothingDesc = avatar.clothingCategory === 'custom' && avatar.customClothing
    ? avatar.customClothing
    : (avatar.clothingPresetDescription || 'Modern minimalist techwear jacket with subtle geometric orange accents, structured collar, matte black fabric.');

  const pose = avatar.pose || 'Bust Portrait looking directly into camera with intense focus';
  const environment = avatar.environment === 'Custom Environment' && avatar.customEnvironment
    ? avatar.customEnvironment
    : (avatar.environment || 'Ultra-modern Creative Studio with Soft Lighting and subtle ambient orange rim light');
  
  const lighting = avatar.lighting || 'Studio Softbox with dramatic cinematic rim lighting';
  const camera = avatar.camera || 'Portrait 85mm Lens, shallow depth of field, creamy bokeh, crisp focal clarity';

  const selectedNegatives = negativePrompts && negativePrompts.length > 0 
    ? negativePrompts.join(', ')
    : 'blurry, low resolution, distorted face, extra limbs, bad anatomy, deformed hands, watermark, logo, plastic skin';

  return `// ==========================================
// GEMINI AVATAR IMAGE GENERATION PROMPT
// ==========================================

[STYLE DIRECTIVE]
Render a masterwork, ultra-high-definition ${selectedStyle} character portrait with immaculate detail, realistic physical textures, and nuanced lighting.

[CHARACTER IDENTITY & ANATOMY]
- Subject: ${name}, a ${age}-year-old ${role}${school} (${gender} presentation, appearing as ${ageApp}).
- Facial Structure: ${faceShape} face shape, ${expression} expression, engaging gaze looking directly at the viewer.
- Features: ${skin} skin tone with authentic subtle texture, sharp defined eyes (${eyes}), and styled hair (${hair}).
- Physique: ${bodyType} build with poised, intentional posture.

[WARDROBE & STYLING]
- Attire: ${clothingDesc}
- Accessories & Details: Clean minimalist design accents, functional aesthetic, tailored fit.

[COMPOSITION & CAMERA SPECIFICATION]
- Framing & Pose: ${pose}.
- Camera & Optics: ${camera}.
- Lighting Setup: ${lighting}.

[ENVIRONMENT & ATMOSPHERE]
- Backdrop: ${environment}.
- Depth: Pronounced atmospheric separation between the subject and background.

[AVOID / NEGATIVE CONSTRAINTS]
AVOID: ${selectedNegatives}.

[OUTPUT GOAL]
Create a pristine, high-impact hero identity portrait optimized for developer portfolio branding and character reference in downstream AI video pipelines.`;
}

/**
 * Generates the 8-Second Intro Video Prompt
 */
export function generateVideoPrompt(profile, avatar, video) {
  const name = profile.fullName || 'Alex Rivera';
  const age = profile.age || '19';
  
  // Script line builder
  let endingPhrase = '';
  if (video.endingType === 'skill') {
    const skill = video.selectedSkill || (profile.skills && profile.skills[0]) || 'AI engineering and creative design';
    endingPhrase = `I'm excellent at ${skill}.`;
  } else if (video.endingType === 'hobby') {
    const hobby = video.selectedHobby || (profile.hobbies && profile.hobbies[0]) || 'building interactive web experiments';
    endingPhrase = `my hobby is ${hobby}.`;
  } else {
    const passion = video.selectedPassion || (profile.careerInterests && profile.careerInterests[0]) || 'designing the future of intelligent interfaces';
    endingPhrase = `I'm passionate about ${passion}.`;
  }

  const exactSpokenLine = `Hi, my name is ${name}, I'm ${age} years old, and ${endingPhrase}`;
  
  const camera = video.cameraMovement || 'Slow Push-in (Subtle 8-second forward dolly zoom into face)';
  const expression = video.expression || 'Confident & Engaging (Direct eye contact, self-assured smile)';
  const gesture = video.gesture || 'Talking Naturally (Subtle head tilts and natural eyebrow movement)';
  const environment = video.environment || 'Studio Setup (Neutral dark backdrop with soft warm key light)';
  const lighting = video.lighting || 'Studio 3-Point Lighting (Key, fill, and crisp orange rim light)';
  const style = video.videoStyle || 'Cinematic 4K (24fps film look, anamorphic depth, natural skin)';
  const framing = video.framing || 'Medium / Waist-Up (Recommended for natural speaking body language)';

  const avoidances = video.avoidances && video.avoidances.length > 0
    ? video.avoidances.map(a => `- ${a}`).join('\n')
    : `- No scene changes or cuts (Must be 1 single continuous 8-second take)
- No additional characters or people walking in frame
- No identity drift (Face, hair, and clothing must match avatar reference 100%)
- No deformed hands or impossible finger counts during gestures
- No robotic or unnatural lip synchronization
- No subtitles, text overlays, or watermarks burned into video`;

  return `// ==========================================
// 8-SECOND INTRO VIDEO GENERATION PROMPT
// ==========================================

[VIDEO CORE SPECIFICATION]
- Duration: 8.0 Seconds (Strict single continuous take)
- Format: ${style}
- Framing: ${framing}
- Character Reference: Use the supplied AI Avatar image as 100% facial, hairstyle, and wardrobe ground truth.

[SPOKEN DIALOGUE & AUDIO-VISUAL SYNC]
- Exact Spoken Sentence: "${exactSpokenLine}"
- Audio Delivery: Articulate, energetic, natural human cadence with accurate phoneme-to-lip synchronization throughout the 8 seconds.

[PERFORMANCE & KINEMATICS]
- Facial Expression: ${expression}.
- Body Language & Gesture: ${gesture}. The character speaks directly to the camera with relaxed confidence.
- Camera Choreography: ${camera}. Fluid and stabilized motion with no erratic shaking.

[SCENE ENVIRONMENT & LIGHTING]
- Setting: ${environment}.
- Lighting: ${lighting}. Consistent illumination without flickering or exposure stepping.

[CONTINUITY & NEGATIVE RESTRICTIONS]
${avoidances}

[FINAL DELIVERABLE]
A seamless, production-grade 8-second introduction shot suitable for immediate embedding in a personal portfolio hero banner.`;
}

/**
 * Generates the Antigravity / Stitch Portfolio Website Specification Prompt
 */
export function generatePortfolioPrompt(profile, avatar, video, portfolio) {
  const name = profile.fullName || 'Alex Rivera';
  const role = profile.role || 'Full-Stack Developer & AI Creator';
  const bio = profile.shortBio || 'Crafting the next generation of intelligent tools, generative interfaces, and high-performance web applications.';
  const school = profile.school || 'Tech Institute';
  const location = profile.location || 'San Francisco, CA';
  
  const skills = profile.skills && profile.skills.length > 0 ? profile.skills.join(', ') : 'React, Python, TypeScript, Node.js, UI/UX Design, PyTorch';
  const achievements = profile.achievements && profile.achievements.length > 0 
    ? profile.achievements.join(' | ') 
    : '1st Place AI Hackathon 2025 | Open Source Contributor | Google AI Student Ambassador';
  
  const projectsList = profile.projects && profile.projects.length > 0
    ? profile.projects.map((p, idx) => `  ${idx + 1}. **${p.name || 'Project ' + (idx + 1)}**: ${p.description || 'Innovative AI-powered application.'} (Tech: ${p.tech || 'React, Python'}${p.link ? ` | Link: ${p.link}` : ''})`).join('\n')
    : `  1. **NeuralStudio**: Real-time generative UI workbench for design systems (Tech: React, WebGL, Tailwind)
  2. **AgenticFlow**: Autonomous task orchestration engine for multi-modal workflows (Tech: Python, FastAPI, Gemini API)
  3. **VoxelMorph**: 3D spatial web experiment exploring kinetic data topologies (Tech: Three.js, GLSL)`;

  const selectedStyle = portfolio.selectedStyleName || 'Glassmorphism';
  const styleDesc = portfolio.selectedStyleDesc || 'Frosted translucent surfaces, vivid multi-layer backdrop blurs, 1px specular borders, and ethereal glow.';
  
  const colors = portfolio.themeColors || {
    bg: '#0B0B0B',
    surface: '#151515',
    primary: '#FF7A00',
    secondary: '#202020',
    accent: '#ff9d42',
    text: '#F5F5F5',
    muted: '#969696'
  };

  const activeSections = portfolio.sections && portfolio.sections.length > 0
    ? portfolio.sections.map((s, idx) => `  ${idx + 1}. **${s.name}**: ${s.desc}`).join('\n')
    : `  1. **Hero Section**: High-impact headline, embedded AI Avatar, short bio, call-to-action buttons.
  2. **8-Second Video Intro**: Embedded cinematic video player with custom controls.
  3. **About Me**: Narrative bio, personality traits, education, and career aspirations.
  4. **Skills & Arsenal**: Interactive categorized skill chips with proficiency indicators.
  5. **Featured Projects**: High-fidelity project cards with live links and tech tags.
  6. **Achievements**: Milestone timeline and award badges.
  7. **Contact & Socials**: Interactive message form and verified external links.`;

  const typography = portfolio.typographyLabel || 'Modern Sans (Hanken Grotesk / Inter)';
  const animation = portfolio.animationLevelLabel || 'Subtle (Smooth 200ms fades, gentle button scale, elegant transitions)';
  const radius = portfolio.radiusLabel || 'Medium (16px balanced friendly curves)';
  const density = portfolio.densityLabel || 'Spacious (Generous 40px margins, 24px gutters, breathable design)';

  return `// ==========================================
// ANTIGRAVITY / STITCH PORTFOLIO SPECIFICATION
// ==========================================

[PROJECT OVERVIEW]
Build a state-of-the-art, fully responsive, and highly polished personal portfolio web application for **${name}** (${role}).

[DESIGN SYSTEM & AESTHETIC DIRECTIVE]
- Design Style: **${selectedStyle}** (${styleDesc})
- Core Philosophy: Hardcore developer workstation × modern creative studio. Serious, technical, minimal, and highly intentional.
- "Use the selected design system consistently across the entire website." Avoid generic templates or random card placements.

[COLOR SYSTEM TOKENS]
- Canvas Background: \`${colors.bg}\`
- Deep Surface: \`${colors.surface}\`
- Secondary Container: \`${colors.secondary}\`
- Primary Accent: \`${colors.primary}\` (Used for CTAs, active highlights, badges, and focus rings)
- Subtle Accent: \`${colors.accent}\`
- High-Contrast Text: \`${colors.text}\`
- Muted / Secondary Text: \`${colors.muted}\`

[TYPOGRAPHY & GEOMETRY]
- Typography Scale: ${typography}. High visual hierarchy between display titles and monospaced data readouts.
- Corner Radii: ${radius}.
- Spacing & Density: ${density}.
- Motion & Interactions: ${animation}.

[ENABLED SECTIONS & WORKFLOW]
${activeSections}

[STUDENT PROFILE CONTENT DATA]
- Full Name: ${name}
- Headline: ${role} | ${school} (${location})
- Narrative Bio: "${bio}"
- Core Skills: ${skills}
- Key Achievements: ${achievements}
- Featured Projects:
${projectsList}

[MEDIA ASSET INTEGRATIONS]
1. AI Avatar: Prominently featured in the Hero section and navigation header, enclosed in a glowing circular or rounded-lg glass container.
2. 8-Second Video Introduction: Embedded in a dedicated "Video Intro" interactive module with a clean glassmorphic player shell and sound toggle.

[ENGINEERING & ACCESSIBILITY REQUIREMENTS]
- Fully responsive layout across Desktop (1920x1080), Laptop (1440x900), Tablet, and Mobile devices.
- High color contrast ratio meeting WCAG AAA guidelines.
- Clean semantic HTML5 structure with proper section landmarks and accessible ARIA attributes.
- Smooth zero-jank micro-interactions for button hovers, link highlights, and scroll reveals.`;
}

/**
 * Generates the complete Master Workshop Bundle (All 3 prompts + metadata)
 */
export function generateAllPromptsBundle(profile, avatar, video, portfolio, negativePrompts) {
  const avatarPrompt = generateAvatarPrompt(profile, avatar, negativePrompts);
  const videoPrompt = generateVideoPrompt(profile, avatar, video);
  const portfolioPrompt = generatePortfolioPrompt(profile, avatar, video, portfolio);
  const timestamp = new Date().toISOString();

  return `# ==============================================================================
# AI IDENTITY BUILDER — COMPLETE WORKSHOP ARTIFACT BUNDLE
# Generated for: ${profile.fullName || 'Alex Rivera'} (${profile.role || 'Student'})
# Timestamp: ${timestamp}
# ==============================================================================

# STAGE 01: AI AVATAR PROMPT (GEMINI IMAGE GENERATION)
# Instructions: Copy this prompt and paste into Google Gemini / Imagen 3 to generate your character portrait.
--------------------------------------------------------------------------------
${avatarPrompt}

# ==============================================================================
# STAGE 02: 8-SECOND INTRO VIDEO PROMPT (AI VIDEO GENERATOR)
# Instructions: Upload your generated Avatar image as reference and use this prompt in your AI Video tool.
--------------------------------------------------------------------------------
${videoPrompt}

# ==============================================================================
# STAGE 03: PORTFOLIO WEBSITE SPECIFICATION (ANTIGRAVITY / STITCH)
# Instructions: Pass this specification prompt into Antigravity or Stitch to generate your full portfolio website.
--------------------------------------------------------------------------------
${portfolioPrompt}

# ==============================================================================
# END OF WORKSHOP ARTIFACT BUNDLE — HAPPY CREATING!
# ==============================================================================`;
}
