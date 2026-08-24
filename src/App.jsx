import React from 'react';
import { useWorkshop } from './context/WorkshopContext';
import Header from './components/common/Header';
import Toast from './components/common/Toast';
import ProfileModal from './components/profile/ProfileModal';
import Step01Avatar from './components/steps/Step01Avatar';
import Step02Video from './components/steps/Step02Video';
import Step03Portfolio from './components/steps/Step03Portfolio';
import Step04Summary from './components/steps/Step04Summary';

export default function App() {
  const { currentStep } = useWorkshop();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Persistent Navigation Header with Breadcrumbs & Progress */}
      <Header />

      {/* Global Profile Modal / Drawer */}
      <ProfileModal />

      {/* Animated Toast Stack */}
      <Toast />

      {/* Main Studio Viewport */}
      <main className="app-container" style={{ flex: 1 }}>
        {currentStep === 1 && <Step01Avatar />}
        {currentStep === 2 && <Step02Video />}
        {currentStep === 3 && <Step03Portfolio />}
        {currentStep === 4 && <Step04Summary />}
      </main>
    </div>
  );
}
