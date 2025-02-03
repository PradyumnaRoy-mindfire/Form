var formModule = (function($){
    var formData = {"fname":"","lname":"","pass":"","phno":"","email":"","gender":"","address":"","pin":"","terms":""};
    var i = 0;
    function init() {
        
        validationModule.validation(formData);
        let storage = localStorage;
        async function submit() {
            $("#localstorage").on("click",(e)=> {
                e.preventDefault();
                
                storage = localStorage;
                let data = readFormData();
                storedInLocalStorage(data);
                let isValid = validationModule.validation(data);
    
                $(document).on('isValidUpdated', function(event, newIsValid) {
                    isValid = newIsValid;
                    console.log("isvalid updated",isValid);
                });
                console.log("Before going to the login page",validationModule.validation(data));
                if(isValid) {
                    pageModule.displaySubmitPopup('.storagePopup');
                    setTimeout(function(){
                        window.location.assign("./login.html") ;    
                    },1000)
                }
                
                
            });
            $("#sessionstorage").on("click",(e)=> {
                e.preventDefault();
                storage = sessionStorage;
                let data = readFormData()
                storedInSessionStorage(data);
                let isValid = validationModule.validation(data);
    
                $(document).on('isValidUpdated', function(event, newIsValid) {
                    isValid = newIsValid;
                    console.log("isvalid updated",isValid);
                });
                console.log("Before going to the login page",validationModule.validation(data));
                if(isValid) {
                    pageModule.displaySubmitPopup('.storagePopup');
                    setTimeout(function(){
                        window.location.assign("./login.html") ;    
                    },1000)
                }
            });
    
            
            $(".login").on('click',function(e) {
                console.log("Login bton clicked");
                e.preventDefault();
                login(storage);
            });
            
        }
        profile(storage);

        function readFormData() {
            formData.fname = $('#fname').val();
            formData["lname"] = $('#lname').val();
            formData["pass"] = $('#pass').val();
            formData["phno"] = $('#phno').val();
            formData["email"] = $('#email').val();
                //For gender 
            if($('#male').prop('checked')) {
                formData.gender = "Male";
            }
            else if($('#female').prop('checked')){
                formData.gender = "Female";
            }
            else if($('#others').prop('checked')){
                formData.gender = "Others";
            }


            formData["address"] = $('#address').val();
            formData["pin"] = $('#pin').val();
            formData["terms"] = $('#terms')[0].checked;
            formData.index = i++;  
            console.log(formData);
             

            return formData;
        }
        function storedInLocalStorage(formData) {
            localStorage.setItem("fname",formData.fname);
            localStorage.setItem("lname",formData.lname);
            localStorage.setItem("pass",formData.pass);
            localStorage.setItem('phno',formData.phno);
            localStorage.setItem('email',formData.email);
            localStorage.setItem('gender',formData.gender);
            localStorage.setItem('address',formData.address);
            localStorage.setItem('pin',formData.pin);
            localStorage.setItem('terms',formData.terms);
        }
        function storedInSessionStorage(formData) {
            sessionStorage.setItem("fname",formData.fname);
            sessionStorage.setItem("lname",formData.lname);
            sessionStorage.setItem("pass",formData.pass);
            sessionStorage.setItem('phno',formData.phno);
            sessionStorage.setItem('email',formData.email);
            sessionStorage.setItem('gender',formData.gender);
            sessionStorage.setItem('address',formData.address);
            sessionStorage.setItem('pin',formData.pin);
            sessionStorage.setItem('terms',formData.terms);
        }
        
    }
    function login(storage) {
        console.log("Login fuction called",storage==localStorage);
        let loginValid = true;
        let localEmail = localStorage.getItem('email');
        let localPass = localStorage.getItem('pass');
        let sessionEmail = sessionStorage.getItem('email');
        let sessionPass = sessionStorage.getItem('pass');
        let inputEmail = $("#loginEmail").val();
        let inputPass = $("#loginPass").val();
      
        if(localEmail != inputEmail && sessionEmail != inputEmail){
            console.log("Email doesnot matched");
            $('#loginEmail').keyup(function() {
                $('#loginEmail-err').text("**Email is not valid...");
                $("#loginEmail").addClass('errorEffect');
            });
            loginValid = false;
        }
        //If localstorage email is input but localStorage password is not provided
        if((storage == localStorage && localPass != inputPass) || (storage == sessionStorage && sessionPass != inputPass)){
            console.log("Pass doesnot matched");
            $('#loginPass').keyup(function() {
                $('#loginPass-err').text("**Password does not match...");
                $("#loginPass").addClass('errorEffect');
            });
            loginValid = false;
        }

        if(localPass != inputPass && sessionPass != inputPass) {
            $('#loginPass').keyup(function() {
                $('#loginPass-err').text("**Password is not valid...");
                $("#loginPass").addClass('errorEffect');
            });
            loginValid = false;
        }
        
        console.log(loginValid);
        
        if(loginValid == true) {
            flag = true;
            pageModule.displaySubmitPopup(".loginPopup")
            setTimeout(function(){
                window.location.assign("./profile.html");
            },1000)

        }
        
    }
 
   
    function profile(storage) {
        let fname = storage.getItem('fname');
        let lname = storage.getItem('lname');
        let address = storage.getItem('address');
        let email = storage.getItem('email');
        let phno = storage.getItem('phno');
        $("#fnameProfile").val(fname);
        $("#lnameProfile").val(lname);
        $("#phnoProfile").val(phno);
        $("#emailProfile").val(email);
        $("#addressProfile").val(address);
        $(".inpDiv").on('click',function(){
            $('.update').show();
        })
        $("#btnUpdate").on("click",function(e){
            e.preventDefault();
            storage.setItem('fname',$("#fnameProfile").val());
            storage.setItem('lname',$("#lnameProfile").val());
            storage.setItem('address',$("#addressProfile").val());
            storage.setItem('email',$("#emailProfile").val());
            storage.setItem('phno',$("#phnoProfile").val());
        })
        favouriteModule.readFavouriteData();
        
    }
    
    function resetForm() {
        $("#form")[0].reset(); 
    }
  

    return {
        
        profile:profile,
        login:login,
        init:init,
        formData:formData,
        resetForm : resetForm,
    }
})(jQuery);





















