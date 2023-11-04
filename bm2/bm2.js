function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100; // Convert cm to meters
    
    var weightError = document.getElementById("weightError");
    var heightError = document.getElementById("heightError");
    
    weightError.innerHTML = "";
    heightError.innerHTML = "";
    
    if (weight === "" || isNaN(weight) || weight <= 0) {
    weightError.innerHTML = "Please weight value must be fulfilled ";
    return;
    }
    
    if (height === "" || isNaN(height) || height <= 0) {
    heightError.innerHTML = "Please height value must be fulfilled";
    return;
    }
    
    var bmi = weight / (height * height);
    
    
    
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
    }