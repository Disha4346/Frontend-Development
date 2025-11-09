// Q8 - Employee Bonus Distribution
// Calculates bonus based on rating and experience and applies cap if base salary is large.

/**
 * Calculate bonus details.
 * @param {number} baseSalary
 * @param {number} rating - integer
 * @param {number} experience - years
 * @returns {{calculatedBonus:number, cappedBonus:number, totalSalary:number}}
 */
function employeeBonus(baseSalary, rating, experience) {
  let bonusPercent = 0;
  if (rating === 5) bonusPercent = 20;
  else if (rating === 4) bonusPercent = 15;
  else if (rating === 3) bonusPercent = 10;

  if (experience > 5) bonusPercent += 5;

  const calculatedBonus = Math.round((baseSalary * bonusPercent / 100) * 100) / 100;

  // Cap if base salary exceeds 100000
  const cap = 25000;
  const cappedBonus = baseSalary > 100000 ? Math.min(calculatedBonus, cap) : calculatedBonus;

  const totalSalary = Math.round((baseSalary + cappedBonus) * 100) / 100;
  return { calculatedBonus, cappedBonus, totalSalary };
}

// Sample runs
console.log('--- Q8: Employee Bonus samples ---');
console.log(employeeBonus(90000, 5, 6));  // no cap
console.log(employeeBonus(150000, 5, 10)); // cap applies
