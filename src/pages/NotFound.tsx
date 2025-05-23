
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-light py-16 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-handwriting text-pink-dark mb-4">404</h1>
        <h2 className="text-2xl mb-8">Page non trouvée</h2>
        <p className="text-neutral-dark mb-12">
          Oups ! La page que vous recherchez semble avoir disparu dans les méandres de l'histoire. 
          Peut-être est-elle partie visiter la cathédrale de Reims ou se promener dans les rues médiévales de Troyes ?
        </p>
        <Link to="/" className="btn btn-primary">
          {t('nav.home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
