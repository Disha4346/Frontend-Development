// Q1 - E-Commerce Delivery Estimator (console-based logic)
// Author: Generated for assignment
// Purpose: Compute total cost (including delivery fee when applicable) and estimated delivery time.
// Implementation notes: All IO is through console.log as required; functions accept inputs and return results.

/**
 * Computes total cost and estimated delivery days.
 * @param {number} orderAmount - amount in INR
 * @param {boolean} isPremium - whether user is premium member
 * @param {boolean} isRemote - whether address is remote
 * @returns {{totalCost:number, deliveryDays:number}}
 */
function deliveryEstimator(orderAmount, isPremium, isRemote) {
  // Base delivery fee
  const feeIfApplicable = orderAmount < 500 && !isPremium ? 50 : 0;
  const totalCost = orderAmount + feeIfApplicable;

  // Delivery time
  let deliveryDays = 3;
  if (isRemote) deliveryDays += 2;

  // Return structured result
  return { totalCost, deliveryDays };
}

// Sample runs (edit values below to test other cases)
console.log('--- Q1: E-Commerce Delivery Estimator samples ---');
console.log('Case A: orderAmount=450, isPremium=false, isRemote=false -> expect +₹50 fee and 3 days');
console.log(deliveryEstimator(450, false, false));
console.log('Case B: orderAmount=600, isPremium=true, isRemote=true -> premium waived, 5 days');
console.log(deliveryEstimator(600, true, true));
