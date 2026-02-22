'use client';

export default function FairScoreWidget() {
  // Fixed score for demo purposes
  const fairScore = 76; // 0-100 scale
  const maxScore = 100;
  const percentage = fairScore;
  
  // Determine score color and tier based on value
  let scoreColor = 'bg-red-500';
  let scoreLabel = 'Bronze';
  let textColor = 'text-red-500';
  let bgColor = 'bg-red-500/10';
  
  if (fairScore >= 70) {
    scoreColor = 'bg-green-500';
    scoreLabel = 'Or';
    textColor = 'text-green-500';
    bgColor = 'bg-green-500/10';
  } else if (fairScore >= 40) {
    scoreColor = 'bg-orange-500';
    scoreLabel = 'Argent';
    textColor = 'text-orange-500';
    bgColor = 'bg-orange-500/10';
  }

  // Calculate loan terms based on score
  const interestRate = (100 - fairScore) * 0.15 + 5; // 5% to 20%
  const loanLimit = Math.min(10000, fairScore * 150); // Up to 10,000 USDC
  const approvalTime = fairScore > 70 ? '< 1 min' : fairScore > 40 ? '< 3 min' : '< 5 min';

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
          <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${textColor} ${bgColor}`}>
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