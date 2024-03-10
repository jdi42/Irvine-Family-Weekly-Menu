// Define data for each day
var daysData = [
  {
    id: "Sunday",
    title: "Ribs and Rice", protien: "Pork",
    text: "A Sunday Staple with teriyaki sauce",
    side1: "Brown Rice", side2: "Carrots and Broccoli", side3: "Tomato Wedges",
    ingredients: "Nothing to buy",
    recipe:"In Mom's Head"
  },
  {
    id: "Monday",
    title: "Homemade Pizza", protien: "Pork",
    text: "An easy Monday dinner",
    side1: "Salad", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"On the package"
  },
  {
    id: "Tuesday",
    title: "Lasagna Soup", protien: "Beef",
    text: "A hearty, delicious wrap yourself in a warm blanket kind of meal",
    side1: "Herb Bread", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Green Binder"
  },
  {
    id: "Wednesday",
    title: "Cajun Pork Chops with Dirty Rice", protien: "Pork",
    text: "Experimental Recipe which looks promising",
    side1: "", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Cast Iron Cookbook"
  },
  {
    id: "Thursday",
    title: "Lasagna Soup", protien: "Beef",
    text: "Use up those leftovers",
    side1: "BLT Sandwiches", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Green Binder"
  },
  {
    id: "Friday",
    title: "Chicken Wings", protien: "Chicken",
    text: "A pub food classic",
    side1: "Raw Veggies", side2: "Potato Wedges", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Collective Knowledge"
  },
  {
    id: "Saturday",
    title: "Saturday Surprise!", protien: "",
    text: "Grant's Imaginarium",
    side1: "", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"In Grant's head, TBD"
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
