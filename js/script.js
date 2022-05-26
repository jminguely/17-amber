var click = false;
$(document).on('click', '.hamburger--3dx', function () {
    click = !click;
    if(click) {
        $(this).addClass('is-active');
        $("#dropDown").hide().animate({
            height: 'toggle'
        });
    }else {
        $(this).removeClass('is-active');
        $("#dropDown").show().animate({
            height: 'toggle'
        });
    }
});