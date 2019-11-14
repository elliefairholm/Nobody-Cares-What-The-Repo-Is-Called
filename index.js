// ### Challenge
// Figure out the pattern used to add the dash ('-') to the numbers by looking at the test and write a function for it.
// IMPORTANT: The resulting string cannot begin or end with a dash ('-').
// GOOD LUCK!👍

// ### Examples
// dash(274) // returns "2-7-4"
// dash(5311) //returns "5-3-1-1"
// Refer to Test for More Examples

function dash(num) {
  if (isNaN(num)) return 'NaN';
  else {
    return String(num).replace(/[13579]/g,'-$&-').replace(/--/g, '-').replace(/^-|-$/g,''); 
  }
};

module.exports = dash;
