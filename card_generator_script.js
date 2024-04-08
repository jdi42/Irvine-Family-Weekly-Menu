// Define data for each day
var daysData = [
  {
    id: "Sunday",
    title: "Roast Duck", protien: "Poultry",
    text: "Yes, you heard it.. duck! Roasted with a rosemary lemon sage infusion",
    side1: "Wild Rice Pilaf", side2: "Carrots & Broccoli", side3: "",
    ingredients: "Nothing to buy",
    recipe:"Brand Spanking New"
  },
  {
    id: "Monday",
    title: "Beef Stew", protien: "Beef",
    text: "Too lazy to make the pastry for pies, making stew instead. Hah!",
    side1: "Baking Powder Biscuts", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Red Binder"
  },
  {
    id: "Tuesday",
    title: "Crisp Skin Salmon with Honey Lime Sauce", protien: "Fish",
    text: "A new cast iron recipe to try out",
    side1: "Zuchinni Cakes", side2: "Pouch Potatoes", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Cast Iron Cookbook"
  },
  {
    id: "Wednesday",
    title: "Stew... again", protien: "Beef",
    text: "Complete the cycle of laziness and use up leftovers",
    side1: "Homemade Bread", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Red Binder... again"
  },
  {
    id: "Thursday",
    title: "Instant pot Chicken with Peppers and Rice", protien: "Chicken",
    text: "A one dish instant pot meal",
    side1: "", side2: "", side3: "",
    ingredients: 'Nothing to buy',
    recipe:"Green Binder"
  },
  {
    id: "Friday",
    title: "Pizza", protien: "Pork",
    text: "A new type of pepperoni, on a classic recipe",
    side1: "Green Salad", side2: "", side3: "",
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
