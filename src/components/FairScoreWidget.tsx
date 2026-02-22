'use client';

export default function FairScoreWidget() {
  // Mock FairScore for demo with more realistic simulation
  const fairScore = Math.floor(Math.random() * 400) + 550; // Random score between 550-950
  const maxScore = 1000;
  const percentage = (fairScore / maxScore) * 100;
  
  // Determine score color based on value
  let scoreColor = 'bg-red-500';
  let scoreLabel = 'Faible';
  let textColor = 'text-red-500';
  
  if (fairScore >= 800) {
    scoreColor = 'bg-green-500';
    scoreLabel = 'Excellent';
    textColor = 'text-green-500';
  } else if (fairScore >= 700) {
    scoreColor = 'bg-teal-500';
    scoreLabel = 'Bon';
    textColor = 'text-teal-500';
  } else if (fairScore >= 600) {
    scoreColor = 'bg-yellow-500';
    scoreLabel = 'Moyen';
    textColor = 'text-yellow-500';
  }

  // Calculate loan terms based on score
  const interestRate = (1000 - fairScore) * 0.005 + 5; // 5% to 15%
  const loanLimit = Math.min(5000, fairScore * 5); // Up to 5000 USDC
  const approvalTime = fairScore > 700 ? '< 1 min' : '< 5 min';

  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl p-6 max-w-md mx-auto border border-gray-700">
      <h3 className="text-2xl font-bold text-center text-white mb-2">Votre FairScore</h3>
      <p className="text-center text-gray-400 mb-6">Basé sur votre activité on-chain</p>
      
      <div className="relative pt-1 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-400">Score</span>
          <span className={`text-lg font-bold ${textColor}`}>{fairScore}/{maxScore}</span>
        </div>
        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-700">
          <div 
            style={{ width: `${percentage}%` }} 
            className={`${scoreColor} shadow-lg`}
          ></div>
        </div>
        <div className="text-center">
          <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${textColor} bg-opacity-20 ${scoreColor.replace('bg-', 'bg-')} bg-opacity-20`}>
            {scoreLabel}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-gray-900 p-3 rounded-lg">
          <p className="text-sm text-gray-400">Taux estimé</p>
          <p className="font-bold text-white">{interestRate.toFixed(1)}%</p>
        </div>
        <div className="bg-gray-900 p-3 rounded-lg">
          <p className="text-sm text-gray-400">Limite prêt</p>
          <p className="font-bold text-white">{loanLimit.toLocaleString()} USDC</p>
        </div>
        <div className="bg-gray-900 p-3 rounded-lg">
          <p className="text-sm text-gray-400">Approbation</p>
          <p className="font-bold text-white">{approvalTime}</p>
        </div>
      </div>
    </div>
  );
}