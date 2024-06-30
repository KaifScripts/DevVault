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
