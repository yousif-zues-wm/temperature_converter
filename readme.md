# Exercise: Temperature Converter

Goal: create a program that converts a Fahrenheit temperature to its equivalent Celsius and Kelvin values.
- Included some bonus goals in case you find yourself with some extra time!

## Instructions

Setup: Copy the startup code in this repo's `temp_converter.js` file into a new .js file on your computer.

1. Set the `fahrenheit` variable to a starting temperature.
2. Below that, write Javascript code that converts `fahrenheit` to its equivalent Celsius and Kelvin values.
  - Conversion formulas
    - Celsius: `F = (C x 1.8) + 32`
    - Kelvin: `F = (K - 273.15) * 1.8`
3. Below that, `console.log` the starting and converted temperatures.
4. Test your program by running `$ node FILENAME` in the command line.

Your program would start something like this...  

  ```javascript
  // Starting temperature
  var fahrenheit = STARTING_TEMP;

  // Conversion code
  var fahrenheitToCelsius = ...;
  var fahrenheitToKelvin = ...;
  ```

The command line output would look something like...

  ```
  Fahrenheit: STARTING_TEMP F
  Celsius: CONVERTED_TEMP C
  Kelvin: CONVERTED_TEMP K
  ```

## Bonus #1

Equip your program to also convert starting Celsius and Kelvin temperatures to their equivalent values.  

Your code would start with something like this...

  ```javascript
  // Starting temperatures. They don't need to be equivalent.
  var fahrenheit = INSERT_TEMPERATURE;
  var celsius = INSERT_TEMPERATURE;
  var kelvin = INSERT_TEMPERATURE;

  // Conversion code
  var fahrenheitToCelsius = ...;
  var fahrenheitToKelvin = ...;
  var celsiusToFahrenheit = ...;
  var celsiusToKelvin = ...;
  var kelvinToFahrenheit = ...;
  var kelvinToCelsius = ...;
  ```
