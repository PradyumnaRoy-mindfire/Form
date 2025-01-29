var formModule = (function($){
    var formData = {"fname":"","lname":"","pass":"","phno":"","email":"","gender":"","address":"","pin":"","terms":""};
    var selectedRow = null;    // //Error 
    var i = 0;
    function init() {
        ValidAndcontrolShow(formData);
        $("#sessionstorage").on("click",(e)=> {
            e.preventDefault();
          
            if(selectedRow == null) {
                let data = readFormData()
                storedInSessionStorage(data);
                formModule.login();
            } else {
                tableModule.updateRecord(selectedRow);
            }
            $(document).on('selectedRowUpdated', function(event, updatedRow) {
                selectedRow = updatedRow;
            });
           
        });
        $("#localstorage").on("click",(e)=> {
            e.preventDefault();
    
            if(selectedRow == null) {
                let data = readFormData();
                storedInLocalStorage(data);
                console.log(localStorage);
                formModule.login();
            } else {
                tableModule.updateRecord(selectedRow);
            }
            $(document).on('selectedRowUpdated', function(event, updatedRow) {
                selectedRow = updatedRow;
            });
           
        });
        function readFormData() {
            formData.fname = $('#fname').val();
            // formData["fname"] = $('#fname').val();
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
             
            // ValidAndcontrolShow(formData);

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
    function login() {
        let localEmail = localStorage.getItem('email');
        let localPass = localStorage.getItem('pass');
        let sessionEmail = sessionStorage.getItem('email');
        let sessionPass = sessionStorage.getItem('pass');
        let inputEmail = $("#loginEmail").val();
        let inputPass = $("#loginPass").val();
        if(localEmail != inputEmail || sessionEmail != inputEmail){
            $('#loginEmail').keyup(function(){
                let emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/
                let enteredInput = $("#loginEmail").val();
                if(enteredInput == ""){
                    isValid = false;
                    emailErr.text( "**This field is required...");
                    $("#loginEmail").addClass('errorEffect');
                }
                
                else if(emailRegx.test(enteredInput) == false) {
                    isValid = false;
                    emailErr.text("**Email is not valid...");
                    $("#loginEmail").addClass('errorEffect');
                }
            });
        }
    }
    
    function resetForm() {
        $("#form")[0].reset(); 
    }
    function ValidAndcontrolShow(formData) {
        let isValid = validationModule.validation(formData)
        console.log("isvalid",isValid);
        if(isValid == true && selectedRow == null) {
            console.log("Form validated");
            resetForm()
            // tableModule.showData();
            // pageModule.displaySubmitPopup();
        }
    }

    return {
        login:login,
        init:init ,
        formData:formData,
        resetForm : resetForm,
        // ValidAndcontrolShow:ValidAndcontrolShow
    }
})(jQuery);





















// Initialize the module
// $(document).ready(function() {
//     tableModule.init();
// });


// var formModule = (function($){

//     var formData = {};
//     var selectedRow = null;
    
//     function init() {
//         // console.log("formModule");
//         var i = 0;
//             //For AutoSubmit
//         $("#form").on("submit",(e)=> {
//             e.preventDefault();
//             if(selectedRow == null) {
//                 readFormData();
        
//             } else {
//                 // updateRecord()
//             }
//         });
//         function readFormData() {
//             formData.fname = $('#fname').val();
//             // formData["fname"] = $('#fname').val();
//             formData["lname"] = $('#lname').val();
//             formData["pass"] = $('#pass').val();
//             formData["phno"] = $('#phno').val();
//             formData["email"] = $('#email').val();
//             formData["country"] = $('#country').val();
//             formData["state"] = $('#state').val();
//             formData["city"] = $('#city').val();
//             formData["address"] = $('#address').val();
//             formData["pin"] = $('#pin').val();
//             formData["terms"] = $('#terms')[0].checked;
//             formData.index = i++;  

//             // ValidAndcontrolShow(formData);
//             showData(formData)

//             // console.log(formData)
//         }
//         // function ValidAndcontrolShow(formData) {
//         //     isValid = validation(formData)
//         //     if(isValid == true && selectedRow == null) {
//         //         // resetForm()
//         //         // alert("Form Submitted Successfully")
//         //         showData(formData);
//         //     }
//         // }

//     }
//     return {
//         init:init ,
//         formData:formData
//     }
// })(jQuery);