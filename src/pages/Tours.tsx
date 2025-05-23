import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Tours = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const cityFromState = location.state?.city || null;
  const getInitialCity = () => cityFromState || localStorage.getItem('selectedCity') || null;
  const [selectedCity, setSelectedCity] = useState<string | null>(getInitialCity);

  // Met à jour selectedCity si location.state.city change
  useEffect(() => {
    if (location.state?.city) {
      setSelectedCity(location.state.city);
    }
  }, [location.state?.city]);

  // Sauvegarde la sélection à chaque changement
  useEffect(() => {
    if (selectedCity) {
      localStorage.setItem('selectedCity', selectedCity);
    } else {
      localStorage.removeItem('selectedCity');
    }
  }, [selectedCity]);

  // Sample tour data
  const tours = [
    {
      id: 'troyes-medieval',
      city: 'Troyes',
      title: 'Troyes du Moyen-Âge au XIXe siècle',
      description: "Plongez dans l'histoire de Troyes, du Moyen Âge au XIXe siècle. Des célèbres foires de Champagne à la reconstruction de l'hôtel de ville, en passant par les maisons à encorbellement et le damier champenois, découvrez les richesses architecturales et historiques de la cité des tricasses. Cette visite est disponible en journée mais également à la tombée de la nuit.",
      duration: '2h',
      image: './images/troyes-medieval.jpg',
      details: {
        meeting: "Hôtel de ville",
        ending: "Marché des halles",
        dayPrices: {
          adult: "15€",
          reduced: "12,5€",
          child: "10€",
          group: "à partir de 142,5€"
        },
        nightPrices: {
          adult: "17€",
          reduced: "15€",
          child: "12€",
          group: "à partir de 161,5€"
        }
      }
    },
    {
      id: 'troyes-religieuse',
      city: 'Troyes',
      title: 'Troyes la religieuse',
      description: "Le patrimoine religieux occupe une place centrale dans l'histoire de Troyes. Capitale historique de la Champagne, la ville s'est construite autour de ses édifices sacrés, témoins de sa richesse médiévale et de son rayonnement spirituel. Cathédrale, églises, collégiales ou encore couvents illustrent non seulement la foi d'une époque, mais aussi le savoir-faire architectural et artistique local.",
      duration: '2h',
      image: './images/troyes-religieuse.jpg',
      details: {
        meeting: "Cathédrale",
        ending: "À déterminer",
        prices: {
          adult: "15€",
          reduced: "12,5€",
          child: "10€",
          group: "à partir de 142,5€"
        }
      }
    },
    {
      id: 'troyes-rurale',
      city: 'Troyes',
      title: 'Troyes la rurale',
      description: "À travers ce parcours, découvrez Troyes sous un autre angle ! L'activité rurale a joué un rôle fondamental dans le développement de la ville : de l'usage du bois dans l'architecture à la prospérité des foires de Champagne, en passant par l'essor spirituel qui a conduit à la construction de nombreuses églises. Et si vous exploriez cette facette méconnue de la cité tricasse ?",
      duration: '1h30',
      image: './images/troyes-rurale.jpg',
      details: {
        meeting: "Place de l'hôtel de ville",
        ending: "Place de l'hôtel de ville",
        prices: {
          adult: "12€",
          reduced: "10€",
          child: "8€",
          group: "à partir de 114€"
        }
      }
    }
  ];

  // Group tours by city
  const toursByCity = tours.reduce((acc, tour) => {
    if (!acc[tour.city]) {
      acc[tour.city] = [];
    }
    acc[tour.city].push(tour);
    return acc;
  }, {} as Record<string, typeof tours>);

  // Liste des villes pour les boutons
  const cities = ['Troyes', 'Reims', 'Langres'];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-neutral-light py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-pink-dark mb-4">{t('tours.title')}</h1>
          <p className="text-center text-neutral-dark max-w-2xl mx-auto mb-auto">
            {t('tours.subtitle')}
          </p>
        </div>
      </section>
      

      {/* City Description - Troyes */}
      <section className="py-8 border-b">
        {/* Filtres par ville - déplacés ici */}
        <div className="flex gap-4 justify-center mb-2">
          {cities.map(city => (
            <button
              key={city}
              className={`px-4 py-2 rounded border font-medium transition 
                  ${selectedCity === city ? 'bg-pink-dark text-white border-pink-dark' : 'bg-white text-pink-dark border-pink-dark hover:bg-pink-light/20'}`}
              onClick={() => setSelectedCity(selectedCity === city ? null : city)}
              type="button"
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      {selectedCity && !toursByCity[selectedCity] && (
        <section className="py-16 border-b last:border-b-0">
          <div className="container mx-auto px-4 text-center">
            <p className="text-2xl text-pink-dark font-handwriting">Coming Soon...</p>
          </div>
        </section>
      )}

      {/* City Description - Troyes - Texte supplémentaire */}
      {selectedCity === 'Troyes' && (
        <section className="py-8 border-b last:border-b-0">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-handwriting text-pink-dark mb-4">Troyes</h2>
              <p className="text-neutral-dark mb-6">
                Située dans les méandres de la Seine, Troyes est une ville connue pour sa présence importante
                à l'époque médiévale, mais son histoire remonte à bien plus loin !
              </p>
              <p className="text-neutral-dark mb-6">
                A l'époque gauloise, on atteste la présence de la tribu des Tricasses bien que nous ne connaissons
                pas exactement la localisation de leur oppidum (village). A l'époque gallo-romaine, la cité
                Tricasse devient Augustobona-Tricassium. La ville n'a donc pas attendu le Moyen-Âge pour s'établir…
              </p>
              <p className="text-neutral-dark">
                Si l'époque médiévale marque toutefois son essor, trois périodes sont charnières dans son histoire :
                les foires de Champagne, le beau XVIe siècle et la bonneterie du XIXe siècle. Mais ça, on le
                découvrira ensemble à travers les divers parcours que je vous propose à la visite !
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Tours by City */}
      {selectedCity && Object.entries(toursByCity)
        .filter(([city]) => selectedCity === city)
        .map(([city, cityTours]) => (
          <section key={city} className="py-16 border-b last:border-b-0">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cityTours.map(tour => (
                  <div key={tour.id} className="card-hover rounded-lg overflow-hidden shadow">
                    <div className="h-64 relative overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-xl font-bold">{tour.title}</h3>
                        <div className="flex items-center text-white/90 text-sm mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {tour.duration}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-neutral-dark mb-4">{tour.description}</p>
                      <Link
                        to={`/tours/${tour.id}`}
                        className="text-pink-medium hover:text-pink-dark font-medium flex items-center"
                      >
                        {t('tours.moreInfo')}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

      {/* Custom Tours Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-handwriting text-pink-dark mb-4">Visites personnalisées</h2>
          <p className="text-neutral-dark max-w-2xl mx-auto mb-8">
            Vous souhaitez une visite adaptée à vos centres d&apos;intérêt ou aux besoins spécifiques de votre groupe ?
            Je crée des parcours sur mesure pour les groupes scolaires, les entreprises, ou pour toute occasion spéciale.
          </p>
          <div className="mb-8">
            <p className="font-medium">Pour les visites privatisées, possibilité de personnalisation de la visite.</p>
            <p className="text-sm">Dans ce cas, faire la demande lors de la réservation (au moins 15 jours avant).</p>
            <p className="text-sm">Un supplément de 25€ par groupe est à prévoir.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            {t('contact.title')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Tours;
