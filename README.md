# RepuLend

## Description
RepuLend est un protocole de prêts décentralisés basé sur la réputation, construit sur Solana. Il permet aux utilisateurs d'emprunter des fonds sans collatéral grâce à un système de notation innovant appelé **FairScore**.

Le FairScore analyse l'historique on-chain de l'utilisateur pour déterminer sa fiabilité et ses conditions de prêt (taux d'intérêt, plafond, durée). Cette approche décentralisée et transparente rend les services de crédit plus accessibles tout en maintenant un risque faible pour les prêteurs.

## Fonctionnalités Clés

### 📊 FairScore Algorithm
Notre algorithme breveté analyse plus de 50 paramètres on-chain pour établir un score de confiance unique :
- Activité de trading
- Historique de remboursement
- Volume des transactions
- Âge du wallet
- Diversité des interactions DeFi

### 💰 Prêts Instantanés
- Approbation en temps réel basée sur le FairScore
- Pas de collatéral requis
- Limites de prêt adaptatives
- Taux d'intérêt dynamiques

### 🛡 Gating Basé sur la Réputation
Les fonctionnalités sont débloquées progressivement selon le FairScore :
- Bronze (0-39): Prêts jusqu'à 1,000 USDC
- Argent (40-69): Prêts jusqu'à 5,000 USDC
- Or (70-100): Prêts jusqu'à 25,000 USDC + Taux préférentiels

## Stack Technique
- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: TailwindCSS avec thème personnalisé
- **Blockchain**: Solana avec web3.js
- **Wallet Integration**: Solana Wallet Adapter
- **Smart Contracts**: Anchor Framework

## Installation
```bash
npm install
npm run dev
```

## Variables d'Environnement
Créer un fichier `.env.local` avec :
```
FAIRSCALE_API_KEY=votre_clé_api_fairscale
NEXT_PUBLIC_RPC_URL=https://api.mainnet-beta.solana.com
```

## Contribution
Les contributions sont les bienvenues ! Consultez notre guide de contribution pour commencer.

## License
MIT