// Q9 - Library Fine Calculator
// Computes fines for multiple late books and applies an extra penalty if more than 3 delayed returns.

/**
 * Compute fine for a single book given days late.
 * @param {number} daysLate
 * @returns {number}
 */
function fineForDays(daysLate) {
  let fine = 0;
  if (daysLate >= 1 && daysLate <= 5) fine = daysLate * 10;
  else if (daysLate <= 10) fine = daysLate * 20;
  else fine = daysLate * 50;
  return fine;
}

/**
 * Compute total fines for multiple late books.
 * @param {number[]} daysArray - array of days late for each book
 * @returns {{perBook:number[], totalFine:number, extraPenalty:number, grandTotal:number}}
 */
function libraryFineCalculator(daysArray) {
  const perBook = daysArray.map(d => fineForDays(d));
  const totalFine = perBook.reduce((s,v) => s+v, 0);
  const extraPenalty = daysArray.length > 3 ? 200 : 0;
  const grandTotal = totalFine + extraPenalty;
  return { perBook, totalFine, extraPenalty, grandTotal };
}

// Sample runs
console.log('--- Q9: Library Fine samples ---');
console.log(libraryFineCalculator([3, 7, 12])); // three books
console.log(libraryFineCalculator([2,4,6,11])); // four books -> extra penalty
