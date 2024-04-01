// Define data for each day
var daysData = [
  {
    id: "Sunday",
    title: "Turkey Dinner", protien: "Turkey",
    text: "Leftover turkey for an easy meal",
    side1: "Mashed Potatoes", side2: "Dressing", side3: "Carrots & Broccoli",
    ingredients: "Nothing to buy",
    recipe:"Time Honored"
  },
  {
    id: "Monday",
    title: "Salad with Pork", protien: "Pork",
    text: "A healthy reprieve from the turkey",
    side1: "Garlic Bread", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Common Knowledge"
  },
  {
    id: "Tuesday",
    title: "Open Faced Turkey Sandwiches", protien: "Turkey",
    text: "Sandwiches to use up what's left of that blasted turkey",
    side1: "Fries", side2: "Cold Veggies", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Common Knowledge"
  },
  {
    id: "Wednesday",
    title: "Spaghetti with Bolognese Sauce", protien: "Beef",
    text: "A classical Italian comfort meal",
    side1: "Warm French Bread", side2: "Corn", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Black Binder"
  },
  {
    id: "Thursday",
    title: "Pork Chops with Mushroom Sauce", protien: "Pork",
    text: "A one dish slow cooker classic",
    side1: "Green Beans", side2: "Boiled Potatoes", side3: "Tomato Wedges",
    ingredients: 'Nothing to buy',
    recipe:"500 Glycemic Recipies"
  },
  {
    id: "Friday",
    title: "Hot Dogs", protien: "Pork",
    text: "A barbacued Friday meal in anticipation of warmer weather",
    side1: "", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Common Knowledge"
  },
  {
    id: "Saturday",
    title: "TBD", protien: "",
    text: "Grant's Creation",
    side1: "", side2: "", side3: "",
    ingredients: '',
    recipe:""
  }
];




// Get the container element
var daysContainer = document.getElementById("days-container");

// Loop through each day's data
for (var i = 0; i < daysData.length; i++) {
  var day = daysData[i];

  // Create a new col element
  var colElement = document.createElement("div");
  colElement.className = "col d-flex";

  // Create the card structure using template literals
  var cardHtml = `
      <div class="card custom-beige-color mb-3 mx-auto w-100">
        <!-- Card Header with custom date color and rounded style -->
        <div class="card-header text-end custom-date-color rounded m-2">
          ${day.id}
        </div>
        <div class="card-body d-flex flex-column">
          <!-- Card Title with dynamically generated ID -->
          <h5 class="card-title " id="${day.id}-title" >${day.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            <span class="protien-color rounded ${day.protien.toLowerCase()} white-font">${day.protien}</span>
          </h6>
          <p class="card-text">${day.text}</p>
          <!-- List of sides with dynamically generated IDs -->
          <ul class="list-group list-group-flush">
            <li class="list-group-item custom-beige-color min-list-item-height" id="${day.id}-side-1">${day.side1}</li>
            <li class="list-group-item custom-beige-color min-list-item-height" id="${day.id}-side-2">${day.side2}</li>
            <li class="list-group-item custom-beige-color min-list-item-height" id="${day.id}-side-3">${day.side3}</li>
          </ul>
          <!-- Button for Ingredients with custom silver button color -->
          <div class="mt-auto">
            <button type="button" class="btn custom-silver-button-color" data-bs-toggle="modal" data-bs-target="#ingredientModal" data-ingredients="${day.ingredients}">
              Ingredients
            </button>
            <!-- Button for Recipe with custom silver button color -->
            <button class="btn custom-silver-button-color" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip-color" title="${day.recipe}">Recipe</button>
          </div>
        </div>
      </div>
    `;

  // Set the HTML content of the col element
  colElement.innerHTML = cardHtml;

  // Append the col element to the daysContainer
  daysContainer.appendChild(colElement);
}
