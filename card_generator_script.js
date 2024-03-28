// Define data for each day
var daysData = [
  {
    id: "Sunday",
    title: "Ribs and Rice", protien: "Pork",
    text: "A Sunday Staple with Homemade BBQ Sauce",
    side1: "Brown Rice", side2: "Carrots and Broccoli", side3: "Tomato Wedges",
    ingredients: "Nothing to buy",
    recipe:"In Mom's Head"
  },
  {
    id: "Monday",
    title: "Fried Chicken Sandwiches", protien: "Chicken",
    text: "Cast iron skillet delicousness!",
    side1: "Potato Wedges", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Cast Iron Cookbook"
  },
  {
    id: "Tuesday",
    title: "Sausages & Potatoes", protien: "Pork",
    text: "An easy staple",
    side1: "Boiled Potatoes", side2: "Corn", side3: "Cabbage",
    ingredients: 'Nothing to buy',
    recipe:"In Mom's Head"
  },
  {
    id: "Wednesday",
    title: "Lasagna Soup", protien: "Beef",
    text: "A hearty, delicious wrap yourself in a warm blanket kind of meal",
    side1: "Homemade Bread", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"IP Recipe"
  },
  {
    id: "Thursday",
    title: "Baked Haddock", protien: "Fish",
    text: "It is actually going to be cod, not haddock. Plus, we will use the George Foreman Grill instead of baking the fish",
    side1: "Pearl Couscous Salad", side2: "", side3: "",
    ingredients: 'Got everything already!',
    recipe:"Found stuff online"
  },
  {
    id: "Friday",
    title: "TakeOut", protien: "Pork",
    text: "Thought about ordering pizza. Hye Weon recommended Pizza Hut. Extra sauce and extra cheese. If you order online you can get deals, so we'll try that",
    side1: "", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Cellphone!"
  },
  {
    id: "Saturday",
    title: "Turkey Dinner!", protien: "Turkey",
    text: "An early Easter Sunday Dinner",
    side1: "Mashed Potatoes & Gravy", side2: "Carrots & Brocolli", side3: "Dressing",
    ingredients: 'Turkey',
    recipe:"In Mom's Head"
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
