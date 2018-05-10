function initialise() {
    myFunction();
}

 $(".nav-link").on('click', function(e) {
                e.preventDefault();
                $($(this).attr('href'), '#hide-and-seek').show().siblings().hide();
            });
