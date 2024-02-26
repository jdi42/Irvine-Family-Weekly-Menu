// Define data for each day
var daysData = [
  {
    id: "Sunday",
    title: "Takeout", protien: "",
    text: "",
    side1: "", side2: "", side3: "",
    ingredients: "Nothing to buy"
  },
  {
    id: "Monday",
    title: "Ham", protien: "Pork",
    text: "Savor our perfectly roasted Ham with creamy Potatoes au Gratin and crisp Green Beans—a classic trio of flavors for a delightful and satisfying meal.",
    side1: "Potatoes au Gratin", side2: "Green Beans with Almonds", side3: "Sliced Tomato",
    ingredients: 'Nothing to buy'
  },
  {
    id: "Tuesday",
    title: "Chicken Pot Pie", protien: "Chicken",
    text: "Experience comfort with our Chicken Pot Pie, filled with tender chicken and veggies, accompanied by a side of crisp sliced raw veggies. A perfect balance of warmth and freshness in every bite.",
    side1: "Sliced Raw Veggies", side2: "", side3: "",
    ingredients: 'Nothing to buy'
  },
  {
    id: "Wednesday",
    title: "Chef's Salad", protien: "Pork",
    text: "Savor our Chef's Salad – a crisp blend of fresh greens, tomatoes, cucumber, hard-boiled eggs, ham, and cheddar cheese, topped with our signature dressing and homemade croutons. A delicious and satisfying choice for a wholesome meal.",
    side1: "Garlic Toast", side2: "", side3: "",
    ingredients: 'Nothing to buy'
  },
  {
    id: "Thursday",
    title: "Italian Meatball Subs", protien: "Beef",
    text: "Satisfy your cravings with our Italian Meatball Subs – homemade beef meatballs, marinara, melted mozzarella, all in a toasted baguette. Paired with golden fries for the perfect bite. Italian comfort, ready to enjoy.",
    side1: "Fries", side2: "Side Salad", side3: "",
    ingredients: 'Nothing to buy'
  },
  {
    id: "Friday",
    title: "Ham and Cheese Frittata", protien: "Pork",
    text: "Savor our Ham and Cheese Frittata—fluffy eggs loaded with savory ham and melted cheese. A delicious and hearty finish to your day.",
    side1: "Tomato Wedges", side2: "", side3: "",
    ingredients: 'Nothing to buy'
  },
  {
    id: "Saturday",
    title: "Pork Chops with Mushroom Sauce", protien: "",
    text: "Savor our Pork Chops with Mushroom Sauce, served with green beans and boiled potatoes—a harmonious blend of savory perfection.",
    side1: "Green Beans", side2: "Boiled Potatoes", side3: "",
    ingredients: 'Nothing to buy'
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
