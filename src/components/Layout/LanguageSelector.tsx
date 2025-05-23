
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center">
      <button
        onClick={() => setLanguage('fr')}
        className={`px-2 py-1 text-sm ${
          language === 'fr' ? 'text-pink-medium font-medium' : 'text-neutral-dark'
        }`}
      >
        FR
      </button>
      <span className="text-neutral-dark">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-sm ${
          language === 'en' ? 'text-pink-medium font-medium' : 'text-neutral-dark'
        }`}
      >
        EN
      </button>
      <span className="text-neutral-dark">|</span>
      <button
        onClick={() => setLanguage('es')}
        className={`px-2 py-1 text-sm ${
          language === 'es' ? 'text-pink-medium font-medium' : 'text-neutral-dark'
        }`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSelector;
