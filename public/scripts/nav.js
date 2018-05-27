function setActiveTabWelcome() {
    var path = window.location.pathname;
    if (path.includes("welcome")) {
        $(".welcome").attr("id", "active");
    } else if (path.includes("login")) {
        $(".login").attr("id", "active");
    } else if (path=="/"){
        $(".welcome").attr("id", "active");


    }
}

function setActiveTab(){
    var path = window.location.pathname;
    if(path.includes("home")){
        $(".home").closest("a").attr("id", "active");
    }else if (path.includes("tracker")){
        $(".tracker").closest("a").attr("id", "active");
    }else if (path.includes("favourites")){
        $(".favourites").closest("a").attr("id", "active");
    }else if (path.includes("account")) {
        $(".account").closest("a").attr("id", "active");
    }
}