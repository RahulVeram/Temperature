function convertTemperature() {
    var celsius = document.getElementById("celsiusInput").value;
    var fahrenheit = document.getElementById("fahrenheitInput").value;
  
    if (celsius !== "") {
      var convertedFahrenheit = (celsius * 9 / 5) + 32;
      document.getElementById("fahrenheitInput").value = convertedFahrenheit.toFixed(2);
      document.getElementById("resultText").innerHTML = "Conversion successful!";
    } else if (fahrenheit !== "") {
      var convertedCelsius = (fahrenheit - 32) * 5 / 9;
      document.getElementById("celsiusInput").value = convertedCelsius.toFixed(2);
      document.getElementById("resultText").innerHTML = "Conversion successful!";
    } else {
      document.getElementById("resultText").innerHTML = "Please enter a temperature.";
    }
  }
  