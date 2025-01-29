(function($) {
    $(document).ready(function() {
        formModule.init();
        tableModule.init();
        pageModule.init();
    });
})(jQuery)







// var script = (function($){
//     function init() {
//         console.log("script")
//     }
//     return {
//         init:init
//     }
// })(jQuery);

//     //For showing hidden password


// $(document).ready(function() {
//         //Show Password
//     $('#eye').click(function() {
//         let temp = $('#pass').attr('type')
//         if ($('#pass').attr('type') === "password") {
//             $('#pass').attr('type','text');
//         } else {
//             $('#pass').attr('type','password');;
//         }
//     });

//     var selectedRow = null;
//     var formData = {};

//         //For AutoSubmit
//     $("#form").on("submit",(e)=> {
//         e.preventDefault();
//         if(selectedRow == null) {
//             readFormData();
    
//         } else {
//             updateRecord()
//         }
//     });

//     function readFormData() {
        
//         formData["fname"] = $('#fname').val();
//         formData["lname"] = $('#lname').val();
//         formData["pass"] = $('#pass').val();
//         formData["phno"] = $('#phno').val();
//         formData["email"] = $('#email').val();
//         formData["country"] = $('#country').val();
//         formData["state"] = $('#state').val();
//         formData["city"] = $('#city').val();
//         formData["landmark"] = $('#landmark').val();
//         formData["pin"] = $('#pin').val();
//         formData["terms"] = $('#terms')[0].checked;
//         // console.log($('#terms')[0].checked)
//         // ValidAndcontrolShow(formData);
//         showData(formData)
//     }

//     function ValidAndcontrolShow(formData) {
//         isValid = validation(formData)
//         if(isValid == true && selectedRow == null) {
//             // resetForm()
//             // alert("Form Submitted Successfully")
//             showData(formData);
//          }
//     }
    
//     function validation(formData) {

//     }


//     function showData(formData) {
//         let tableBody = $('#table tbody');
     
//         var newRow = `<tr > 
//                         <td>${formData["fname"]}</td>
//                         <td>${formData["lname"]}</td>
//                         <td>${formData["phno"]}</td>
//                         <td> ${formData["email"]} </td>
//                         <td> ${formData["gender"]} </td>
//                         <td> ${formData["landmark"]} </td>
//                         <td> ${formData["city"]} </td>
//                         <td> ${formData["state"]} </td>
//                         <td> ${formData["country"]} </td>
//                         <td> ${formData["pin"]} </td>
//                         <td><button class="btnEdit"  >Edit</button> <button class="btnDelete" onclick="deleteCurRow(this)" id="btn2" >Delete</button></td> 
//                      <tr>`;
//         tableBody.append(newRow) ;
        
//         $('.btnEdit').attr('class','btnEdit');
//         $('.btnDelete').attr('class','btnDelete')
//         resetForm();
//         $(".btnEdit").on('click',function() {
//             onEdit(formData);
//         });
//     }  

//     function resetForm() {
//         $("#fname").val('');
//         $("#lname").val('');
//         $("#phno").val('');
//         $("#email").val('');
//         $("#pass").val('');
//         document.querySelector('#eye').removeAttribute('class','eyeAdd');
//         $("#landmark").val('');
//         $("#city").val('');
//         $("#state").val('');
//         $("#country").val('');
//         $("#pin").val('');
//         //For the terms and condition part
//         $('#terms')[0].checked = false;
    
//         //
//         let radioButtons = $('[name = "gender"]');
//         for(let radio of radioButtons) {
//             if(radio.checked) {
//                 radio.checked = false;
//                 break;
//             }
//         }
//         // // selectedRow = null;
//     }
//     function onEdit(td,formData) {
//         $('#submit').val("Update");
//         selectedRow = td.parentElement.parentElement;
//         console.log(td);
//         $("#fname").value = selectedRow.cells[0].innerHTML;
//         $("#lname").value = selectedRow.cells[1].innerHTML;
//         $("#phno").value = selectedRow.cells[2].innerHTML;
//         $("#email").value = selectedRow.cells[3].innerHTML;
//         $("#landmark").value = selectedRow.cells[5].innerHTML;
//         $("#city").value = selectedRow.cells[6].innerHTML;
//         $("#state").value = selectedRow.cells[7].innerHTML;
//         $("#country").value = selectedRow.cells[8].innerHTML;
//         $("#pin").value = selectedRow.cells[9].innerHTML;
        
//     }

// });




//     // //For showing hidden password
//     // function showPassword() {
//     //     let temp = document.getElementById("pass");
    
//     //     if (temp.type === "password") {
//     //         temp.type = "text";
//     //     } else {
//     //         temp.type = "password";
//     //     }
//     // }
//     // //autoSubmit JS
// // function autoSubmit(event) {
// //     event.preventDefault();    /* to stop the auto submit */

    
// //     if(selectedRow == null) {
// //         readFormData();

// //     } else {
// //         updateRecord()
// //     }
// // }

//     //autoSubmit JQ

// // function readFormData() {
// //     formData["fname"] = document.getElementById("fname").value;
// //     formData["lname"] = document.getElementById("lname").value;
// //     formData["pass"] = document.getElementById("pass").value;
// //     formData["phno"] = document.getElementById("phno").value;
// //     formData["email"] = document.getElementById("email").value;
// //     formData["country"] = document.getElementById("country").value;
// //     formData["state"] = document.getElementById("state").value;
// //     formData["city"] = document.getElementById("city").value;
// //     formData["landmark"] = document.getElementById("landmark").value;
// //     formData["pin"] = document.getElementById("pin").value;
// //     formData["terms"] = document.getElementById("terms").value;

    
// //     formData["terms"] = document.querySelector('input[type="checkbox"]').checked == true;


// //     ValidAndcontrolShow(formData);
// //     // return formData;
// // }


// // function ValidAndcontrolShow(formData) {
// //     isValid = validation(formData)
// //     if(isValid == true && selectedRow == null) {
// //         resetForm()
// //         // alert("Form Submitted Successfully")
// //         showData(formData);
// //      }
// // }
    

// //  function showData(formData) {
// //      let table = document.getElementById('table');
// //      let tableRef = table.getElementsByTagName('tbody')[0];   //tbody's 0th index is the 'th'
// //     //console.log(tableRef.rows.length)                           //shows the all rows present in the tbody
// //     let index = tableRef.rows.length                            // index is needed to insert row that is got from the no. of rows
// //     var newRow = table.insertRow(index++);  //  creating a new row,,, index is the position of the row to insert
    
    

// //     var cell1 = newRow.insertCell(0);       //one cell is created
// //     var cell2 = newRow.insertCell(1);
// //     var cell3 = newRow.insertCell(2);
// //     var cell4 = newRow.insertCell(3);
// //     var cell5 = newRow.insertCell(4);
// //     var cell6 = newRow.insertCell(5);
// //     var cell7 = newRow.insertCell(6);
// //     var cell8 = newRow.insertCell(7);
// //     var cell9 = newRow.insertCell(8);
// //     var cell10 = newRow.insertCell(9);
// //     var cell11 = newRow.insertCell(10);

    

// //     cell1.innerHTML = formData["fname"];
// //     cell2.innerHTML = formData["lname"];
// //     cell3.innerHTML = formData["phno"];
// //     cell4.innerHTML = formData["email"];
// //     cell5.innerHTML = formData["gender"];
// //     cell6.innerHTML = formData["landmark"];
// //     cell7.innerHTML = formData["city"];
// //     cell8.innerHTML = formData["state"];
// //     cell9.innerHTML = formData["country"];
// //     cell10.innerHTML = formData["pin"];

// //     cell11.innerHTML = '<td><button class="btnEdit"  onclick="onEdit(this,formData)">Edit</button> <button class="btnDelete" onclick="deleteCurRow(this)" id="btn2" >Delete</button></td> ';
// //     //'this' will send the whole content of the row

// //     let btnEdit = document.querySelector('.btnEdit');
// //     let btnDelete = document.querySelector('.btnDelete');
// //     btnEdit.setAttribute('class','btnEdit');
// //     btnDelete.setAttribute('class','btnDelete');

// //     resetForm();
    
// //  }  


// function hideError(name) {
//     if(name == 'fname') {
//         let fnameErr = document.getElementById('fname-err');
//         document.getElementById("fname").classList.remove('errorEffect');
//         fnameErr.textContent = "";
//     }
//     else if(name == 'password') {
//         let passErr = document.getElementById('pass-err');
//         document.getElementById("pass").classList.remove('errorEffect');
//         passErr.textContent = "";
//     }
//     else if(name == "phoneNumber") {
//         let phnoErr = document.getElementById('phno-err');
//         document.getElementById("phno").classList.remove('errorEffect');
//         phnoErr.textContent = "";
//     }
//     else if(name == 'email'){
//         let emailErr = document.getElementById('email-err');
//         document.getElementById("email").classList.remove('errorEffect');
//         emailErr.textContent = "";
//     }
//     else if(name == 'gender') {
//         let genderErr = document.getElementById('gender-err');
//         genderErr.textContent = "";
//     }
//     else if(name == 'pin') {
//         let pinErr = document.getElementById('pin-err');
//         document.getElementById("pin").classList.remove('errorEffect');
//         pinErr.textContent = "";
//     }
//     else if(name == 'terms') {
//         let termsErr = document.getElementById('terms-err');
//         document.getElementById("terms").classList.remove('errorEffect');
//         termsErr.textContent = "";
//     }
   
// }

  
 
// //  function onEdit(td,formData) {
// //     document.getElementById('submit').value = "Update";
// //     selectedRow = td.parentElement.parentElement;
// //     document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
// //     document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
// //     document.getElementById("phno").value = selectedRow.cells[2].innerHTML;
// //     document.getElementById("email").value = selectedRow.cells[3].innerHTML;
// //     document.getElementById("landmark").value = selectedRow.cells[5].innerHTML;
// //     document.getElementById("city").value = selectedRow.cells[6].innerHTML;
// //     document.getElementById("state").value = selectedRow.cells[7].innerHTML;
// //     document.getElementById("country").value = selectedRow.cells[8].innerHTML;
// //     document.getElementById("pin").value = selectedRow.cells[9].innerHTML;
    
// // }
// function updateRecord() {
//     // selectedRow = td.parentElement.parentElement;
    
//     let newFormData = {}
    
//     newFormData["fname"] = document.getElementById("fname").value;
//     newFormData["lname"] = document.getElementById("lname").value;
//     newFormData["pass"] = document.getElementById("pass").value;
//     newFormData["phno"] = document.getElementById("phno").value;
//     newFormData["email"] = document.getElementById("email").value;
//     newFormData["country"] = document.getElementById("country").value;
//     newFormData["state"] = document.getElementById("state").value;
//     newFormData["city"] = document.getElementById("city").value;
//     newFormData["landmark"] = document.getElementById("landmark").value;
//     newFormData["pin"] = document.getElementById("pin").value;
//     newFormData["terms"] = document.getElementById("terms").value;
//     if(validation(newFormData) == true) {
//         selectedRow.cells[0].innerHTML = document.getElementById("fname").value;
//         selectedRow.cells[1].innerHTML = document.getElementById("lname").value;
//         selectedRow.cells[2].innerHTML = document.getElementById("phno").value;
//         selectedRow.cells[3].innerHTML = document.getElementById("email").value;
//         selectedRow.cells[5].innerHTML = document.getElementById("landmark").value;
//         selectedRow.cells[6].innerHTML = document.getElementById("city").value;
//         selectedRow.cells[7].innerHTML = document.getElementById("state").value;
//         selectedRow.cells[8].innerHTML = document.getElementById("country").value;
//         selectedRow.cells[9].innerHTML = document.getElementById("pin").value;
//         resetForm();
//         selectedRow = null;
//         document.getElementById('submit').value = "Submit";
//     }
//     // selectedRow = null;
//     // resetForm();
// }

// // function resetForm() {
// //     document.getElementById("fname").value = "";
// //     document.getElementById("lname").value = "";
// //     document.getElementById("phno").value = "";
// //     document.getElementById("email").value = "";
// //     document.getElementById("pass").value = "";
// //     document.querySelector('#eye').removeAttribute('class','eyeAdd');
// //     document.getElementById("landmark").value = "";
// //     document.getElementById("city").value = "";
// //     document.getElementById("state").value = "";
// //     document.getElementById("country").value = "";
// //     document.getElementById("pin").value = "";
// //     //For the terms and condition part
// //     document.querySelector('input[type="checkbox"]').checked = false;

// //     //
// //     let radioButtons = document.getElementsByName('gender');
// //     for(let radio of radioButtons) {
// //         if(radio.checked) {
// //             radio.checked = false;
// //             break;
// //         }
// //     }
// //     // // selectedRow = null;
// // }

//  function deleteCurRow(td) {
//     // console.log(td)
//     var i = td.parentNode.parentNode.rowIndex;
//     document.getElementById("table").deleteRow(i);   //i is the index
//  }
