import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--text-muted)',
        borderTop: '1px solid var(--card-border)',
        fontSize: '0.9rem',
        direction: 'rtl'
      }}>
        <p>© {new Date().getFullYear()} רונן. כל הזכויות שמורות.</p>
        <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>
          Built with React & Vite. Designed with ❤️
        </p>
      </footer>
    </div>
  );
}

export default App;
