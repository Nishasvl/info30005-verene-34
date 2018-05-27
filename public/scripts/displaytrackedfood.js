const displayFood = food => {
    const foodId = food._id;

    var foodname = food.name;
    if(foodname==""){
        foodname = "Unnamed";
    }




    const expiryDate = food.date;
    const today = (new Date()).setHours(0,0,0,0);
    const daysleft = Math.floor(((Date.parse(expiryDate)) - today) / (1000 * 60 * 60 * 24));


    if (food.image == 'fruits') {
        food.image = "https://www.fruitonly.com.au/Skin/RosesOnly/Images/Products/850,850/LargeClassicFruitHamper.jpg";
    }
    else if (food.image == 'vegetables') {
        food.image = "https://www.builtlean.com/wp-content/uploads/2012/06/eat-more-vegetables-1.jpg";
    }
    else if (food.image == 'meats') {
        food.image = "https://www.sixpackbags.com/wp/wp-content/uploads/2013/03/healthylunchmeats.jpeg";
    }
    else if (food.image == 'dairy') {
        food.image = "http://images.ritewayfoodservice.com.au/2010/10/dairy-300x270.jpg";
    }
    else if (food.image == 'carbohydrates') {
        food.image = "https://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/94/180/149162559.jpg";
    }
    else if (food.image == 'other') {
        food.image = "https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg";
    }
    else if(food.image == "") {
        food.image = ""
    }

    // notification badge colour
    let colour = '';
    if (daysleft < 0) {
        colour = '<div class="top-right"><span class="w3-badge w3-xlarge red">' + daysleft + '</span></div>';
    }
    else if (daysleft <= 2) {
        colour = '<div class="top-right"><span class="w3-badge w3-xlarge yellow">' + daysleft + '</span></div>';
    }
    else {
        colour = '<div class="top-right"><span class="w3-badge w3-xlarge green">' + daysleft + '</span></div>';
    }



    // creating new food item
    const newLi = $('<div class="grid-item">'
        +'<div class="container1">'
        + '<div class="top-centre"><p>' + foodname + '</p></div>' + colour
        +'<img src="' + food.image + '" width = "200" height="200" id="' + foodname +'"' + 'alt="' + foodname +'">'



        + '<div class="overlay">'
        + '<button data-mongo-id="' + foodId +'" class="delete-btn centered" >Delete</button>'
        + '<div>'

        +'</div>'
        +'</div>');


    // add whole food item to website
    $('.grid-container').append(newLi);

    $('#input').val('');
    return false; // So the change persists
};