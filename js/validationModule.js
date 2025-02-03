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
                isValid = false;
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
                isValid = false;
            }
        });

                //Password  validation for registration page
        if(passwordValidation("#pass",passErr) == null) {
            isValid =  true
        }
                //Password  validation for form page
        if(passwordValidation('#loginPass',$("#loginPass-err")) == null) {
            isValid = true;
        }
       

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


            //Pincode validation
        $('#pin').keyup(function() {
            let enteredInput = $("#pin").val(); 
            if(enteredInput == "") {
                pinErr.text("**This field is required..");
                $("#pin").addClass('errorEffect');
                isValid = false;
            }
            else if(/^\d+$/.test(enteredInput) == false) {
                pinErr.text("**Pin no. contains digits only...");
                $("#pin").addClass('errorEffect');
                isValid = false;
            }
            else if(enteredInput.length < 5 || enteredInput.length > 7) {
                pinErr.text("**Pin no. has 6 digits only...");
                $("#pin").addClass('errorEffect');
                isValid = false;
            }
        })


        
        // //Gender Validations
    
            // if(!$('#male').prop('checked')||!$('#female').prop('checked')||!$('#others').prop('checked')) {
            //     genderErr.text("**Select your gender...");
            //     isValid = false;
            // }
         
            

         //Terms & Condition Validations
         
        $("#terms").change(function() {
            if($("#terms").prop("checked") == false) {
                $("#terms").addClass('errorEffect')
                termsErr.text("**Accept the terms and conditions...") ;
                isValid = false;
            }
        })
        

         //phno
        $('#phno').keyup(function(){
            let enteredInput = $("#phno").val();
            if(enteredInput == ""){
                phnoErr.text("**This field is required...");
                $("#phno").addClass('errorEffect')
                isValid = false;
            }
            else if(/^\d+$/.test(enteredInput) == false) {
                phnoErr.text("**Phone no has ten digit only..");
                $("#phno").addClass('errorEffect')
                isValid = false;
            }
            else if(enteredInput.length != 10 ) {
                phnoErr.text("**Phone no is not valid..");
                $("#phno").addClass('errorEffect')
                isValid = false;
            }
        })


                //For login page email validation
        $('#loginEmail').keyup(function(){
            let emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/
            let enteredInput = $("#loginEmail").val();
            if(enteredInput == ""){
                isValid = false;
                $("#loginEmail-err").text( "**This field is required...");
                $("#loginEmail").addClass('errorEffect');
            }
            
            else if(emailRegx.test(enteredInput) == false) {
                isValid = false;
                $("#loginEmail-err").text("**Email is not valid...");
                $("#loginEmail").addClass('errorEffect');
            }
        });

        if(formData.fname == "" || formData.pass == "" || formData.phno == "" || formData.email == "" || formData.gender == "" || formData.pin == "" || formData.terms == false){
            isValid = false;
        }
        $(document).trigger('isValidUpdated',isValid); 
        
        return isValid
     
    }




    function passwordValidation(passSelecter,passErrSelecter) {
        let isValid = true;
        $(`${passSelecter}`).keyup(function() {
            let enteredInput = $(`${passSelecter}`).val();
            if(enteredInput == "") {
                passErrSelecter.text( "**This field is required...");
                $(`${passSelecter}`).addClass('errorEffect');
                isValid = false;
            }
            else if(enteredInput.length > 10){
                passErrSelecter.text( "**Password is too large...");
                $(`${passSelecter}`).addClass('errorEffect');
                isValid = false;
            }
            else if(!enteredInput.match(/\d/)){
                passErrSelecter.text( "**Password has no digit...");
                $(`${passSelecter}`).addClass('errorEffect');
                isValid = false;
            }
            else if(!enteredInput.match(/[a-z]/)){
                passErrSelecter.text( "**Password has no small character...");
                $(`${passSelecter}`).addClass('errorEffect');
                isValid = false;
            }
            else if(!enteredInput.match(/[A-Z]/)){
                passErrSelecter.text( "**Password has no capital character...");
                $(`${passSelecter}`).addClass('errorEffect');
                isValid = false;
            }
            else if(enteredInput.length < 6){
                passErrSelecter.text( "**Password is too small...");
                $(`${passSelecter}`).addClass('errorEffect');
                isValid = false;
            }
            return isValid;
            
        });
    }

    function init(){
        validation(formData)
    }
    return {
        init:init,
        validation:validation
    }
}(jQuery))