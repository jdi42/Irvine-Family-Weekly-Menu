// Define data for each day
var daysData = [
  {
    id: "Sunday",
    title: "Ribs & Rice", protien: "Pork",
    text: "One of the Sunday Standards...using the Rub this time :)",
    side1: "Brown Rice", side2: "Carrots & Broccoli", side3: "Asparagus",
    ingredients: "Nothing to buy",
    recipe:"Fresh Familiar Favorite"
  },
  {
    id: "Monday",
    title: "IP Chicken & Rice", protien: "Chicken",
    text: "Gotta use that Instant Pot! An easy weekday meal",
    side1: "", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Green Binder"
  },
  {
    id: "Tuesday",
    title: "Mexicxan Tortilla Soup", protien: "Beef",
    text: "This time we'll be using ground beef and our homemade beef stock",
    side1: "Cheese Quesadillas", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Mitchell Soup Company Mix"
  },
  {
    id: "Wednesday",
    title: "Schnitzel", protien: "Pork",
    text: "Using Grant's new electric frying pan method. Also have to use up those potatoes before they go bad",
    side1: "Mashed Potatoes", side2: "Corn", side3: "Cabbage",
    ingredients: 'Nothing to buy',
    recipe:"Yellow Low GI Cookbook"
  },
  {
    id: "Thursday",
    title: "Mexican Tortilla Soup", protien: "Beef",
    text: "More soup! No soup for you!....just kidding",
    side1: "...????", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Mitchell Soup Company Mix"
  },
  {
    id: "Friday",
    title: "Fish in a Pouch", protien: "Fish",
    text: "A quick and delicious way to cook fish...gotta use those lemons which were on sale :)",
    side1: "Green Salad", side2: "Rice....something", side3: "",
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
