import { Mail, MapPin, Briefcase, GitBranch, MessageSquare } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <h3>בואו נדבר!</h3>
      <p className="contact-desc">
        מחפשים מפתח Full Stack יצירתי, או שיש לכם רעיון לפרויקט AI מעניין? 
        אני תמיד פתוח להצעות חדשות, שיתופי פעולה והזדמנויות מרתקות.
      </p>
      
      <div className="contact-methods">
        <div className="contact-method glass">
          <div className="method-icon"><Mail size={24} /></div>
          <div className="method-details">
            <h4>אימייל</h4>
            <p>ronen@placeholder.com</p>
          </div>
        </div>
        <div className="contact-method glass">
          <div className="method-icon"><MapPin size={24} /></div>
          <div className="method-details">
            <h4>מיקום</h4>
            <p>ישראל (Remote Available)</p>
          </div>
        </div>
      </div>
      
      <div className="contact-socials">
        <h4>מצאו אותי ברשתות:</h4>
        <div className="social-links-grid">
          <a href="#" className="social-box glass" aria-label="LinkedIn"><Briefcase /></a>
          <a href="#" className="social-box glass" aria-label="GitHub"><GitBranch /></a>
          <a href="#" className="social-box glass" aria-label="Twitter"><MessageSquare /></a>
        </div>
      </div>
    </div>
  );
}
