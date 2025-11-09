// Q5 - Weather Alert System
// Checks multiple conditions to decide whether an outdoor event is approved or cancelled and gives advice.

/**
 * Evaluate weather for event safety.
 * @param {number} temperature - in °C
 * @param {number} humidity - percentage (0-100)
 * @param {number} windSpeed - km/h
 * @returns {{status:string, advice:string}}
 */
function weatherAlert(temperature, humidity, windSpeed) {
  let status = 'Event Approved';
  if (temperature > 35 && humidity > 70) status = 'Cancel: Heat Alert';
  else if (temperature < 10 || windSpeed > 40) status = 'Cancel: Cold/Windy Alert';

  let advice;
  if (temperature < 20) advice = 'Wear Jacket';
  else if (temperature <= 30) advice = 'Comfortable';
  else advice = 'Stay Hydrated';

  return { status, advice };
}

// Sample runs
console.log('--- Q5: Weather Alert samples ---');
console.log(weatherAlert(36, 75, 10)); // Heat alert
console.log(weatherAlert(8, 50, 10));  // Cold alert
console.log(weatherAlert(25, 40, 5));  // Approved + Comfortable
