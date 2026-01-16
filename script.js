function calc() {
  const inputValue = Number(document.getElementById("input_value").value);
   console.log(inputValue);
   
  const fromUnit = document.querySelector("select").value;
  console.log(fromUnit);
  
  const toUnit = document.querySelectorAll("select")[1].value;
  console.log(toUnit);
  
  let result = 0;
  
  if (fromUnit === "°C" && toUnit.includes("°F")) {
    result = (inputValue * 9/5) + 32;
    document.getElementById("res").textContent = result.toFixed(1);
    document.getElementById("unit").innerHTML = "°F"
  }

  else if (fromUnit === "°F" && toUnit.includes("°C")) {
    result = (inputValue - 32) * 5/9;
    document.getElementById("res").textContent = result.toFixed(1);
    document.getElementById("unit").innerHTML = "°C"
  }

  else {
    document.getElementById("res").textContent = inputValue;
  }
}
