/********************************/
/********** FAHRENHEIT **********/
/********************************/

// Set starting Fahrenheit temperature here...
var fahrenheit = 80;
var fahrenheitTemps = [];

// Enter temperature conversion code here...
var fahrenheitToCelsius = ( fahrenheit - 32 ) / 1.8;
var fahrenheitToKelvin = ( fahrenheit + 459.67 ) / 1.8;

// Add temperatures to array...
fahrenheitTemps.push( fahrenheit );
fahrenheitTemps.push( fahrenheitToCelsius );
fahrenheitTemps.push( fahrenheitToKelvin );

// Log temperatures to console here...
console.log( "Starting temperature: " + fahrenheitTemps[0] + "F" );
console.log( "Converted to Celsius: " + fahrenheitTemps[1] + "C" );
console.log( "Converted to Kelvin: " + fahrenheitTemps[2] + "K" );


/*****************************/
/********** CELSIUS **********/
/*****************************/

var celsius = 20;
var celsiusTemps = [];

var celsiusToFahrenheit = celsius × 1.8 + 32;
var celsiusToKelvin = celsius + 273.15;

celsiusTemps.push( celsius );
celsiusTemps.push( celsiusToFahrenheit );
celsiusTemps.push( celsiusToKelvin );

console.log( "Starting temperature: " + celsiusTemps[0] + "C" );
console.log( "Converted to Fahrenheit: " + celsiusTemps[1] + "F" );
console.log( "Converted to Kelvin: " + celsiusTemps[2] + "K" );


/*****************************/
/*********** KELVIN **********/
/*****************************/

var kelvin = 300;
var kelvinTemps = [];

var kelvinToFahrenheit = kelvin × 1.8 - 459.67;
var kelvinToCelsius = kelvin - 273.15;

kelvinTemps.push( kelvin );
kelvinTemps.push( kelvinToFahrenheit );
kelvinTemps.push( kelvinToCelsius );

console.log( "Starting temperature: " + kelvinTemps[0] + "K" );
console.log( "Converted to Fahrenheit: " + kelvinTemps[1] + "F" );
console.log( "Converted to Celsius: " + kelvinTemps[2] + "C" );
