// Q7 - Restaurant Billing with Tips
// Computes taxes, recommended tip and final total. Provides a clear summary in console outputs.

/**
 * Compute billing details.
 * @param {number} baseCost
 * @param {boolean} diningIn
 * @returns {{base:number, gst:number, serviceTax:number, tip:number, finalTotal:number}}
 */
function restaurantBilling(baseCost, diningIn) {
  const gst = baseCost * 0.05;
  const serviceTax = diningIn ? baseCost * 0.10 : 0;
  let subtotal = baseCost + gst + serviceTax;

  let tip = 0;
  if (subtotal > 2000) tip = subtotal * 0.08;

  const finalTotal = Math.round((subtotal + tip) * 100) / 100;

  return { base: baseCost, gst: Math.round(gst*100)/100, serviceTax: Math.round(serviceTax*100)/100, tip: Math.round(tip*100)/100, finalTotal };
}

// Sample runs
console.log('--- Q7: Restaurant Billing samples ---');
console.log(restaurantBilling(1500, true));
console.log(restaurantBilling(2500, false));
