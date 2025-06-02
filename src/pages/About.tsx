
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { YoutubeStats } from '../components/social/YoutubeStats';
import { YoutubeLastUpdate } from '../components/social/YoutubeLastUpdate';

const About = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-neutral-light py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-pink-dark mb-8">{t('about.title')}</h1>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="absolute -left-3 -top-3 w-full h-full bg-pink-light rounded-full"></div>
                  <img
                    src="./images/annabelle.jpg"
                    alt="Annabelle"
                    className="rounded-full relative z-10 w-64 h-64 object-cover border-4 border-white shadow-lg"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-handwriting text-pink-dark mb-4">{t('about.intro')}</h2>
                <p className="mb-4">
                  Moi, c&apos;est Annabelle.
                </p>
                <p className="mb-4">
                  Le patrimoine a toujours occupé une place centrale dans ma vie. Depuis mon enfance, il constitue l’un de mes centres d’intérêt les plus constants. Mes parents, très investis professionnellement, ne pouvaient pas toujours organiser de longues vacances. À la place, nous profitions de quelques jours pour partir à la découverte de monuments français, principalement des châteaux. C’est au fil de ces escapades que ma passion pour le patrimoine est née. Ces lieux, au-delà de leur architecture impressionnante, me fascinaient par leur ancienneté et les multiples vies qu’ils avaient traversées.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background & Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-handwriting text-pink-dark mb-6">Mon parcours</h2>
            <p className="mb-4">
              Au moment de choisir mon orientation, la voie de l’histoire s’est imposée naturellement. J’ai donc intégré l’Université de Reims Champagne-Ardenne (URCA) pour y suivre une licence d’Histoire, parcours Histoire de l’art et Archéologie.
            </p>
            <p className="mb-4">
              Progressivement, mon projet professionnel s’est précisé. Animée par le désir de partager mes connaissances et anecdotes avec les autres, je me suis tournée vers le métier de guide-conférencière, qui conjugue parfaitement mes passions : le patrimoine, la transmission et le contact humain.
            </p>
            <p className="mb-8">
              Pour atteindre cet objectif, j’ai intégré le master Culture, Patrimoine et Médiation à l’URCA, une formation qui me permettra d’acquérir les compétences nécessaires à l’exercice de ce métier et d’obtenir la carte professionnelle de guide-conférencier, prévue pour l’été 2026.
            </p>

            <h2 className="text-2xl font-handwriting text-pink-dark mb-6">Mes réseaux sociaux</h2>
            <p className="mb-4">
              À côté, j&apos;ai toujours aimé partager mes histoires sur les réseaux sociaux. C&apos;est donc tout
              naturellement que j&apos;ai créé en juin 2021, à l&apos;aube de mes 19 ans, un compte Instagram et un
              compte TikTok nommés Montre-moi l&apos;Histoire. Dessus, je partage de petites vidéos faites à partir
              de mes visites de villages de France.
            </p>
            <p className="mb-4">
              Ce n&apos;est qu&apos;à partir d&apos;août 2024 que je deviens réellement active : je crée des vidéos anecdotes,
              je parle histoire de l&apos;art et je partage mes études. En janvier 2025, j&apos;ose me lancer dans des
              formats plus longs et crée ma chaine YouTube Montre-moi l&apos;Histoire. On y aborde les personnages
              historiques, des périodes chronologiques, l&apos;histoire de la mode ou même des anecdotes plus
              détaillées. En bref : j&apos;essaye de transmettre ma passion au public par le biais des réseaux.
            </p>
            <p className="mb-8">
              Et le public répond assez rapidement :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="bg-neutral-light p-6 rounded-lg text-center">
                <div className="text-pink-dark text-4xl mb-2">1 140 570</div>
                <p>Vues TikTok</p>
                <p className="text-sm text-neutral-dark">2 464 Abonnés</p>
              </div>
              <YoutubeStats />
              <div className="bg-neutral-light p-6 rounded-lg text-center">
                <div className="text-pink-dark text-4xl mb-2">20 430</div>
                <p>Vues Instagram</p>
                <p className="text-sm text-neutral-dark">202 Abonnés</p>
              </div>
              <YoutubeLastUpdate />
            </div>

            <p className="mb-4">
              Installée à Troyes depuis mes 7 ans, j&apos;ai eu le temps d&apos;explorer la ville, son histoire et ses secrets.
              C&apos;est pourquoi, en parallèle de mes études, je vous propose mes services en tant qu&apos;accompagnatrice culturelle.
            </p>
            <p className="mb-4">
              J'ai découvert la ville de Reims lors de ma troisième année de licence d'Histoire. Évidemment, son passé royal m'a immédiatement touché. Mais sa reconstruction d'après-guerre est aussi une des périodes qu'il me semble importante de partager.
            </p>
            <p className="mb-4">
              Quant à Langres, j'ai passé les étés de mon enfance chez mes grands-parents, à arpenter les rues et les campagnes environnantes. C'est pourquoi j'ai naturellement souhaité partager ce patrimoine auprès du public.            </p>
            <p className="mb-4">
              Plusieurs parcours sont disponibles, pensés pour s&apos;adapter à vos envies et à votre curiosité.
            </p>
            <p className="font-medium text-pink-dark">
              Je serais ravie de vous faire (re)découvrir la ville, alors n&apos;hésitez plus !
            </p>
          </div>
        </div>
      </section>

      {/* Languages & Skills */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-handwriting text-pink-dark mb-6">Langues et compétences</h2>

            <div className="mb-8">
              <h3 className="font-semibold mb-3">Langues</h3>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="font-medium">Français</span> (langue maternelle)
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="font-medium">Anglais</span> (courant)
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="font-medium">Espagnol</span> (courant)
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Spécialisations</h3>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">Architecture gothique</div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">Art médiéval</div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">Histoire locale</div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">Vitraux</div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">Patrimoine religieux</div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">Contes et légendes</div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">Gastronomie régionale</div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">Renaissance</div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">XIXe siècle</div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">Révolution industrielle</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
