// Define data for each day
var daysData = [
    { id: "Sunday", title: "Ribs and Rice", protien: "Pork", side1: "Brown Rice", side2: "Carrots", side3: "Broccoli" },
    { id: "Monday", title: "Test1", protien: "Pork", side1: "ingred1", side2: "ingred2", side3: "ingred3" },
    { id: "Tuesday", title: "Tesfsddt1", protien: "Pork", side1: "ingfdadred1", side2: "ingreread2", side3: "ingredaadf3" },
    { id: "Wednesday", title: "Tesarerert1", protien: "Pork", side1: "ingraaaaaaaaed1", side2: "ingrfffffffffed2", side3: "ingreeerd3" },
    { id: "Thursday", title: "Testffaaaadf1", protien: "Pork", side1: "ingrekiuykud1", side2: "ingrjiljkld2", side3: "ingrelijkld3" },
    { id: "Friday", title: "Test1", protien: "Pork", side1: "ingred1", side2: "ingred2", side3: "ingred3" },
    { id: "Saturday", title: "Test1", protien: "Pork", side1: "ingred1", side2: "ingred2", side3: "ingred3" }
];

// Get the container element
var daysContainer = document.getElementById("days-container");

// Loop through each day's data
for (var i = 0; i < daysData.length; i++) {
    var day = daysData[i];

    // Create a new col element
    var colElement = document.createElement("div");
    colElement.className = "col";

    // Create the card structure using template literals
    var cardHtml = `
      <div class="card custom-beige-color mb-3">
        <!-- Card Header with custom date color and rounded style -->
        <div class="card-header text-end custom-date-color rounded m-2">
          ${day.id}
        </div>
        <div class="card-body">
          <!-- Card Title with dynamically generated ID -->
          <h5 class="card-title" id="${day.id}-title">${day.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${day.protien}</h6>
          <p class="card-text">The dinner will be served with the following sides</p>
          <!-- List of sides with dynamically generated IDs -->
          <ul class="list-group list-group-flush">
            <li class="list-group-item custom-beige-color" id="${day.id}-side-1">${day.side1}</li>
            <li class="list-group-item custom-beige-color" id="${day.id}-side-2">${day.side2}</li>
            <li class="list-group-item custom-beige-color" id="${day.id}-side-3">${day.side3}</li>
          </ul>
          <!-- Button for Ingredients with custom silver button color -->
          <button type="button" class="btn custom-silver-button-color" data-bs-toggle="modal" data-bs-target="#ingredientModal">
            Ingredients
          </button>
          <!-- Button for Recipe with custom silver button color -->
          <a href="#" class="btn custom-silver-button-color">Recipe</a>
        </div>
      </div>
    `;

    // Set the HTML content of the col element
    colElement.innerHTML = cardHtml;

    // Append the col element to the daysContainer
    daysContainer.appendChild(colElement);
}