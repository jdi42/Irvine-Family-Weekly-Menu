// Define data for each day
var daysData = [
  {
    id: "Sunday",
    title: "Roast Beef and Gravy", protien: "Beef",
    text: "Traditional Sunday dinner prepared with loving hands",
    side1: "Mashed Potatoes", side2: "Yorkshire Pudding", side3: "Carrots and Broccoli",
    ingredients: "Nothing to buy"
  },
  {
    id: "Monday",
    title: "Swiss Farmer Sausage and Pearl Couscuos Salad", protien: "Pork",
    text: "A new recipe to use that funky looking sausage",
    side1: "Garlic/Cheese Toast", side2: "", side3: "",
    ingredients: 'Couscous, Green Beans, Cherry Tomatoes, Spinach'
  },
  {
    id: "Tuesday",
    title: "Beef Dip", protien: "Beef",
    text: "Comfort pub food dinner to use up leftovers",
    side1: "Fries", side2: "Raw Veggies", side3: "",
    ingredients: 'Buns, Fries'
  },
  {
    id: "Wednesday",
    title: "Pizza", protien: "Pork",
    text: "Homemade Pizza for an easy meal before jetting off to sunnier climbs",
    side1: "Salad", side2: "", side3: "",
    ingredients: 'Mushrooms, Green Pepper, Salad Fixings'
  },
  {
    id: "Thursday",
    title: "", protien: "",
    text: "",
    side1: "", side2: "", side3: "",
    ingredients: ''
  },
  {
    id: "Friday",
    title: "", protien: "",
    text: "",
    side1: "", side2: "", side3: "",
    ingredients: ''
  },
  {
    id: "Saturday",
    title: "", protien: "",
    text: "",
    side1: "", side2: "", side3: "",
    ingredients: ''
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
            <button class="btn custom-silver-button-color" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip-color" title="recipe info here">Recipe</button>
          </div>
        </div>
      </div>
    `;

  // Set the HTML content of the col element
  colElement.innerHTML = cardHtml;

  // Append the col element to the daysContainer
  daysContainer.appendChild(colElement);
}
