# Exercise: Temperature Converter

Goal: create a program that can convert a temperature in Fahrenheit, Celsius or Kelvin to the other two units.
- Try the bonus goal if you have extra time!

## Setup

- Copy the startup code in this repo's `temp_converter.js` file into a new .js file on your computer.  

  or  
- If you're comfortable with git, clone this repo to your computer: `$ git clone git@github.com:ga-dc/temperature_converter.git`

## PART 1

### Instructions

1. Set the `fahrenheit` variable to a starting temperature.
2. Below that, write Javascript code that converts `fahrenheit` to its equivalent Celsius and Kelvin values.
  - Conversion formulae: [http://www.csgnetwork.com/temp2conv.html](http://www.csgnetwork.com/temp2conv.html)
3. Below that, `console.log` the starting and converted temperatures.
4. Repeat steps 1-3 for starting `celsius` and `kelvin` temperatures.
5. Test your program by running `$ node FILENAME` in the command line.
6. When you're done, put your code in a gist and Slack it in your classroom channel.

Your program will look something like this...

  ```javascript
  // Starting temperature
  var fahrenheit = STARTING_TEMP;

  // Conversion code
  var fahrenheitToCelsius = ...;
  var fahrenheitToKelvin = ...;

  // Print to console
  console.log( "Fahrenheit: " + ... );
  console.log( "Celsius: " + ... );
  console.log( "Kelvin: " + ... );
  ```

Your command line output will look something like this...

  ```
  Fahrenheit: STARTING_TEMP F
  Celsius: CONVERTED_TEMP C
  Kelvin: CONVERTED_TEMP K
  ```

### Bonus

Use conditionals so that your program only prints out the converted temperatures for one starting value.

## PART 2

Restructure your program from PART 1 so that when you convert a temperature, that new value is stored in an array.  

When you `console.log` the temperatures, make sure you do that using values stored in an array.

### Bonus

If you didn't get the chance to implement conditionals before, try it now!
