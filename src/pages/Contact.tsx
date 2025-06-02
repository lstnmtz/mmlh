import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const toursList = [
    {
      city: "Troyes",
      tours: [
        { id: "troyes-medieval", title: "Troyes du Moyen-Âge au XIXe siècle" },
        { id: "troyes-religieuse", title: "Troyes la religieuse" },
        { id: "troyes-rurale", title: "Troyes la rurale" },
      ],
    },
    {
      city: "Reims",
      tours: [
        // Ajoute ici les visites de Reims si besoin
      ],
    },
    {
      city: "Langres",
      tours: [
        // Ajoute ici les visites de Langres si besoin
      ],
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    participants: '',
    tour: '',
    date: '',
    message: '',
    question: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les meilleurs délais.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      participants: '',
      tour: '',
      date: '',
      message: '',
      question: '',
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-neutral-light py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-pink-dark mb-4">{t('contact.title')}</h1>
          <p className="text-center text-neutral-dark max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* Form Column */}
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-1">
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-medium rounded-md focus:ring-2 focus:ring-pink focus:border-pink outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-medium rounded-md focus:ring-2 focus:ring-pink focus:border-pink outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-1">
                      {t('contact.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-medium rounded-md focus:ring-2 focus:ring-pink focus:border-pink outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="participants" className="block text-sm font-medium text-neutral-dark mb-1">
                      {t('contact.participants')}
                    </label>
                    <input
                      type="number"
                      id="participants"
                      name="participants"
                      min="1"
                      value={formData.participants}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-medium rounded-md focus:ring-2 focus:ring-pink focus:border-pink outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="tour" className="block text-sm font-medium text-neutral-dark mb-1">
                    Choisissez votre visite *
                  </label>
                  <select
                    id="tour"
                    name="tour"
                    value={formData.tour}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-medium rounded-md focus:ring-2 focus:ring-pink focus:border-pink outline-none transition bg-white"
                  >
                    <option value="">Sélectionnez une visite ou posez une question</option>
                    {toursList.map(group => (
                      <React.Fragment key={group.city}>
                        <option disabled className="bg-neutral-light text-neutral-medium">{group.city}</option>
                        {group.tours.map(tour => (
                          <option key={tour.id} value={tour.title}>{tour.title}</option>
                        ))}
                      </React.Fragment>
                    ))}
                    <option value="question" className="font-semibold text-pink-dark">Une question ?</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-neutral-dark mb-1">
                    {t('contact.date')}
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-medium rounded-md focus:ring-2 focus:ring-pink focus:border-pink outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-medium rounded-md focus:ring-2 focus:ring-pink focus:border-pink outline-none transition"
                  ></textarea>
                </div>

                <div className="text-right">
                  <button type="submit" className="btn btn-primary">
                    {t('contact.send')}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info Column */}
            <div className="lg:w-1/3 bg-neutral-light rounded-lg p-6 h-fit">
              <h2 className="text-2xl font-handwriting text-pink-dark mb-6">Informations de contact</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-medium mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-neutral-dark">07 81 78 72 65</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-medium mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-neutral-dark">montremoilhistoire@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-medium mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Disponibilité</p>
                    <p className="text-neutral-dark">{t('contact.response')}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-medium">
                  <p className="font-medium mb-2">Réseaux sociaux</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-dark hover:text-pink-medium transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-dark hover:text-pink-medium transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-dark hover:text-pink-medium transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                    <a 
                      href="https://tiktok.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-dark hover:text-pink-medium transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"></path>
                        <path d="M15 8c0 1.657-1.343 3-3 3"></path>
                        <path d="M20 6c-1.657 0-3-1.343-3-3"></path>
                        <path d="M20 6v8"></path>
                        <path d="M12 11V3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-handwriting text-pink-dark mb-8 text-center">Zones d'activité</h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65066.443936138814!2d4.051650940609216!3d48.297761958865586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ee9857e787b7b1%3A0x57dd125566e84f75!2s10000%20Troyes%2C%20France!5e0!3m2!1sen!2sus!4v1747905438432!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              className="rounded-lg shadow-lg"
              title="Zones d'activité"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
