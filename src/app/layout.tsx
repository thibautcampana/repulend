import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RepuLend - Prêts Décentralisés',
  description: 'Emprunter sans sur-collatéral grâce à votre FairScore',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-900 text-slate-50">
        <main className="container mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}