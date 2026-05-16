import { useState } from 'react';

export const useContactForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    
    const subject = encodeURIComponent(`Project Inquiry: ${service} - dari ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\nLayanan yang dibutuhkan: ${service}\n\nDetail Proyek:\n${message}`);
    
    window.location.href = `mailto:qolbulmuzaki@gmail.com?subject=${subject}&body=${body}`;
  };

  return { formData, handleChange, handleSendMessage };
};
