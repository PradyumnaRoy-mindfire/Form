var pageModule = (function($){
    
    function recomandation(){
        $("#fname-warn").on('focus',function(){
            $("#fname-recom").fadeIn();
            $("#fname-warn").on('blur',function(){
                $("#fname-recom").fadeOut();
            });
        });
        $("#lname-warn").on('focus',function(){
            $("#lname-recom").fadeIn();
            $("#lname-warn").on('blur',function(){
                $("#lname-recom").fadeOut();
            });
        });
        $("#phno-warn").on('focus',function(){
            $("#phno-recom").fadeIn();
            $("#phno-warn").on('blur',function(){
                $("#phno-recom").fadeOut();
            });
        });
        $("#email-warn").on('focus',function(){
            $("#email-recom").fadeIn();
            $("#email-warn").on('blur',function(){
                $("#email-recom").fadeOut();
            });
        });
        $("#pin-warn").on('focus',function(){
            $("#pin-recom").fadeIn();
            $("#pin-warn").on('blur',function() {
                $("#pin-recom").fadeOut();
            })
        });
        $("#pass").on('focus',function(){
            $("#pass-recom").fadeIn();
            $("#pass").on('blur',function() {
                $("#pass-recom").fadeOut();
            })
        });

    }
    function hideError() {
        $("#fname").on('input',function() {
            $("#fname").removeClass('errorEffect');
            $("#fname-err").text("");
        });
       
        $("#pass").on('input',function() {
            $("#pass").removeClass('errorEffect');
            $("#pass-err").text("");
        });
        
        $("#phno").on('input',function() {
            $("#phno").removeClass('errorEffect');
            $("#phno-err").text("");
        });
        
        $("#email").on('input',function() {
            $("#email").removeClass('errorEffect');
            $("#email-err").text("");
        });
        
        $("#gender").on('input',function() {
            $("#gender").removeClass('errorEffect');
            $("#gender-err").text("");
        });
        
        $("#pin").on('input',function() {
            $("#pin").removeClass('errorEffect');
            $("#pin-err").text("");
        });
       
        $("#terms").on('input',function() {
            $("#terms").removeClass('errorEffect');
            $("#terms-err").text("");
        });
        
       
    }
    //         //Show Password
    function showHiddenPassword() {
            // For registration form
        $('.eye').click(function() {
            $("#pass").addClass("fullWidth");
            if ($('#pass').attr('type') === "password") {
                $('#pass').attr('type','text');
            } else {
                $('#pass').attr('type','password');;
            }
            //for login form
            $("#loginPass").addClass("fullWidth");
            if ($('#loginPass').attr('type') === "password") {
                $('#loginPass').attr('type','text');
            } else {
                $('#loginPass').attr('type','password');;
            }

        });
    }
    function displaySubmitPopup(place) {      //place is refering where to show after login or after registration
        $(".container").addClass("doBlur")
        $(`${place}`).show();
        setTimeout(function() {
            $(`${place}`).hide();
            $(".container").removeClass("doBlur")
        },1000)
    }
    function displayLogoutPopup(place) {
        $(`${place}`).addClass('showPopup');
    }
    
    function init() {
        hideError();
        showHiddenPassword();
        recomandation();
    }
    return {
        init:init,
        displaySubmitPopup:displaySubmitPopup,
        displayLogoutPopup:displayLogoutPopup
    }
})(jQuery)