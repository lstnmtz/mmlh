import React, { useState } from 'react';
import Link from 'next/link';
import '../app/styles.css';

export default function Visites() {
  const [activeTab, setActiveTab] = useState('Troyes');

  const renderContent = () => {
    switch (activeTab) {
      case 'Troyes':
        return (
          <div>
            <h3>Visites de Troyes</h3>
            <p>Explorez la ville de Troyes avec des anecdotes fascinantes.</p>
            <div className="image-grid">
              <img src="./img/Troyes1.png" alt="Troyes 1" />
              <img src="./img/Troyes2.png" alt="Troyes 2" />
              <img src="./img/Troyes3.png" alt="Troyes 3" />
            </div>
          </div>
        );
      case 'Reims':
        return (
          <div>
            <h3>Visites de Reims</h3>
            <p>Découvrez la ville de Reims et son riche patrimoine historique.</p>
            <div className="image-grid">
              <img src="/img/reims1.jpg" alt="Reims 1" />
              <img src="/img/reims2.jpg" alt="Reims 2" />
              <img src="/img/reims3.jpg" alt="Reims 3" />
            </div>
          </div>
        );
      case 'Langres':
        return (
          <div>
            <h3>Visites de Langres</h3>
            <p>Plongez dans l'histoire de Langres avec nos visites guidées.</p>
            <div className="image-grid">
              <img src="/img/langres1.jpg" alt="Langres 1" />
              <img src="/img/langres2.jpg" alt="Langres 2" />
              <img src="/img/langres3.jpg" alt="Langres 3" />
            </div>
          </div>
        );
      case 'Prochainement':
        return (
          <div>
            <h3>Prochainement</h3>
            <p>Nous prévoyons d'étendre nos visites à d'autres villes prochainement.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <header>
      <nav>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/visites">Les Visites</Link></li>
            <li><Link href="/signin">Compte</Link></li>
          </ul>
        </nav>
        <h1>Montre-moi l'Histoire</h1>
        <p>Par Annabelle Lachapelle</p>
      </header>
      <main>
        <section>
          <h2>Les visites guidées</h2>
          <p>Découvrez les différentes visites guidées et choisissez celle qui vous convient le mieux.</p>
        </section>
        <section>
          <div className="tabs">
            <button onClick={() => setActiveTab('Troyes')}>Troyes</button>
            <button onClick={() => setActiveTab('Reims')}>Reims</button>
            <button onClick={() => setActiveTab('Langres')}>Langres</button>
            <button onClick={() => setActiveTab('Prochainement')}>Prochainement</button>
          </div>
          <div className="tab-content">
            {renderContent()}
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Montre-moi l'Histoire. Tous droits réservés.</p>
      </footer>
    </div>
  );
}