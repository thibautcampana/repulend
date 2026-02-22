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

  // Mock stats data
  const stats = [
    { value: '1.2M+', label: 'Total prêté (USDC)' },
    { value: '89%', label: 'Taux de réussite' },
    { value: '24k+', label: 'Utilisateurs' },
    { value: '< 5s', label: 'Temps d\'approbation' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
            RepuLend
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            Emprunter sans sur-collatéral
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Votre FairScore détermine vos conditions. Bonne réputation = meilleurs taux.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button 
              onClick={handleConnect}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105"
            >
              {connected ? 'Déjà connecté' : 'Connect Wallet'}
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 border border-gray-700">
              Voir la documentation
            </button>
          </div>
          
          <FairScoreWidget />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Comment ça marche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                step: '01', 
                title: 'Connectez votre wallet', 
                desc: 'Liez votre portefeuille Solana pour commencer. Nous ne stockons aucune information privée.' 
              },
              { 
                step: '02', 
                title: 'Obtenez votre FairScore', 
                desc: 'Notre algorithme vérifie votre historique on-chain pour établir votre score de confiance.' 
              },
              { 
                step: '03', 
                title: 'Empruntez instantanément', 
                desc: 'Accédez à vos fonds selon votre score. Pas de garantie requise, pas de retard.' 
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition duration-300">
                <div className="text-5xl font-bold text-purple-500 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à commencer ?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Rejoignez des milliers d'utilisateurs qui ont déjà accédé à des prêts rapides et équitables.
          </p>
          <button 
            onClick={handleConnect}
            className="bg-white text-gray-900 font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105"
          >
            Connecter mon wallet
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4 md:mb-0">
              RepuLend
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                Twitter
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                Discord
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8">
            © {new Date().getFullYear()} RepuLend. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}