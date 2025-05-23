
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  
  // FAQ items
  const faqItems = [
    {
      question: "Quels sont les tarifs des visites guidées ?",
      answer: "Les tarifs varient selon la durée et le type de visite. Pour une visite standard de 2h, comptez 15€ par personne (tarif réduit à 10€ pour les étudiants et enfants). Des tarifs de groupe sont disponibles à partir de 10 personnes. N'hésitez pas à me contacter pour un devis personnalisé."
    },
    {
      question: "Quelle est la durée moyenne d'une visite ?",
      answer: "La plupart des visites durent entre 1h30 et 2h30. Cette durée est adaptable selon vos souhaits et contraintes. Des pauses sont prévues pour les visites plus longues."
    },
    {
      question: "Les visites sont-elles accessibles aux personnes à mobilité réduite ?",
      answer: "La plupart des circuits sont adaptables pour les personnes à mobilité réduite. Certains sites historiques peuvent présenter des difficultés d'accès. Merci de me préciser vos besoins spécifiques lors de la réservation afin que je puisse adapter l'itinéraire."
    },
    {
      question: "Combien de personnes peuvent participer à une visite ?",
      answer: "Les visites peuvent accueillir de 1 à 30 personnes. Pour les groupes plus importants, je peux organiser plusieurs guides ou des visites échelonnées. La taille idéale est de 12-15 personnes pour garantir une expérience de qualité."
    },
    {
      question: "Dans quelles langues les visites sont-elles proposées ?",
      answer: "Les visites sont disponibles en français, anglais et espagnol. Je m'adapte à votre niveau de langue et à vos besoins spécifiques."
    },
    {
      question: "Comment réserver une visite ?",
      answer: "Vous pouvez réserver en me contactant directement par email, téléphone, ou en remplissant le formulaire de contact sur ce site. Il est recommandé de réserver au moins une semaine à l'avance, surtout pendant la haute saison touristique."
    },
    {
      question: "Que se passe-t-il en cas de mauvais temps ?",
      answer: "Les visites ont lieu par tous les temps, sauf conditions météorologiques exceptionnelles (alerte orange/rouge). En cas de pluie, j'adapte le parcours pour inclure plus d'étapes abritées. Des parapluies peuvent être fournis sur demande."
    },
    {
      question: "Les visites sont-elles adaptées aux enfants ?",
      answer: "Absolument ! Je propose des visites spécialement conçues pour les familles avec enfants, incluant des activités ludiques et une approche pédagogique adaptée. L'âge idéal est à partir de 6 ans, mais j'accueille les plus jeunes avec plaisir."
    },
    {
      question: "Peut-on prendre des photos pendant les visites ?",
      answer: "La photographie est généralement autorisée, sauf indication contraire dans certains sites spécifiques. Je vous indiquerai les restrictions éventuelles au début de la visite."
    },
    {
      question: "Proposez-vous des visites pour les groupes scolaires ?",
      answer: "Oui, je propose des visites adaptées aux différents niveaux scolaires, de la primaire au lycée, avec des contenus pédagogiques en lien avec les programmes d'histoire, d'histoire de l'art et de français. Des dossiers pédagogiques peuvent être fournis aux enseignants sur demande."
    }
  ];

  // State for accordion
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-neutral-light py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-pink-dark mb-4">{t('faq.title')}</h1>
          <p className="text-center text-neutral-dark max-w-2xl mx-auto">
            Retrouvez ici les réponses aux questions les plus fréquemment posées sur mes visites guidées.
            Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à me contacter.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button 
                  className={`w-full text-left p-4 flex justify-between items-center bg-white hover:bg-neutral-light transition-colors ${openItems.includes(index) ? 'bg-neutral-light' : ''}`}
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-medium">{item.question}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transition-transform ${openItems.includes(index) ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openItems.includes(index) && (
                  <div className="p-4 bg-white border-t">
                    <p className="text-neutral-dark">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-pink-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-handwriting text-pink-dark mb-4">Vous avez d'autres questions ?</h2>
          <p className="text-neutral-dark max-w-2xl mx-auto mb-8">
            N'hésitez pas à me contacter pour toute question supplémentaire ou pour organiser une visite personnalisée.
          </p>
          <Link to="/contact" className="btn btn-primary">
            {t('contact.title')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
