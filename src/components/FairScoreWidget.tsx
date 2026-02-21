'use client';

export default function FairScoreWidget() {
  // Mock FairScore for demo
  const fairScore = 764;
  const maxScore = 1000;
  const percentage = (fairScore / maxScore) * 100;
  
  let scoreColor = 'bg-red-500';
  if (fairScore >= 700) scoreColor = 'bg-green-500';
  else if (fairScore >= 500) scoreColor = 'bg-yellow-500';

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Votre FairScore</h3>
      <p className="text-center text-gray-600 mb-6">Basé sur votre activité on-chain</p>
      
      <div className="relative pt-1 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Score</span>
          <span className="text-lg font-bold text-indigo-700">{fairScore}/{maxScore}</span>
        </div>
        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-200">
          <div 
            style={{ width: `${percentage}%` }} 
            className={`${scoreColor} shadow-lg`}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-indigo-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">Taux estimé</p>
          <p className="font-bold text-indigo-700">8.5%</p>
        </div>
        <div className="bg-indigo-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">Limite prêt</p>
          <p className="font-bold text-indigo-700">2500 USDC</p>
        </div>
        <div className="bg-indigo-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">Statut</p>
          <p className="font-bold text-indigo-700">Bon</p>
        </div>
      </div>
    </div>
  );
}