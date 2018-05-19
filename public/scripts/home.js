// expiring soon section
$(document).ready(function($) {

    //get food items from mongodb
    const getFood = () => {
        $.ajax({
            type: "GET",
            url: "/foodtracker",
            success: function(data){
                console.log(data);
                displayAllFood(data)
            },
            failure: function(errMsg) {
                console.log(errMsg);
            }
        })
    };


    // displaying food items
    $(function() {
        getFood();
    });
    $('form').submit(function() {

        if ($('#inputfood').val() !== '') {
            getFood();
        }
    });


    // displaying expiring soon food items (0-2 days before overdue)
    const displayAllFood = foods => {
        const today = (new Date()).setHours(0,0,0,0);
        let counter = 0;
        foods.forEach(food => {
            const expiryDate = food.date;
            const daysLeft = Math.floor(((Date.parse(expiryDate)) - today) / (1000 * 60 * 60 * 24));

            if (daysLeft >=0 && daysLeft <= 2) {
                counter++;
                displayFood(food);
            }

        });

        // if no food item expiring soon then section empty
        if (counter === 0) {
            const line = $('<h3>No food expiring anytime soon!</h3>');
            $('.grid-container').append(line)
        }

        return false;
    };
});