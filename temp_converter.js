//Conditionals
var temp =  prompt ("Please select a type of temperature to convert. (F, C, or K");


if (temp === "F") {
// Set this variable to a starting Fahrenheit temperature...
    var fahrenheit = prompt("Enter a number for fahrenheit");
    var ftemp = [];


// Enter conversion code below...
    var fahrenheitToCelsius = ( fahrenheit - 32) / 1.8;
    var fahrenheitToKelvin = ( fahrenheit + 459.67) / 1.8;
    ftemp[0] = fahrenheitToCelsius;
    ftemp[1] = fahrenheitToKelvin;
// Fahrenheit
    console.log("K =" + ftemp[0]);
    console.log("C =" + ftemp[1]);
}
else if (temp === "C") {
// Celsius and Kelvin
    var celsius = prompt("Enter a number for celsius");
    var celsiustofahrenheit = celsius * 1.8 + 32;
    var celsiustokelvin = celsius + 273.15;
    var ctemp = [];
    ctemp[0] = celsiustofahrenheit;
    ctemp[1] = celsiustokelvin;
//  Console.log For the two
    console.log("K =" + ctemp[0]);
    console.log("F =" + ctemp[1]);
}
//Kelvin
else if (temp === "K") {
    var kelvin = prompt("Enter a number for kelvin");
    var kelvintocelsius = (kelvin - 273.15);
    var kelvintofahrenheit = (kelvin * 1.8 - 459.67);
    var ktemp = [];
    ktemp[0] = kelvintocelsius;
    ktemp[1] = kelvintofahrenheit;
//console.logs
    console.log("C =" + ktemp[0]);
    console.log("F =" + ktemp[1]);
}

