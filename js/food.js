// ======================================
// JavaScript specific to food.html page
// ======================================

// Stores all recipes as an Array of Objects
// May come from backend as JSON

// A recipe object contains 4 fields:
// 1. title: Title of the recipe
// 2. min_req: Time required in minutes
// 3. ingredients: An array of ingredients
// 4. procedure: A detailed procedure to make the dish
const recipes = [{
        title: "Chicken Wing",
        min_req: 15,
        ingredients: [
            "Chicken",
            "Hot Sauce",
            "Butter",
            "Garlic",
            "Soya Sauce",
            "Olive Oil",
            "Salt",
            "Pepper"
        ],
        procedure: `The magic ingredient to crispy wings without a lot of oil is aluminium free baking powder. It may sounds unappealing, but coating chicken wings in seasoned baking powder is what makes the skin super crispy. You won’t taste it in the end
    results, so long as you use aluminium-free. To be clear, make sure you use baking powder, NOT baking soda, because there is a big difference! After your chicken wings are coated, place aluminium foil on your baking sheet to catch
    any drippings, then arrange a wire rack over the top. Place your wings in an even layer to allow the heat to be evenly distributed. Serve your buffalo wings with blue cheese dip, ranch dipping sauce or a creamy garlic mayo. Don’t
    forget the celery and/or carrot sticks on the side! Game day has never looked so easy and so good!`
    },
    {
        title: "Aloo Paratha",
        min_req: 45,
        ingredients: [
            "ing 1",
            "ing 2"
        ],
        procedure: `I don't know`
    },
    {
        title: "Paneer 65",
        min_req: 60,
        ingredients: [
            "ing 1",
            "ing 2"
        ],
        procedure: `I don't know`
    }
];

// Function to render recipe to the DOM
function renderRecipe(recipes) {
    // Getting access to the recipe view section
    let recipeView = document.getElementById("recipe-view");
    // Updating the HTML to selected recipe
    recipeView.innerHTML = recipeTemplate(recipes[currentRecipeIndex]);
}

// Initially render the first recipe
let currentRecipeIndex = 0;

// Get template source string
const recipeSource = document.getElementById('recipe-template').innerHTML;

// Compile using handlebars
const recipeTemplate = Handlebars.compile(recipeSource);

// Selecting all recipe cards
const recipeCards = document.getElementsByClassName("recipe-list")[0].children;

// Iterating over all the recipe cards
for (let card of recipeCards) {
    // Adding event listener on this `card`
    card.addEventListener('click', function() {
        // Updating current recipe index
        currentRecipeIndex = Number(this.id.slice(6));

        // Rendering updated recipe
        renderRecipe(recipes);

        // Unhighlight all the recipe
        for (let c of recipeCards) {
            // Remove the selected class
            c.classList.remove("selected");
            // Remove arrow up icon
            c.children[2].classList.remove("fa-chevron-up");
            // Add arrow down icon
            c.children[2].classList.add("fa-chevron-down");
        }

        // Remove arrow down icon from the selected card
        this.children[2].classList.remove("fa-chevron-down");

        // Add arrow up icon to the selected card
        this.children[2].classList.add("fa-chevron-up");

        // Highlight the selected recipe
        this.classList.add("selected");
    });
}

// Initial Render
renderRecipe(recipes);