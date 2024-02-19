// Define data for each day
var daysData = [
  {
    id: "Sunday",
    title: "Cajun Salmon", protien: "Fish",
    text: "Savor the bold flavors of our Cajun Salmon, expertly grilled and served with a refreshing Quinoa Chickpea Salad. Accompanied by tender Asparagus, this dish offers a perfect balance of spice and wholesome goodness.",
    side1: "Quinoa and Chickpea Salad", side2: "Asparagus", side3: "",
    ingredients: "Nothing to buy"
  },
  {
    id: "Monday",
    title: "Meatlovers Pizza", protien: "Pork",
    text: "Savor the essence of Canada with our Homemade Meat Lovers Pizza, loaded with bacon, pepperoni, and ground pork. Pair it with a side salad for a perfect balance of indulgence and freshness. A true Canadian delight!",
    side1: "Tossed Garden Salad", side2: "", side3: "",
    ingredients: 'Nothing to buy'
  },
  {
    id: "Tuesday",
    title: "Rustic Italian Soup", protien: "Vegetarian",
    text: "Experience Italy with our Rustic Italian Soup, a flavorful veggie and bean blend, paired perfectly with our Club Sandwiches. Satisfy your cravings with this delightful combo.",
    side1: "Club Sandwiches", side2: "", side3: "",
    ingredients: ''
  },
  {
    id: "Wednesday",
    title: "Spaghetti", protien: "Beef",
    text: "Delight in our Spaghetti Bolognese, a savory blend of slow-cooked beef and tomatoes over al dente pasta. Served with a side salad and garlic toast for a perfect Italian pairing.",
    side1: "Tossed Garden Salad", side2: "Garlic Toast", side3: "",
    ingredients: 'Mushrooms, Green Pepper, Salad Fixings'
  },
  {
    id: "Thursday",
    title: "Rustic Italian Soup", protien: "Vegetarian",
    text: "Indulge in our Rustic Italian Soup, a comforting blend of veggies and cannellini beans in flavorful broth, served with freshly baked homemade bread. A taste of traditional warmth in every spoonful.",
    side1: "No Knead Bread", side2: "", side3: "",
    ingredients: ''
  },
  {
    id: "Friday",
    title: "To be determined", protien: "",
    text: "",
    side1: "", side2: "", side3: "",
    ingredients: ''
  },
  {
    id: "Saturday",
    title: "To be determined", protien: "",
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
