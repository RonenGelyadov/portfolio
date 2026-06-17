import type { FormEvent } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic can be added here
  };

  return (
    <div className="contact-form-container glass">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">שם מלא</label>
          <input type="text" id="name" placeholder="הכנס שם מלא" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">אימייל</label>
          <input type="email" id="email" placeholder="you@example.com" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">נושא</label>
          <input type="text" id="subject" placeholder="באיזה נושא נדבר?" />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">הודעה</label>
          <textarea id="message" rows={5} placeholder="ספר/י לי קצת על הפרויקט..." required></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary submit-btn">
          שלח הודעה <Send size={18} />
        </button>
      </form>
    </div>
  );
}
