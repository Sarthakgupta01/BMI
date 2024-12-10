document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  // Validation for weight and height
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid values for weight and height.");
    return;
  }

  // Calculate BMI
  const bmi = weight / (height * height);

  let resultText = "";
  let dietPlanText = "";

  // Categorize BMI and suggest diet plan
  if (bmi < 16) {
    resultText = `Your BMI is ${bmi.toFixed(
      2
    )}. You are severely underweight (Malnutrition).`;
    dietPlanText = `Diet Plan: Increase your caloric intake with high-protein foods like nuts, seeds, eggs, avocado, and lean meats. Focus on nutrient-dense foods and eat small meals frequently.`;
  } else if (bmi >= 16 && bmi < 17) {
    resultText = `Your BMI is ${bmi.toFixed(2)}. You are underweight.`;
    dietPlanText = `Diet Plan: Increase your caloric intake with healthy fats and lean proteins. Try eating calorie-dense foods like peanut butter, cheese, and avocados.`;
  } else if (bmi >= 17 && bmi < 18.5) {
    resultText = `Your BMI is ${bmi.toFixed(2)}. You are mildly underweight.`;
    dietPlanText = `Diet Plan: Include more high-calorie foods like nut butter, seeds, and lean meats. Focus on a balanced diet with adequate proteins, carbs, and healthy fats.`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultText = `Your BMI is ${bmi.toFixed(2)}. You are healthy and fit.`;
    dietPlanText = `Diet Plan: Continue with a balanced diet, focusing on protein, carbs, and fats. Make sure to stay hydrated and exercise regularly to maintain your fitness.`;
  } else if (bmi >= 25 && bmi < 29.9) {
    resultText = `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
    dietPlanText = `Diet Plan: Consider reducing your caloric intake by eating healthy, whole foods like fruits, vegetables, and lean proteins. Avoid sugary drinks and processed foods.`;
  } else if (bmi >= 30 && bmi < 34.9) {
    resultText = `Your BMI is ${bmi.toFixed(2)}. You are obese (Class 1).`;
    dietPlanText = `Diet Plan: Focus on creating a caloric deficit by cutting out processed foods, reducing sugar, and eating more vegetables and lean proteins. Consider regular exercise.`;
  } else if (bmi >= 35 && bmi < 39.9) {
    resultText = `Your BMI is ${bmi.toFixed(2)}. You are obese (Class 2).`;
    dietPlanText = `Diet Plan: Consider a structured weight loss program with portion control, reduced fat and sugar, and a higher focus on vegetables, lean proteins, and exercise.`;
  } else {
    resultText = `Your BMI is ${bmi.toFixed(
      2
    )}. You are severely obese (Class 3).`;
    dietPlanText = `Diet Plan: It's crucial to consult a healthcare provider for a tailored weight loss plan. Focus on healthy eating, portion control, and regular exercise.`;
  }

  // Display results with animation
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `<strong>${resultText}</strong><br><br><strong>Diet Plan:</strong><br>${dietPlanText}`;
  resultElement.style.display = "block";
});
