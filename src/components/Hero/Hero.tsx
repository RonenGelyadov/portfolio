import { ArrowLeft, GitBranch, Briefcase, Mail } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="status-badge glass">
            <span className="pulse-dot"></span>
            <span>זמין לעבודה (Open to work)</span>
          </div>
          
          <h1 className="hero-title">
            מפתח <span className="gradient-text">Full Stack</span><br />
            ומומחה <span className="gradient-text">AI</span>
          </h1>
          
          <p className="hero-subtitle">
            אני בונה חוויות ווב יוקרתיות ומערכות חכמות. משלב טכנולוגיות צד-לקוח מתקדמות יחד עם ארכיטקטורת ענן ומודלי בינה מלאכותית (LLMs).
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              צפה בפרויקטים <ArrowLeft size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              צור קשר
            </a>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-icon"><GitBranch /></a>
            <a href="#" className="social-icon"><Briefcase /></a>
            <a href="#" className="social-icon"><Mail /></a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glowing-orb orb-1"></div>
          <div className="glowing-orb orb-2"></div>
          <div className="hero-image-placeholder glass">
             {/* This is a placeholder for a 3D graphic, animation or avatar */}
             <div className="code-snippet">
               <code>
                 <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'} <br/>
                 &nbsp;&nbsp;name: <span className="code-string">'Ronen'</span>,<br/>
                 &nbsp;&nbsp;skills: [<span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'AI'</span>],<br/>
                 &nbsp;&nbsp;passion: <span className="code-string">'Building amazing products'</span><br/>
                 {'}'};
               </code>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
