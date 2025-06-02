import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("./images/home.jpeg")',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-white mb-4 drop-shadow-lg animate-fade-in">
            {t('home.title')}
          </h1>
          <p className="text-white text-xl mb-8 max-w-lg mx-auto drop-shadow-md">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/tours" className="btn btn-primary">
              {t('home.cta')}
            </Link>
            <Link to="/about" className="btn btn-outline text-white border-white">
              {t('home.about')}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cities Section */}
      <section className="section container mx-auto">
        <h2 className="text-center mb-12 text-pink-dark">{t('tours.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Troyes */}
          <div className="card-hover rounded-lg overflow-hidden shadow">
            <div className="h-60 relative overflow-hidden">
              <img
                src="./images/troyes.jpg"
                alt="Troyes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-white font-bold drop-shadow-md">
                {t('tours.troyes')}
              </h3>
            </div>
            <div className="p-6">
              <p className="text-neutral-dark mb-4">
                Découvrez les maisons à colombages et l'architecture médiévale de Troyes.
              </p>
              <Link
                to="/tours"
                state={{ city: 'Troyes' }}
                className="text-pink-medium hover:text-pink-dark font-medium flex items-center"
              >
                {t('tours.moreInfo')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Reims */}
          <div className="card-hover rounded-lg overflow-hidden shadow">
            <div className="h-60 relative overflow-hidden">
              <img
                src="./images/reims.jpg"
                alt="Reims"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-white font-bold drop-shadow-md">
                {t('tours.reims')}
              </h3>
            </div>
            <div className="p-6">
              <p className="text-neutral-dark mb-4">
                Explorez la cathédrale gothique et l'histoire du champagne à Reims.
              </p>
              <Link
                to="/tours"
                state={{ city: 'Reims' }}
                className="text-pink-medium hover:text-pink-dark font-medium flex items-center"
              >                {t('tours.moreInfo')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Langres */}
          <div className="card-hover rounded-lg overflow-hidden shadow">
            <div className="h-60 relative overflow-hidden">
              <img
                src="./images/langres.jpg"
                alt="Langres"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-white font-bold drop-shadow-md">
                {t('tours.langres')}
              </h3>
            </div>
            <div className="p-6">
              <p className="text-neutral-dark mb-4">
                Visitez la ville fortifiée de Langres et ses remparts historiques.
              </p>
              <Link
                to="/tours"
                state={{ city: 'Langres' }}
                className="text-pink-medium hover:text-pink-dark font-medium flex items-center"
              >                {t('tours.moreInfo')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="mb-6 text-pink-dark">{t('about.title')}</h2>
              <h3 className="text-xl mb-4">{t('about.intro')}</h3>
              <p className="text-neutral-dark mb-6">
                Passionnée d'histoire et d'art, je vous invite à découvrir les trésors cachés de Troyes, Reims et Langres.
                Mes visites guidées allient connaissance historique, anecdotes passionnantes et approche artistique pour vous
                faire vivre une expérience unique.
              </p>
              <Link to="/about" className="btn btn-primary">
                {t('home.about')}
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-full h-full border-2 border-pink rounded-lg"></div>
                <img
                  src="./images/annabelle2.jpg"
                  alt="Guide touristique"
                  className="rounded-lg shadow-lg w-full h-auto relative z-10"
                />
              </div>
                  <p className="text-xs text-neutral-medium mt-2">© ESTAC Troyes</p>

            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="section container mx-auto px-4">
        <h2 className="text-center mb-2 text-pink-dark">{t('testimonials.title')}</h2>
        <p className="text-center mb-12 text-neutral-dark">{t('testimonials.subtitle')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-light p-6 rounded-lg shadow">
            <div className="flex items-start mb-4">
              <svg className="w-5 h-5 text-pink-medium mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
              <p className="italic text-neutral-dark">
                "Une visite passionnante de Troyes ! Annabelle est une guide exceptionnelle,
                alliant connaissances historiques et passion artistique. Je recommande vivement !"
              </p>
            </div>
            <p className="font-medium">Louis S. | Reims</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/testimonials" className="btn btn-outline">
            {t('testimonials.title')}
          </Link>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section bg-pink-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-pink-dark">{t('contact.title')}</h2>
          <p className="text-neutral-dark mb-8 max-w-2xl mx-auto">
            Prêt à découvrir le patrimoine historique avec un regard artistique unique ?
            Contactez-moi pour organiser votre visite guidée personnalisée à Troyes, Reims ou Langres.
          </p>
          <Link to="/contact" className="btn btn-primary inline-block">
            {t('contact.title')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
