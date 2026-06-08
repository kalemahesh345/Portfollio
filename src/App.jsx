import Navbar from './components/Navbar';
import BackgroundParticles from './components/BackgroundParticles';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-slate-300 overflow-x-hidden selection:bg-primary-500/30 selection:text-white">
      {/* Premium custom mouse cursor */}
      <CustomCursor />

      {/* Interactive Background Particles and Glowing Spotlights */}
      <BackgroundParticles />

      {/* Floating Glass Navigation Menu */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
