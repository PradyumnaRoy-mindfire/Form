var favouriteModule = (function($){
    $('.favouriteIcon').on('click',function(){
        $(".container2").show();
    })
    $('.closeFavourite').on('click',function() {
        $(".container2").hide();
    })
    $('#openForm').on('click',function() {
        $(".dropdown-form").toggle();
    })


    
    function init(){
        $('.logoutIcon').on('click',function() {
            pageModule.displayLogoutPopup('.logputPopup')
            
            window.location.href = ("http://localhost/test/Form/php/login.php");
        });
       
    }
    return {
        init:init,
    }
})(jQuery);