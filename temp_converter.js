// Set this variable to a starting Fahrenheit temperature...
var fahrenheit = prompt("Enter a number for fahrenheit");


// Enter conversion code below...
var fahrenheitToCelsius = ( fahrenheit - 32) / 1.8;
var fahrenheitToKelvin = ( fahrenheit + 459.67) / 1.8;

// Fahrenheit
console.log(fahrenheit);
console.log("C =" + fahrenheitToCelsius);

// Celsius and Kelvin
var celsius = prompt("Enter a number for celsius");
var celsiustofahrenheit = celsius*1.8 + 32
var celsiustokelvin = celsius+ 273.15
//  Console.log For the two
console.log("C =" + celsiustokelvin);
console.log("C =" + celsiustofahrenheit);

//Kelvin

var kelvin =273.15;
var kelvintocelsius = (kelvin - 273.15);
var kelvintofahrenheit = (kelvin * 1.8 - 459.67);

//console.logs
console.log("K =" + kelvintocelsius);
console.log("K =" + kelvintofahrenheit);