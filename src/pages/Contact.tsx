import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const location = useLocation();
  const visite = location.state?.visite || "";

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

  useEffect(() => {
    if (visite) {
      setFormData(prev => ({ ...prev, tour: visite }));
    }
  }, [visite]);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Envoi à toi (admin)
    emailjs.send(
      'service_6z84iyd',
      'template_gek4tiu', // ton template admin
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        participants: formData.participants,
        tour: formData.tour,
        date: formData.date,
        message: formData.message,
        question: formData.question,
      },
      'YZpNifJ-smQjezHI-'
    );

    // Envoi au client
    emailjs.send(
      'service_6z84iyd',
      'template_3kdc34d', // ton template client
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        participants: formData.participants,
        tour: formData.tour,
        date: formData.date,
        message: formData.message,
        question: formData.question,
      },
      'YZpNifJ-smQjezHI-'
    )
      .then(() => {
        toast({
          title: "Message envoyé !",
          description: "Merci pour votre message. Je vous répondrai dans les meilleurs délais.",
        });
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
      })
      .catch(() => {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi du message.",
        });
      });
  };

  const today = new Date();
  const minDate = new Date(today.setDate(today.getDate() + 7))
    .toISOString()
    .split('T')[0];

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
                      {t('contact.phone')} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-medium rounded-md focus:ring-2 focus:ring-pink focus:border-pink outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="participants" className="block text-sm font-medium text-neutral-dark mb-1">
                      {t('contact.participants')} *
                    </label>
                    <input
                      type="number"
                      id="participants"
                      name="participants"
                      min="1"
                      value={formData.participants}
                      onChange={handleChange}
                      required
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
                    {t('contact.date')} *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={minDate}
                    required
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
                      href="https://www.tiktok.com/@montremoilhistoire"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Tiktok"
                      className="hover:scale-110 transition"
                    >
                      <img src="/icons/tiktok.svg" alt="Tiktok" className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.youtube.com/@MontremoilHistoire/?sub_confirmation=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Youtube"
                      className="hover:scale-110 transition"
                    >
                      <img src="/icons/youtube.svg" alt="Youtube" className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/montremoilhistoire/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="hover:scale-110 transition"
                    >
                      <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
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
