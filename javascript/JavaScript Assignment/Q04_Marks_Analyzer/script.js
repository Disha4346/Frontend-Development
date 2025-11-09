// Q4 - Marks Analyzer
// Uses arrays and loops to compute average, percentage and grade. Also checks for repeat year condition.

/**
 * Analyze marks for 5 subjects.
 * @param {number[]} marks - array of 5 numbers (0-100)
 * @returns {{average:number, percentage:number, grade:string, repeatYear:boolean}}
 */
function marksAnalyzer(marks) {
  if (!Array.isArray(marks) || marks.length !== 5) throw new Error('marks must be an array of 5 numbers');
  const total = marks.reduce((s, v) => s + v, 0);
  const average = total / marks.length;
  const percentage = (total / (marks.length * 100)) * 100;

  // Count failed subjects (below 40)
  const fails = marks.filter(m => m < 40).length;
  let grade;
  if (average >= 90) grade = 'A+';
  else if (average >= 75) grade = 'A';
  else if (average >= 60) grade = 'B';
  else if (average >= 40) grade = 'C';
  else grade = 'Fail';

  const repeatYear = fails >= 2;

  return { average: Math.round(average*100)/100, percentage: Math.round(percentage*100)/100, grade, repeatYear };
}

// Sample runs
console.log('--- Q4: Marks Analyzer samples ---');
console.log(marksAnalyzer([92,85,78,88,90])); // high marks
console.log(marksAnalyzer([35,42,38,55,60])); // two fails -> repeat year true
