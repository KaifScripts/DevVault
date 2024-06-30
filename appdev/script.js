// Local storage for recipes
const recipesDB = {
    "tomato-onion-garlic": {
        name: "Tomato and Onion Salad",
        image: "https://example.com/tomato-onion-salad.jpg",
        ingredients: ["Tomato", "Onion", "Garlic"],
        instructions: "Chop the tomato and onion, and mince the garlic. Mix together and serve.",
        cuisine: "Italian",
        prepTime: "Under 30 minutes",
        dietaryRestrictions: ["Vegetarian"]
    },
    "tomato-garlic": {
        name: "Tomato and Garlic Soup",
        image: "https://example.com/tomato-garlic-soup.jpg",
        ingredients: ["Tomato", "Garlic"],
        instructions: "Blend the tomato and garlic together with some chicken broth. Serve hot.",
        cuisine: "Italian",
        prepTime: "30-60 minutes",
        dietaryRestrictions: ["Vegetarian"]
    },
    // Add more recipes here
};

// Function to display recipes
function displayRecipes(recipes) {
    const recipesContainer = document.getElementById("recipes-container");
    recipesContainer.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeCard = document.createElement("div");
        recipeCard.className = "recipe-card";
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
            <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
            <p>Instructions: ${recipe.instructions}</p>
        `;
        recipesContainer.appendChild(recipeCard);
    });
}

// Function to filter recipes
function filterRecipes(ingredients, cuisine, prepTime, dietaryRestrictions) {
    const filteredRecipes = [];
    Object.keys(recipesDB).forEach((recipeId) => {
        const recipe = recipesDB[recipeId];
        if (ingredients.every((ingredient) => recipe.ingredients.includes(ingredient)) &&
            (cuisine === "" || recipe.cuisine === cuisine) &&
            (prepTime === "" || recipe.prepTime === prepTime) &&
            (dietaryRestrictions.length === 0 || recipe.dietaryRestrictions.some((restriction) => dietaryRestrictions.includes(restriction)))) {
            filteredRecipes.push(recipe);
        }
    });
    return filteredRecipes;
}

// Function to save recipe to local storage
function saveRecipe(recipeId) {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    savedRecipes.push(recipeId);
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
}

// Function to display saved recipes
function displaySavedRecipes() {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    const savedRecipesContainer = document.getElementById("saved-recipes-container");
    savedRecipesContainer.innerHTML = "";
    savedRecipes.forEach((recipeId) => {
        const recipe = recipesDB[recipeId];
        const recipeCard = document.createElement("div");
        recipeCard.className = "recipe-card";
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
            <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
            <p>Instructions: ${recipe.instructions}</p>
        `;
        savedRecipesContainer.appendChild(recipeCard);
    });
}

// Event listener for submit button
document.getElementById("submit-btn").addEventListener("click", () => {
    const ingredients = [];
    document.querySelectorAll("#ingredients-list input[type='checkbox']:checked").forEach((checkbox) => {
        ingredients.push(checkbox.nextElementSibling.textContent);
    });
    const cuisine = document.getElementById("cuisine").value;
    const prepTime = document.getElementById("prep-time").value;
    const dietaryRestrictions = [];
    document.querySelectorAll("#dietary-restrictions option:selected").forEach((option) => {
        dietaryRestrictions.push(option.value);
    });
    const filteredRecipes = filterRecipes(ingredients, cuisine, prepTime, dietaryRestrictions);
    displayRecipes(filteredRecipes);
});

// Event listener for save recipe button
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("save-recipe-btn")) {
        const recipeId = event.target.dataset.recipeId;
        saveRecipe(recipeId);
        displaySavedRecipes();
    }
});

// Display saved recipes on page load
displaySavedRecipes();

//...

// Display recipes initially
displayRecipes(Object.values(recipesDB));

// Add event listeners to filter options
document.getElementById("cuisine").addEventListener("change", () => {
  const ingredients = [];
  document.querySelectorAll("#ingredients-list input[type='checkbox']:checked").forEach((checkbox) => {
    ingredients.push(checkbox.nextElementSibling.textContent);
  });
  const cuisine = document.getElementById("cuisine").value;
  const prepTime = document.getElementById("prep-time").value;
  const dietaryRestrictions = [];
  document.querySelectorAll("#dietary-restrictions option:selected").forEach((option) => {
    dietaryRestrictions.push(option.value);
  });
  const filteredRecipes = filterRecipes(ingredients, cuisine, prepTime, dietaryRestrictions);
  displayRecipes(filteredRecipes);
});

document.getElementById("prep-time").addEventListener("change", () => {
  const ingredients = [];
  document.querySelectorAll("#ingredients-list input[type='checkbox']:checked").forEach((checkbox) => {
    ingredients.push(checkbox.nextElementSibling.textContent);
  });
  const cuisine = document.getElementById("cuisine").value;
  const prepTime = document.getElementById("prep-time").value;
  const dietaryRestrictions = [];
  document.querySelectorAll("#dietary-restrictions option:selected").forEach((option) => {
    dietaryRestrictions.push(option.value);
  });
  const filteredRecipes = filterRecipes(ingredients, cuisine, prepTime, dietaryRestrictions);
  displayRecipes(filteredRecipes);
});

document.getElementById("dietary-restrictions").addEventListener("change", () => {
  const ingredients = [];
  document.querySelectorAll("#ingredients-list input[type='checkbox']:checked").forEach((checkbox) => {
    ingredients.push(checkbox.nextElementSibling.textContent);
  });
  const cuisine = document.getElementById("cuisine").value;
  const prepTime = document.getElementById("prep-time").value;
  const dietaryRestrictions = [];
  document.querySelectorAll("#dietary-restrictions option:selected").forEach((option) => {
    dietaryRestrictions.push(option.value);
  });
  const filteredRecipes = filterRecipes(ingredients, cuisine, prepTime, dietaryRestrictions);
  displayRecipes(filteredRecipes);
});

// Add event listener to save recipe button
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("save-recipe-btn")) {
    const recipeId = event.target.dataset.recipeId;
    saveRecipe(recipeId);
    displaySavedRecipes();
  }
});