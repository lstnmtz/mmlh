
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  
  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      name: "Louis S.",
      location: "Reims",
      text: "Une visite passionnante de Troyes ! Annabelle est une guide exceptionnelle, alliant connaissances historiques et passion artistique. Sa façon de raconter l'histoire de la ville m'a fait voyager dans le temps. Je recommande vivement !",
      tour: "Troyes du Moyen-Âge au XIXe siècle",
      rating: 5
    }
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-neutral-light py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-pink-dark mb-4">{t('testimonials.title')}</h1>
          <p className="text-center text-neutral-dark max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-lg shadow-md border border-neutral-light hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-2 mb-4">
                  <svg className="w-6 h-6 text-pink-medium flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                  <p className="italic text-neutral-dark">{testimonial.text}</p>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-neutral-dark">{testimonial.location}</p>
                    <p className="text-sm text-pink-medium mt-1">{testimonial.tour}</p>
                  </div>
                  
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-pink-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-handwriting text-pink-dark mb-4">Prêt à vivre votre propre expérience ?</h2>
          <p className="text-neutral-dark max-w-2xl mx-auto mb-8">
            Rejoignez les nombreux visiteurs satisfaits et découvrez le patrimoine de Troyes, Reims et Langres avec passion et créativité.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/tours" className="btn btn-primary">
              {t('nav.tours')}
            </Link>
            <Link to="/contact" className="btn btn-outline">
              {t('contact.title')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
