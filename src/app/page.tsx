'use client';

import { useState } from 'react';
import FairScoreWidget from '../components/FairScoreWidget';

export default function Home() {
  const [connected, setConnected] = useState(false);
  
  const handleConnect = () => {
    // Mock wallet connection
    setConnected(true);
    alert('Wallet connecté !');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="flex justify-between items-center mb-16">
        <h1 className="text-3xl font-bold text-indigo-900">RepuLend</h1>
        <button 
          onClick={handleConnect}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          {connected ? 'Déjà connecté' : 'Connect Wallet'}
        </button>
      </header>

      <section className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Emprunter sans sur-collatéral
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
          Votre FairScore détermine vos conditions. Bonne réputation = meilleurs taux.
        </p>
        <FairScoreWidget />
      </section>

      <section className="mb-20">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Comment ça marche</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-2xl font-bold text-indigo-600 mb-2">1</div>
            <h4 className="text-xl font-semibold mb-2">Connectez votre wallet</h4>
            <p className="text-gray-600">Liez votre portefeuille Solana pour commencer.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-2xl font-bold text-indigo-600 mb-2">2</div>
            <h4 className="text-xl font-semibold mb-2">Obtenez votre FairScore</h4>
            <p className="text-gray-600">Notre algorithme vérifie votre historique on-chain.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-2xl font-bold text-indigo-600 mb-2">3</div>
            <h4 className="text-xl font-semibold mb-2">Empruntez instantanément</h4>
            <p className="text-gray-600">Accédez à vos fonds selon votre score de confiance.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 pt-8 flex justify-between items-center">
        <p className="text-gray-600">© 2026 RepuLend. Tous droits réservés.</p>
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}