import React from 'react';
import Link from 'next/link';
import '../app/styles.css';

export default function Home() {
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
          <h2>Bienvenue sur Montre-moi l'Histoire</h2>
          <p>Découvrez les visites guidées immersives et passionnantes de Troyes, Reims et Langres.</p>
        </section>
        <section>
          <h2>Mes réseaux sociaux</h2>
          <ul>
            <li><a href="https://www.tiktok.com/@montremoilhistoire" target="_blank">TikTok</a></li>
            <li><a href="https://www.instagram.com/montremoilhistoire" target="_blank">Instagram</a></li>
            <li><a href="https://www.youtube.com/@MontremoilHistoire" target="_blank">YouTube</a></li>
            <li><a href="https://www.facebook.com/people/Montre-Moi-lHistoire/61562278697943/" target="_blank">Facebook</a></li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Montre-moi l'Histoire. Tous droits réservés.</p>
      </footer>
    </div>
  );
}