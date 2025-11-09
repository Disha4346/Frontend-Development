// Q2 - Banking Interest Calculator
// Computes final balance after given years using compound interest, applies bonus interest for large deposits.

/**
 * Calculate final balance using compound interest and the rules described.
 * @param {'savings'|'fixed'} accountType
 * @param {number} amount
 * @param {number} years
 * @returns {number} final balance rounded to 2 decimals
 */
function bankingInterest(accountType, amount, years) {
  let rate = accountType === 'savings' ? 4.0 : 6.5;
  if (amount > 100000) rate += 1.0; // bonus interest
  const total = amount * Math.pow((1 + rate/100), years);
  return Math.round(total * 100) / 100; // two decimals
}

// Sample runs
console.log('--- Q2: Banking Interest Calculator samples ---');
console.log('Savings, amount=50000, years=2 ->', bankingInterest('savings', 50000, 2));
console.log('Fixed, amount=200000, years=3 -> (includes +1% bonus) ->', bankingInterest('fixed', 200000, 3));
