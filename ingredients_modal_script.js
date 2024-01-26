document.addEventListener('DOMContentLoaded', function () {
    // Event listener for button clicks
    document.body.addEventListener('click', function (event) {
      if (event.target.matches('[data-bs-toggle="modal"]')) {
        // Get the ingredients attribute from the clicked button
        const ingredients = event.target.getAttribute('data-ingredients');
  
        // Update the modal content with the ingredients
        updateModalIngredients(ingredients);
      }
    });
  });
  
  // Function to update the modal content with ingredients
  function updateModalIngredients(ingredients) {
    const modalIngredientList = document.getElementById('ingredientList');
  
    // Clear previous content
    modalIngredientList.innerHTML = '';
  
    // Split ingredients string into an array
    const ingredientArray = ingredients.split(', ');
  
    // Populate the modal ingredient list
    ingredientArray.forEach(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      modalIngredientList.appendChild(li);
    });
  }