// script.js

function convertTemperature() {
    let inputTemp = document.getElementById('inputTemp').value;
    let inputUnit = document.getElementById('inputUnit').value;
    let outputTemp = document.getElementById('outputTemp');

    if(inputTemp === "" || isNaN(inputTemp)) {
        outputTemp.innerHTML = "Please enter a valid number!";
        return;
    }

    inputTemp = parseFloat(inputTemp);

    let result = "";
    
    if(inputUnit === "Celsius") {
        result = `Fahrenheit: ${(inputTemp * 9/5) + 32}°F<br>Kelvin: ${inputTemp + 273.15}K`;
    } else if(inputUnit === "Fahrenheit") {
        result = `Celsius: ${(inputTemp - 32) * 5/9}°C<br>Kelvin: ${(inputTemp - 32) * 5/9 + 273.15}K`;
    } else if(inputUnit === "Kelvin") {
        result = `Celsius: ${inputTemp - 273.15}°C<br>Fahrenheit: ${(inputTemp - 273.15) * 9/5 + 32}°F`;
    }

    outputTemp.innerHTML = result;
}
