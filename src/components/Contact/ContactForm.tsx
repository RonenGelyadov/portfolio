import { Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ContactForm } from '../../types/ContactForm';
import sendEmail from '../../services/emailJsService';

export default function ContactForm() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm<ContactForm>();

  const onFormSubmit = async (data: Omit<ContactForm, 'time'>) => {
    reset();
    setIsLoading(true);

    const response = await sendEmail(data);

    setMessage(response);
    setIsLoading(false);
  };

  return (
    <div className="contact-form-container glass">
      <p>{isLoading ? 'מבצע שליחת פניה' : message}</p>
      <form className="contact-form" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-group">
          <label htmlFor="name">שם מלא</label>
          <input
            {...register('name')}
            type="text"
            id="name"
            placeholder="הכנס שם מלא"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">אימייל</label>
          <input
            {...register('reply_to')}
            type="email"
            id="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">נושא</label>
          <input
            {...register('title')}
            type="text"
            id="subject"
            placeholder="באיזה נושא נדבר?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">הודעה</label>
          <textarea
            {...register('message')}
            id="message"
            rows={5}
            placeholder="ספר/י לי קצת על הפרויקט..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary submit-btn">
          שלח הודעה <Send size={18} />
        </button>
      </form>
    </div>
  );
}
