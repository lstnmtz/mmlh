
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'fr' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  // Navigation
  'nav.home': {
    fr: 'Accueil',
    en: 'Home',
    es: 'Inicio'
  },
  'nav.about': {
    fr: 'À propos',
    en: 'About',
    es: 'Sobre mí'
  },
  'nav.tours': {
    fr: 'Visites guidées',
    en: 'Guided Tours',
    es: 'Visitas guiadas'
  },
  'nav.faq': {
    fr: 'FAQ',
    en: 'FAQ',
    es: 'Preguntas frecuentes'
  },
  'nav.testimonials': {
    fr: 'Témoignages',
    en: 'Testimonials',
    es: 'Testimonios'
  },
  'nav.contact': {
    fr: 'Contact',
    en: 'Contact',
    es: 'Contacto'
  },
  
  // Home page
  'home.title': {
    fr: 'Découvrez le patrimoine autrement',
    en: 'Discover heritage in a new way',
    es: 'Descubre el patrimonio de otra manera'
  },
  'home.subtitle': {
    fr: 'Visites guidées à Troyes, Reims et Langres',
    en: 'Guided tours in Troyes, Reims and Langres',
    es: 'Visitas guiadas en Troyes, Reims y Langres'
  },
  'home.cta': {
    fr: 'Découvrir les visites',
    en: 'Discover tours',
    es: 'Descubrir visitas'
  },
  'home.about': {
    fr: 'En savoir plus',
    en: 'Learn more',
    es: 'Saber más'
  },
  
  // About section
  'about.title': {
    fr: 'À propos',
    en: 'About',
    es: 'Sobre mí'
  },
  'about.intro': {
    fr: 'Guide conférencière passionnée',
    en: 'Passionate tour guide',
    es: 'Guía turística apasionada'
  },
  
  // Tours section
  'tours.title': {
    fr: 'Visites Guidées',
    en: 'Guided Tours',
    es: 'Visitas Guiadas'
  },
  'tours.subtitle': {
    fr: 'Découvrez les trésors historiques',
    en: 'Discover historical treasures',
    es: 'Descubre tesoros históricos'
  },
  'tours.troyes': {
    fr: 'Troyes',
    en: 'Troyes',
    es: 'Troyes'
  },
  'tours.reims': {
    fr: 'Reims',
    en: 'Reims',
    es: 'Reims'
  },
  'tours.langres': {
    fr: 'Langres',
    en: 'Langres',
    es: 'Langres'
  },
  'tours.moreInfo': {
    fr: 'Plus d\'informations',
    en: 'More information',
    es: 'Más información'
  },
  
  // FAQ section
  'faq.title': {
    fr: 'Questions Fréquentes',
    en: 'Frequently Asked Questions',
    es: 'Preguntas Frecuentes'
  },
  
  // Testimonials section
  'testimonials.title': {
    fr: 'Témoignages',
    en: 'Testimonials',
    es: 'Testimonios'
  },
  'testimonials.subtitle': {
    fr: 'Ce que disent les visiteurs',
    en: 'What visitors say',
    es: 'Lo que dicen los visitantes'
  },
  
  // Contact section
  'contact.title': {
    fr: 'Contact',
    en: 'Contact',
    es: 'Contacto'
  },
  'contact.subtitle': {
    fr: 'Prenez rendez-vous pour une visite',
    en: 'Book a tour',
    es: 'Reserve una visita'
  },
  'contact.name': {
    fr: 'Nom',
    en: 'Name',
    es: 'Nombre'
  },
  'contact.email': {
    fr: 'Email',
    en: 'Email',
    es: 'Correo electrónico'
  },
  'contact.phone': {
    fr: 'Téléphone',
    en: 'Phone',
    es: 'Teléfono'
  },
  'contact.message': {
    fr: 'Message',
    en: 'Message',
    es: 'Mensaje'
  },
  'contact.participants': {
    fr: 'Nombre de participants',
    en: 'Number of participants',
    es: 'Número de participantes'
  },
  'contact.date': {
    fr: 'Date souhaitée',
    en: 'Desired date',
    es: 'Fecha deseada'
  },
  'contact.send': {
    fr: 'Envoyer',
    en: 'Send',
    es: 'Enviar'
  },
  'contact.response': {
    fr: 'Réponse sous 48h',
    en: 'Response within 48 hours',
    es: 'Respuesta dentro de 48 horas'
  },
  
  // Footer
  'footer.rights': {
    fr: 'Tous droits réservés',
    en: 'All rights reserved',
    es: 'Todos los derechos reservados'
  },
  'footer.legal': {
    fr: 'Mentions légales',
    en: 'Legal notice',
    es: 'Aviso legal'
  },
  'footer.privacy': {
    fr: 'Politique de confidentialité',
    en: 'Privacy policy',
    es: 'Política de privacidad'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    if (!translation) return key;
    return translation[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
