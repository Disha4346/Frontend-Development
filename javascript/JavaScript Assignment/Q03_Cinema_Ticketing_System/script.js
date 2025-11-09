// Q3 - Cinema Ticketing System
// Calculates base price, discount, and final amount including service fee when applicable.

/**
 * Calculate ticket price summary.
 * @param {'morning'|'evening'} showTime
 * @param {number} tickets - number of tickets
 * @param {boolean} isStudent
 * @param {number} age
 * @returns {{basePrice:number, discountedTotal:number, finalAmount:number}}
 */
function cinemaTicketing(showTime, tickets, isStudent, age) {
  const perTicket = showTime === 'morning' ? 120 : 180;
  const basePrice = perTicket * tickets;

  // Determine discount percent
  let discountPercent = 0;
  if (isStudent) discountPercent = 10;
  else if (age > 60) discountPercent = 20;

  const discountedTotal = basePrice * (1 - discountPercent/100);

  // Service fee if more than 3 tickets
  const serviceFee = tickets > 3 ? 50 : 0;
  const finalAmount = discountedTotal + serviceFee;

  return { basePrice, discountedTotal, finalAmount };
}

// Sample runs
console.log('--- Q3: Cinema Ticketing System samples ---');
console.log(cinemaTicketing('morning', 2, true, 20)); // student
console.log(cinemaTicketing('evening', 5, false, 65)); // senior + service fee
