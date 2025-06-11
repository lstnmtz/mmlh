import React from 'react';
import { Link } from 'react-router-dom';

const TroyesMedieval = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-neutral-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-pink-dark mb-4 text-3xl font-handwriting">
          Troyes du Moyen-Âge au XIXe siècle
        </h1>
        <p className="text-center text-neutral-dark max-w-2xl mx-auto mb-auto">
          Plongez dans l'histoire de Troyes, du Moyen Âge au XIXe siècle. Des célèbres foires de Champagne à la reconstruction de l'hôtel de ville, en passant par les maisons à encorbellement et le damier champenois, découvrez les richesses architecturales et historiques de la cité des tricasses. Cette visite est disponible en journée mais également à la tombée de la nuit.
        </p>
      </div>
    </section>

    {/* Informations détaillées */}
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl font-bold text-pink-dark mb-4">Informations pratiques</h2>
        <ul className="mb-6 text-neutral-dark">
          <li><span className="font-medium">Durée :</span> 2h</li>
          <li><span className="font-medium">Point de départ :</span> Hôtel de ville</li>
          <li><span className="font-medium">Point d'arrivée :</span> Marché des halles</li>
        </ul>
        <h3 className="text-xl font-bold text-pink-dark mb-2">Tarifs</h3>
        <div className="mb-4">
          <p className="font-medium">En journée :</p>
          <ul className="list-disc pl-6">
            <li>Adulte : 15€</li>
            <li>Tarif réduit : 12,5€</li>
            <li>Enfant (5-12 ans) : 10€</li>
            <li>Groupe : à partir de 142,5€</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-medium">En soirée :</p>
          <ul className="list-disc pl-6">
            <li>Adulte : 17€</li>
            <li>Tarif réduit : 15€</li>
            <li>Enfant (5-12 ans) : 12€</li>
            <li>Groupe : à partir de 161,5€</li>
          </ul>
        </div>
        <p className="mb-4">
          <span className="font-medium">Réservation obligatoire</span> par mail (<a href="mailto:montremoilhistoire@gmail.com" className="text-pink-dark underline">montremoilhistoire@gmail.com</a>)
          ou par téléphone (<a href="tel:0781787265" className="text-pink-dark underline">07 81 78 72 65</a>).
        </p>
        <div className="flex justify-end">
          <Link
            to="/contact"
            state={{ visite: "Troyes du Moyen-Âge au XIXe siècle" }}
            className="btn btn-primary"
          >
            Réserver cette visite
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default TroyesMedieval;