var formModule = (function($){
    var formData = {"fname":"","lname":"","pass":"","phno":"","email":"","gender":"","address":"","pin":"","terms":""};
    var i = 0;
    //email array will keep the unique entries 
    var emailArray = []
    function init() {
        var sessionStorageFlag = false;
        
        validationModule.validation(formData);
        async function submit() {
            // isValid = validationModule.validation(data);

            // $(document).on('isValidUpdated', function(event, newIsValid) {
            //     isValid = newIsValid;
            //     console.log("isvalid updated",isValid);
            // });

               
            // if(isValid == true) {
            //     pageModule.displaySubmitPopup('.submitPopup');
            //     resetForm();
            //     setTimeout(function(){
            //         window.location.assign("./login.php") ;    
            //     },1000)
            // }
                
                
            // });
        
    
            
            // $(".login").on('click',function(e) {
            //     console.log("Login bton clicked");
            //     e.preventDefault();
            //     login();
            // });
            
        }   
        submit()
        
        

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
      
        
    }
    function login(storage) {
        let loginValid = true;
        let inputEmail = $("#loginEmail").val();
        
        let inputPass = $("#loginPass").val();
        let localEmail = "";
        let localPass = "";
        let storageFlag = false;
        let dataArray = JSON.parse(localStorage.getItem("formDataArray"));
        dataArray?.forEach(element => {
            if(inputEmail == element.email) {
                localEmail = element.email;
                localPass = element.pass;
                storageFlag = true;
            }
        });

        let sessionEmail = sessionStorage.getItem('email');
        let sessionPass = sessionStorage.getItem('pass');

              //to know if the entered data is of session
        if(storageFlag == false && sessionEmail == inputEmail) {
            sessionStorageFlag = true;
        }
        
        
      
        
        if(( localPass != inputPass) || ( sessionPass != inputPass)){
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
            // e.preventDefault();

            //After updation hide the update button
            setTimeout(function(){
                $('.update').hide();
            },500)
            let updatedFormData = {
                'fname': $("#fnameProfile").val(),
                'lname': $("#lnameProfile").val(),
                'address': $("#addressProfile").val(),
                'email': $("#emailProfile").val(),
                'phno': $("#phnoProfile").val()
            }
            formDataArray[i] = updatedFormData;
            pageModule.displaySubmitPopup(".updatePopup");
        })

        $(".logoutIcon").on('click',function(){
            $('.container').addClass('doBlur');
            pageModule.displayLogoutPopup(".logoutPopup");
            $("#btnLogoutPopup").on('click',function(){
                $(".logoutPopup").removeClass('showPopup');
                $('.container').removeClass('doBlur');
                //reseting form before leaving
                $("#profile-form")[0].reset();
                setTimeout(function(){
                    window.location.assign("./login.html");
                },500);
            })
            $("#btnCancelPopup").on('click',function(){
                $(".logoutPopup").removeClass('showPopup');
                $('.container').removeClass('doBlur');
            })
            
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







                                                                                                                                