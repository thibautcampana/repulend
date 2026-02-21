# RepuLend

## Description
RepuLend est une plateforme de micro-prêts P2P innovante construite sur Solana. Elle permet aux utilisateurs d'emprunter des fonds sans apport de garantie grâce à un système de notation unique appelé **FairScore**.

Le FairScore analyse l'historique on-chain de l'utilisateur pour déterminer sa fiabilité et ses conditions de prêt (taux d'intérêt, plafond, durée). Cette approche décentralisée et transparente rend les services de crédit plus accessibles tout en maintenant un risque faible pour les prêteurs.

## Stack Technique
- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: TailwindCSS
- **Blockchain**: Solana avec web3.js
- **Wallet Integration**: Solana Wallet Adapter
- **Smart Contracts**: Anchor Framework

## Intégrations Clés

### FairScale API
Intégration avec l'API FairScale pour calculer le FairScore des utilisateurs :
- Analyse comportementale on-chain
- Scoring en temps réel
- Intégration native avec les wallets Solana

### Gating Basé sur FairScore
Les fonctionnalités de la plateforme sont débloquées progressivement selon le FairScore :
- Score ≥ 500 : Accès aux prêts basiques
- Score ≥ 700 : Meilleurs taux et limites élevées
- Score ≥ 900 : Accès premium et partenariats

### Pricing Dynamique
Le taux d'intérêt des prêts est calculé dynamiquement :
```
Taux = BaseRate + (1000 - FairScore) * 0.005
```
Ce mécanisme incite les utilisateurs à maintenir une bonne réputation on-chain.

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