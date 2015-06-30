/********************************/
/********** FAHRENHEIT **********/
/********************************/

// Set starting Fahrenheit temperature here...
var fahrenheit = 80;

// Enter temperature conversion code here...
var fahrenheitToCelsius = ( fahrenheit - 32 ) / 1.8;
var fahrenheitToKelvin = ( fahrenheit + 459.67 ) / 1.8;

// Log temperatures to console here...
console.log( "Starting temperature: " + fahrenheit + "F" );
console.log( "Converted to Celsius: " + fahrenheitToCelsius + "C" );
console.log( "Converted to Kelvin: " + fahrenheitToKelvin + "K" );


/*****************************/
/********** CELSIUS **********/
/*****************************/

var celsius = 15;

var celsiusToFahrenheit = celsius * 1.8 + 32;
var celsiusToKelvin = celsius + 273.15;

console.log( "Starting temperature: " + celsius + "C" );
console.log( "Converted to Fahrenheit: " + celsiusToFahrenheit + "F" );
console.log( "Converted to Kelvin: " + celsiusToKelvin + "K" );


/*****************************/
/*********** KELVIN **********/
/*****************************/

var kelvin = 300;

var kelvinToFahrenheit = kelvin * 1.8 - 459.67;
var kelvinToCelsius = kelvin - 273.15;

console.log( "Starting temperature: " + kelvin + "K" );
console.log( "Converted to Fahrenheit: " + kelvinToFahrenheit + "F" );
console.log( "Converted to Celsius: " + kelvinToCelsius + "C" );
