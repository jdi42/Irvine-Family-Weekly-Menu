// Define data for each day
var daysData = [
  {
    id: "Sunday",
    title: "Roast Chicken", protien: "Fish",
    text: "Roast Chicken served with mashed potatoes and steamed vegetables",
    side1: "Mashed Potatoes", side2: "Carrots", side3: "Broccoli",
    ingredients: "Chicken, Potatoes, Carrots, Broccoli"
  },
  {
    id: "Monday",
    title: "Hamburger Soup with Barley", protien: "Beef",
    text: "Mitchell's soup company soup with homemade sides",
    side1: "Smokies", side2: "", side3: "",
    ingredients: 'Ground beef, onion, beef stock, canned tomatoes, carrots, celery, barley, bay leaf, thyme, parsley, salt and pepper, worcestershire sauce, rosemary, smokies, hotdog buns'
  },
  {
    id: "Tuesday",
    title: "Chicken Salad", protien: "Chicken",
    text: "A simple salad made with leftover chicken",
    side1: "Garlic/Cheese Toast", side2: "", side3: "",
    ingredients: 'leftover chicken, salad fixings, tomato, celery, radishes, carrots, peanuts'
  },
  {
    id: "Wednesday",
    title: "Hamburger Soup with Barley", protien: "pork",
    text: "Mitchell's soup company soup with homemade sides",
    side1: "No Knead Bread", side2: "", side3: "",
    ingredients: 'Leftover soup, flour, salt, salt, sugar, yeast, water'
  },
  {
    id: "Thursday",
    title: "Almond Chicken", protien: "Vegetarian",
    text: "A brand new recipe of crushed almond breaded chicken",
    side1: "Pork Fried Rice", side2: "", side3: "",
    ingredients: ''
  },
  {
    id: "Friday",
    title: "Salsbury Steak", protien: "Beef",
    text: "A favorite comfort food with a mushroom gravy to relax at the end of the week",
    side1: "Boiled Potatoes", side2: "Corn", side3: "Cabbage",
    ingredients: 'mushrooms, beef broth'
  },
  {
    id: "Saturday",
    title: "Fried Chicken Thighs", protien: "Chicken",
    text: "Grant's specialty and go-to on his night of culinary discovery",
    side1: "Brown Rice", side2: "Brussel Sprouts with Bacon", side3: "Tomato Wedges",
    ingredients: 'brussel sprouts, tomato'
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
            <button class="btn custom-silver-button-color" data-toggle="tooltip" title="recipe info here">Recipe</button>
          </div>
        </div>
      </div>
    `;

  // Set the HTML content of the col element
  colElement.innerHTML = cardHtml;

  // Append the col element to the daysContainer
  daysContainer.appendChild(colElement);
}