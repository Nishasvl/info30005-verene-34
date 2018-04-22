function loadRecipes(recipeArray){

    for(let i=0; i<recipeArray.length; i++){
        /*Create a recipe block*/
        var recipe = document.createElement("div");
        recipe.setAttribute("class", "recipe");
        recipe.setAttribute("id", recipeArray[i].recipe_id.toString());


        /*Create the Image*/
        var image = document.createElement("img");
        image.src = recipeArray[i].image;
        recipe.appendChild(image);

        /*Add the title, extra ingredients & buttons*/
        recipe.appendChild(createRecipeTitleBar(recipeArray[i]));

        document.querySelector(".recipe-grid").appendChild(recipe);


    }
}

function createIngredientList(recipe){
    var extraIngredients = document.createElement("ul");
    extraIngredients.setAttribute("class", "ingredient-list");
    var heading = document.createElement("lh");
    heading.innerText = "Extra Ingredients: ";
    extraIngredients.appendChild(heading);


    console.log(recipe.ingredients);
    for(let j=0; j<recipe.ingredients.length; j++){
        if(recipe.ingredients[j] == "garlic"){
            continue;
        }else{
            var ingredient = document.createElement("li");
            ingredient.innerText = recipe.ingredients[j];
            extraIngredients.appendChild(ingredient);
        }
    }
    return extraIngredients;

}

function createButton(labelname){
    var button =  document.createElement("button");
    var t = document.createTextNode(labelname);
    button.setAttribute("class", labelname);
    button.appendChild(t);
    return button;
}

function createRecipeTitleBar(recipe){
    var titleBar = document.createElement("div");
    titleBar.setAttribute("class", "recipe-titlebar");

    //add the title
    var rtitle = document.createElement("p");
    rtitle.innerText = recipe.title;
    rtitle.setAttribute("class", "recipe-block-title")
    titleBar.appendChild(rtitle);

    // add the ingredients
    titleBar.appendChild(createIngredientList(recipe))

    // add the buttons
    var buttons = document.createElement("div");
    buttons.setAttribute("class", "recipe-block-btns")
    buttons.appendChild(createButton("info"));
    buttons.appendChild(createButton("save"));
    titleBar.appendChild(buttons);
    return titleBar;
}