var validationModule = (function(){
    
    function validation(formData) {
        let fnameErr = $('#fname-err');
        let lnameErr = $('#lname-err');
        let passErr = $('#pass-err');
        let phnoErr = $('#phno-err');
        let emailErr = $('#email-err');
        let genderErr = $('#gender-err');
        let pinErr = $('#pin-err');
        let termsErr = $('#terms-err');
    

        fnameErr.text("");
        lnameErr.text("");
        passErr.text("");
        phnoErr.text("");
        emailErr.text("");
        genderErr.text("");
        pinErr.text("");
        termsErr.text("");


        let isValid = true;
                // firstname validation
        
        $("#fname").keyup(function() {
            let enteredInput = $("#fname").val();
            if(enteredInput == "") {
                fnameErr.text( "**This field is required...");
                $("#fname").addClass('errorEffect');                //For red border and red shadow
                isValid = false;
            }
            else if(enteredInput.match(/\d/)){
                fnameErr.text( "**First name should not contain any digit...");
                $("#fname").addClass('errorEffect');
                
            }
        });
                //Lastname validation
        $("#lname").keyup(function() {
            let enteredInput = $("#lname").val();
            if(enteredInput == "") {
                lnameErr.text( "**This field is required...");
                $("#lname").addClass('errorEffect');
                isValid = false;
            }
            else if(enteredInput.match(/\d/)){
                lnameErr.text( "**Last name should not contain any digit...");
                $("#lname").addClass('errorEffect');
                
            }
        });

        
       

                //Old password validation
        // if(formData['pass'] ==="" || formData['pass'].length  < 6 || formData['pass'].length  > 50 ||/[^a-zA-Z0-9\s]/.test(formData["pass"]) == false) {
        //     isValid = false;
        //     passErr.text("**Password is not valid");
        //     $("#pass").addClass('errorEffect') ;   //for red border 

            // if(formData["pass"] ==="") {
            //     passErr.textContent = "**This field is required..";
            // }
            // if(formData['pass'].length  < 2)
            //     passErr.textContent = "**Password is too small "; //password word will contain atleast 6 characters 
            // if(formData['pass'].length  > 10)
            //     passErr.textContent = "**Password is too large "; iife
            // if(/[^a-zA-Z0-9\s]/.test(formData["pass"]) == false)

        // }



        $("#pass").keyup(function() {
            let enteredInput = $("#pass").val();
            if(enteredInput == "") {
                passErr.text( "**This field is required...");
                $("#pass").addClass('errorEffect');
                isValid = false;
            }
            else if(enteredInput.length > 10){
                passErr.text( "**Password is too large...");
                $("#pass").addClass('errorEffect');
            }
            else if(!enteredInput.match(/\d/)){
                passErr.text( "**Password has no digit...");
                $("#pass").addClass('errorEffect');
            }
            else if(!enteredInput.match(/[a-z]/)){
                passErr.text( "**Password has no small character...");
                $("#pass").addClass('errorEffect');
            }
            else if(!enteredInput.match(/[A-Z]/)){
                passErr.text( "**Password has no capital character...");
                $("#pass").addClass('errorEffect');
            }
            else if(enteredInput.length < 6){
                passErr.text( "**Password is too small...");
                $("#pass").addClass('errorEffect');
            }
            
        });


        // //email validation
        $('#email').keyup(function(){
            let emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/
            let enteredInput = $("#email").val();
            if(enteredInput == ""){
                isValid = false;
                emailErr.text( "**This field is required...");
                $("#email").addClass('errorEffect');
            }
            
            else if(emailRegx.test(enteredInput) == false) {
                isValid = false;
                emailErr.text("**Email is not valid...");
                $("#email").addClass('errorEffect');
            }
        });

            //Old email validations
        // let emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/
        // if(formData['email'] ==="" || emailRegx.test(formData['email']) == false) {
        //     isValid = false;
        //     emailErr.text("**Email is not valid...");
        //     $("#email").addClass('errorEffect');
        // }

            //Pincode validation
        if(formData['pin'] === ""||formData['pin'].length > 7 || formData['pin'].length <5  || /^\d+$/.test(formData['pin']) == false) {
            pinErr.text("**Pincode is not valid..");
            $("#pin").addClass('errorEffect');
            isValid = false;
        }
        
        // //Gender Validations
            if(formData.gender == null) {
                genderErr.text("**Select your gender...");
                isValid = false;
            }
         

         //Terms & Condition Validations
        
         if(formData["terms"] == false) {
            $("#terms").addClass('errorEffect')
            termsErr.text("**Accept the terms and conditions...") ;
            isValid = false;
         }

         //phno
         if(formData['phno'].length != 10 ||  /^\d+$/.test(formData['phno']) == false) {
            phnoErr.text("**Phone no is not valid..");
            $("#phno").addClass('errorEffect')
            isValid = false;
        }

        console.log(formData);

        //  If valid data is filled in all fields
        return isValid
     
    }
    function init(){
        validation(formData)
    }
    return {
        init:init,
        validation:validation
    }
}(jQuery))