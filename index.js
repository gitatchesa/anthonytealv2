// Helper function to calculate the power of a number
function power(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  // Helper function to check if a number is positive
  function isPositive(num) {
    return num > 0;
  }
  
  // Helper function to check if a number is negative
  function isNegative(num) {
    return num < 0;
  }
  
  // Helper function to convert Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Testing the helper functions
  console.log(power(2, 3)); // Output: 8
  console.log(isPositive(5)); // Output: true
  console.log(isNegative(-3)); // Output: true
  console.log(celsiusToFahrenheit(0)); // Output: 32 (freezing point)
  