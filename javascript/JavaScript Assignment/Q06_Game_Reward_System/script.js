// Q6 - Game Reward System
// Computes earned coins and assigns rank. Doubles coins if all missions completed.

/**
 * Compute coins and rank.
 * @param {number} level
 * @param {number} performanceScore
 * @param {boolean} missionsCompleted
 * @returns {{coins:number, rank:string}}
 */
function gameReward(level, performanceScore, missionsCompleted) {
  let coins = (level * 50) + (performanceScore * 10);
  if (missionsCompleted) coins *= 2;
  const rank = coins > 1000 ? 'Elite' : 'Regular';
  return { coins, rank };
}

// Sample runs
console.log('--- Q6: Game Reward samples ---');
console.log(gameReward(5, 20, false)); // normal
console.log(gameReward(15, 30, true)); // likely elite after doubling
