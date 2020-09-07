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


// Initial Rendering the selected recipe
let currentRecipeIndex = 0;
const recipeSource = document.getElementById('recipe-template').innerHTML;
const recipeTemplate = Handlebars.compile(recipeSource);

// Listening to clicks 
const recipeCards = document.getElementsByClassName("recipe-list")[0].children;

for (let card of recipeCards) {
    card.addEventListener('click', function() {
        // Updating current recipe index
        currentRecipeIndex = Number(this.id.slice(6));

        // Rendering updated recipe
        renderRecipe(recipes);

        // Unhighlight all the recipe
        for (let c of recipeCards) {
            c.classList.remove("selected");
            // Toggle icon
            c.children[2].classList.remove("fa-chevron-up");
            c.children[2].classList.add("fa-chevron-down");
        }

        // Toggle icon
        this.children[2].classList.remove("fa-chevron-down");
        this.children[2].classList.add("fa-chevron-up");

        // Highlight the selected recipe
        this.classList.add("selected");
    })
}



function renderRecipe(recipes) {
    document.getElementById("recipe-view").innerHTML = recipeTemplate(recipes[currentRecipeIndex]);
}

renderRecipe(recipes);