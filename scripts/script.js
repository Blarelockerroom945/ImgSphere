$(document).ready(function(){
    $(".filter").click(function(){
        var filterValue = $(this).attr("data-filter");

        $(".filter").removeClass("btn-primary").addClass("btn-outline-primary");
        $(this).addClass("btn-primary").removeClass("btn-outline-primary");

        if (filterValue == "all") {
            $(".gallery-item").fadeIn(400);
        } else {
            $(".gallery-item").fadeOut(400);
            setTimeout(function(){
                $("." + filterValue).fadeIn(400);
            }, 400);
        }
    });
});
