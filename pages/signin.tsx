import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import '../app/styles.css';

export default function SignIn() {
  const { data: session } = useSession();

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
          <h2>Gestion des Comptes</h2>
          {!session ? (
            <>
              <p>Vous n'êtes pas connecté.</p>
              <button onClick={() => signIn('google')}>Se connecter</button>
            </>
          ) : (
            <>
              <p>Connecté en tant que {session.user.email}</p>
              <button onClick={() => signOut()}>Se déconnecter</button>
            </>
          )}
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Montre-moi l'Histoire. Tous droits réservés.</p>
      </footer>
    </div>
  );
}