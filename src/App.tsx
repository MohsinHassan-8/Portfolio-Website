import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';

function App() {
  return (
    <div className="bg-ink" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
