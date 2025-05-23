
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
                  Je ne me souviens pas d&apos;une seule année dans ma vie sans que le patrimoine ne soit un de mes intérêts.
                  Petite, je partais peu en vacances traditionnelles, mes parents travaillant beaucoup.
                  À la place, nous partions deux ou trois jours découvrir des monuments français, la plupart étant des châteaux.
                  C&apos;est ainsi qu&apos;est née ma passion pour le patrimoine, c&apos;est dans ces lieux que je me sens bien.
                  Certes, ils impressionnent par leur architecture, mais ce qui me fascinait aussi était le fait qu&apos;ils soient là
                  depuis plus longtemps que nous et qu&apos;ils aient connus de nombreuses vies.
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
              En grandissant, il a fallu que je m&apos;oriente. La voie la plus claire était alors de partir
              en licence d&apos;histoire puisque c&apos;était une matière que j&apos;aimais et qui m&apos;était la plus facile.
              C&apos;est ainsi que je suis entrée à l&apos;URCA pour une licence d&apos;Histoire parcours Histoire de l&apos;art et Archéologie.
            </p>
            <p className="mb-4">
              Mon projet professionnel se dessinant peu à peu, toujours passionnée par le patrimoine et aimant
              transmettre des anecdotes aux autres, je trouve le métier de mes rêves : guide-conférencière.
            </p>
            <p className="mb-8">
              Pour me diriger vers ce métier, je décide d&apos;intégrer le master Culture, Patrimoine et Médiation
              de l&apos;URCA, dans le but de me former et d&apos;obtenir la carte de guide-conférencier, qui me sera
              délivrée à la fin de mes études, à l&apos;été 2026.
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
