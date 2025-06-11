import React from 'react';
import { Link } from 'react-router-dom';

const TroyesReligieuse = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-neutral-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-pink-dark mb-4 text-3xl font-handwriting">
          Troyes la religieuse
        </h1>
        <p className="text-center text-neutral-dark max-w-2xl mx-auto mb-auto">
          Le patrimoine religieux occupe une place centrale dans l’histoire de Troyes. Capitale historique de la Champagne, la ville s’est construite autour de ses édifices sacrés, témoins de sa richesse médiévale et de son rayonnement spirituel. Cathédrale, églises, collégiales ou encore couvents illustrent non seulement la foi d’une époque, mais aussi le savoir-faire architectural et artistique local. À travers une dizaine d’édifices religieux, c’est toute une mémoire collective, entre art, pouvoir et spiritualité, qui s’offre au regard. Dans ce parcours, je vous propose de partir à la découverte de l’histoire de la ville à travers quelques unes de ces constructions.
        </p>
      </div>
    </section>

    {/* Informations détaillées */}
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl font-bold text-pink-dark mb-4">Informations pratiques</h2>
        <ul className="mb-6 text-neutral-dark">
          <li><span className="font-medium">Temps de visite :</span> environ 2h00</li>
          <li><span className="font-medium">Départ :</span> Cathédrale</li>
          <li><span className="font-medium">Arrivée :</span> À DÉTERMINER</li>
        </ul>
        <h3 className="text-xl font-bold text-pink-dark mb-2">Tarifs</h3>
        <div className="mb-4">
          <p className="font-medium">Visite publique - Individuels :</p>
          <ul className="list-disc pl-6">
            <li>Adultes : 15€</li>
            <li>Réduits (13-17 ans, étudiants, mobilité réduite, résidents de Troyes et agglomération) : 12,5€</li>
            <li>Enfants (5-12 ans) : 10€</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-medium">Visite privatisée :</p>
          <ul className="list-disc pl-6">
            <li>À partir de 142,5€* <span className="text-xs">(*Groupes scolaires, associations, groupes d’adultes, …)</span></li>
            <li>Un groupe est constitué d’un minimum de 10 personnes.</li>
            <li>Possibilité d’accueillir jusqu’à 30 personnes par groupe. Au-delà, un supplément est appliqué.</li>
            <li>Personnalisation possible (sur demande lors de la réservation, au moins 15 jours avant) : supplément de 25€ par groupe.</li>
          </ul>
        </div>
        <p className="mb-4">
          <span className="font-medium">Réservation obligatoire</span> par mail (<a href="mailto:montremoilhistoire@gmail.com" className="text-pink-dark underline">montremoilhistoire@gmail.com</a>)
          ou par téléphone (<a href="tel:0781787265" className="text-pink-dark underline">07 81 78 72 65</a>).
        </p>
        <div className="flex justify-end">
          <Link
            to="/contact"
            state={{ visite: "Troyes la religieuse" }}
            className="btn btn-primary"
          >
            Réserver cette visite
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default TroyesReligieuse;