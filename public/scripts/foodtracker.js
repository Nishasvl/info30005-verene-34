//Delete button removes the tracked item
$(document).ready(function($) {
    $('.grid-container').on("click", ".delete-btn", function(){
        $(this).closest(".grid-item").remove();
    });

    $(function() {
        $.ajax({
            type: "GET",
            url: "/foodtracker",
            success: function(data){
                console.log(data);
                data.forEach(displayFood)
            },
            failure: function(errMsg) {
                console.log(errMsg);
            }
        })
    });

    // add new item
    $('form').submit(function() {

        if ($('#inputfood').val() !== '') {
            displayFood({
                name: $('#inputfood').val(),
                image: document.querySelector('input[type=file]').files[0],
                date: $('#inputdate').val()
            });
        }
    });
    // $('ul').sortable(); // Because what good is a to-do list that you can't sort? :)

    const displayFood = food => {
        const foodname = food.name;
        const expiryDate = food.date;
        const today = (new Date()).setHours(0,0,0,0);
        const daysleft = Math.floor(((Date.parse(expiryDate)) - today) / (1000 * 60 * 60 * 24));

        // notification badge colour
        let colour = '';
        if (daysleft < 0) {
            colour = '<div class="top-right"><span class="w3-badge w3-xlarge w3-red">' + daysleft + '</span></div>';
        }
        else if (daysleft <= 2) {
            colour = '<div class="top-right"><span class="w3-badge w3-xlarge w3-yellow">' + daysleft + '</span></div>';
        }
        else {
            colour = '<div class="top-right"><span class="w3-badge w3-xlarge w3-green">' + daysleft + '</span></div>';
        }

        // adds new item to webpage
        const newLi = $('<div class="grid-item">'+'<div class="container1">'+'<img src="' + food.image + '" width = "200" height="200" id="' + foodname +'"' + 'alt="' + foodname +'">'  + colour + '<button class="delete-btn centered" >Delete</button>'+'</div>'+'</div>');


        // add item image to web page
        // function previewFile(){
        //     let preview = document.querySelector('#' + foodname ); //selects the query named img
        //     const file = food.image; //sames as here
        //     let reader  = new FileReader();
        //
        //     reader.onloadend = function () {
        //         preview.src = reader.result;
        //     };
        //
        //     if (file) {
        //         reader.readAsDataURL(file); //reads the data as a URL
        //     } else {
        //         preview.src = "";
        //     }
        // }

        // old delete item function
        /*newLi.on('click', function() {
        $(this).remove(); // Attach the event handler *before* adding the element
        });*/


        // add whole input of item to website
        $('.grid-container').append(newLi);
        // previewFile();

        // old delete item function
        // $('.centered').click(function(){
        //     $(newLi).remove();
        // });

        $('#input').val('');
        return false; // So the change persists
    }
});