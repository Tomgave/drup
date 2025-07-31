
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Drup</title>
        <meta name="description" content="La vente qui baisse jusqu’à ce que vous craquiez." />
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <img src="/logo.png" alt="Logo Drup" style={{ height: '80px', marginBottom: '2rem' }} />
        <h1>Bienvenue sur Drup – La vente qui baisse jusqu’à ce que vous craquiez.</h1>
        <p style={{ marginTop: '2rem' }}>[Produits test à venir ici]</p>
      </main>
    </>
  );
}
