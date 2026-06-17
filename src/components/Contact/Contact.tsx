import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">צור קשר</span>
        </h2>
        
        <div className="contact-container">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
