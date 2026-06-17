import { Terminal, Database, BrainCircuit } from 'lucide-react';
import Pillar from './Pillar';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">קצת</span> עליי
        </h2>
        
        <div className="about-container">
          <div className="about-visual glass">
            {/* Avatar placeholder */}
            <div className="avatar-placeholder">
              <img 
                src="https://ui-avatars.com/api/?name=Ronen+Dev&background=0D0D12&color=9933FF&size=200" 
                alt="Ronen" 
                className="avatar-img" 
              />
            </div>
            <div className="experience-badge">
              <span className="exp-number gradient-text">+5</span>
              <span className="exp-text">שנות<br/>ניסיון</span>
            </div>
          </div>
          
          <div className="about-content">
            <h3>מהנדס תוכנה עם תשוקה לבינה מלאכותית</h3>
            <p>
              אני מפתח פול-סטאק המתמחה ביצירת ארכיטקטורות תוכנה מודרניות, סקיילביליות ויפהפיות. 
              הגישה שלי משלבת בין חוויית משתמש חלקה בצד הלקוח (Frontend), תשתיות חזקות בצד השרת (Backend), 
              ושילוב חכם של יכולות AI.
            </p>
            <p>
              אני מאמין שקוד טוב הוא קוד קריא, ניתן לתחזוקה ומתוכנן מראש (Mobile-First). אני אוהב לפתור בעיות מורכבות, 
              ללמוד טכנולוגיות חדשות ולהביא ערך אמיתי למשתמשי הקצה ולעסק.
            </p>
            
            <div className="core-pillars">
              <Pillar 
                icon={Terminal} 
                title="Frontend & UI" 
                description="חוויות משתמש אינטראקטיביות (React, Vite)" 
              />
              <Pillar 
                icon={Database} 
                title="Backend Systems" 
                description="מערכות עמידות ומאובטחות (Node.js, SQL/NoSQL)" 
              />
              <Pillar 
                icon={BrainCircuit} 
                title="AI Integration" 
                description="שילוב מודלי שפה ואוטומציות חכמות" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
