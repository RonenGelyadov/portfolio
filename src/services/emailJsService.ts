import emailjs from "@emailjs/browser";
import type { ContactForm } from "../types/ContactForm";

const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const sendEmail = async (formData: Omit<ContactForm, "time">) => {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = String(now.getFullYear()).slice(-2);

  const formattedDate = `${hours}:${minutes} ${day}/${month}/${year}`;

  const emailData = {
    ...formData,
    time: formattedDate,
  };

  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      emailData as ContactForm,
      PUBLIC_KEY,
    );

    if (result.status === 200 || result.text === "OK") {
      return "פנייתך התקבלה";
    }
  } catch (err) {
    console.log(err);
    return "שגיאה בשליחת הפניה";
  }
};
