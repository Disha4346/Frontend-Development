// Q10 - Random Coupon Generator
// Generates a random number 1-100, maps to a discount message, and checks for prime bonus.

/**
 * Check if a number is prime (simple deterministic check for 1..100 range)
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i*i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Generate coupon and message
 * @param {number|null} forcedNumber - if provided, use it (for testing)
 * @returns {{number:number, message:string, primeBonus:boolean}}
 */
function randomCoupon(forcedNumber = null) {
  const num = forcedNumber === null ? Math.floor(Math.random()*100) + 1 : forcedNumber;
  let message;
  if (num <= 30) message = 'You won a 10% discount';
  else if (num <= 60) message = 'You won a 20% discount';
  else if (num <= 90) message = 'You won a 30% discount';
  else message = 'You won a 50% Mega Offer!';

  const primeBonus = isPrime(num);
  return { number: num, message, primeBonus };
}

// Sample runs
console.log('--- Q10: Random Coupon Generator samples ---');
console.log(randomCoupon(17)); // prime -> 10% + prime message
console.log(randomCoupon(92)); // 50% mega offer (not prime)
console.log('Run randomCoupon() without args to generate random coupon: ', randomCoupon());
