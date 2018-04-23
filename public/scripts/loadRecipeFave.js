// I'm going to try to merge this and the load results file
function loadRecipes(recipeIDArray){

    for(let i=0; i<recipeIDArray.length; i++){
        var favedRecipe = recipes.find(function (obj) { return obj.recipe_id === recipeIDArray[i]; });

        /*Create a recipe block*/
        var recipe = document.createElement("div");
        recipe.setAttribute("class", "recipe");
        recipe.setAttribute("id", recipeIDArray[i].toString());


        /*Create the Image*/
        var image = document.createElement("img");
        image.src = favedRecipe.image;
        recipe.appendChild(image);

        /*Add the title & buttons*/
        recipe.appendChild(createRecipeTitleBar(favedRecipe.title));


        document.querySelector(".recipe-grid").appendChild(recipe);
    }
}

function createButton(labelname){
    var button =  document.createElement("button");
    var t = document.createTextNode(labelname);
    button.setAttribute("class", labelname);
    button.appendChild(t);
    return button;
}

function createRecipeTitleBar(title){
    var titleBar = document.createElement("div");
    titleBar.setAttribute("class", "recipe-titlebar");
    var rtitle = document.createElement("p");
    rtitle.innerText = title;
    rtitle.setAttribute("class", "recipe-block-title")
    titleBar.appendChild(rtitle);
    titleBar.appendChild(rtitle);

    var buttons = document.createElement("div");
    buttons.setAttribute("class", "recipe-block-btns")
    buttons.appendChild(createButton("info"));
    buttons.appendChild(createButton("remove"));
    titleBar.appendChild(buttons);
    return titleBar;
}