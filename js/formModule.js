var formModule = (function($){
    var formData = {"fname":"","lname":"","pass":"","phno":"","email":"","gender":"","address":"","pin":"","terms":""};
    var i = 0;
    var localStorageArray = []
    var emailArray = []
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
        submit()
        if(localStorage.getItem("loginProfileEmail") != null) {
            profile(storage);
        }
        

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
            localStorageArray.push(formData);
            emailArray.push(formData.email);
            localStorage.setItem("emailArray",JSON.stringify(emailArray));
            localStorage.setItem("formDataArray",JSON.stringify(localStorageArray));
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
        let inputEmail = $("#loginEmail").val();
        let inputPass = $("#loginPass").val();
        let localEmail = "";
        let localPass = "";
        let dataArray = JSON.parse(localStorage.getItem("formDataArray"));
        dataArray.forEach(element => {
            if(inputEmail == element.email) {
                localEmail = element.email;
                localPass = element.pass;
                localStorage.setItem("loginProfileEmail",element.email);
            }
        });
        
        let sessionEmail = sessionStorage.getItem('email');
        let sessionPass = sessionStorage.getItem('pass');
        
      
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
            //Displaying loginPopup after loginned successfully
            pageModule.displaySubmitPopup(".loginPopup");
            setTimeout(function(){
                window.location.assign("./profile.html");
            },1000)

        }
        
    }
 
   
    function profile(storage) {
        let fname = "";
        let lname = "";
        let address = "";
        let email = "";
        let phno = "";
        let  i = 0;
        formDataArray = JSON.parse(localStorage.getItem("formDataArray"));
        let loginProfileEmail = localStorage.getItem("loginProfileEmail");
        //In for-each lopp we can't use 'break' statement
        for(i = 0;i < formDataArray.length;i++) {
            if(loginProfileEmail == formDataArray[i].email) {
                email = formDataArray[i].email;
                fname = formDataArray[i].fname;
                lname = formDataArray[i].lname;
                address = formDataArray[i].address;
                phno = formDataArray[i].phno;
                break;
            }
        }


        $("#fnameProfile").val(fname);
        $("#lnameProfile").val(lname);
        $("#phnoProfile").val(phno);
        $("#emailProfile").val(email);
        $("#addressProfile").val(address);
        // If the user click on the any input field 
        $(".inpDiv").on('click',function(){
            $('.update').show();
        })
        $("#btnUpdate").on("click",function(e){
            e.preventDefault();
            let newFormData = {
                'fname': $("#fnameProfile").val(),
                'lname': $("#lnameProfile").val(),
                'address': $("#addressProfile").val(),
                'email': $("#emailProfile").val(),
                'phno': $("#phnoProfile").val()
            }
            formDataArray[i] = newFormData;
            localStorage.setItem("formDataArray",JSON.stringify(formDataArray));
            pageModule.displaySubmitPopup(".updatePopup");
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







                                                                                                                                