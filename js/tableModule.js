var tableModule = (function($)
 {     
    var selectedRow = null;
    function showData() {
         
        // let formData = {};
        let storageLength = localStorage.length;
        let tableBody = $('#table tbody');
            var formData = formModule.formData;
            var newRow = $("<tr>''</tr>");
            newRow.append($(`<td>${formData.fname}</td>`))
            newRow.append($(`<td>${formData.lname}</td>`))
            newRow.append($(`<td>${formData.phno}</td>`))
            newRow.append($(`<td>${formData.email}</td>`))
            newRow.append($(`<td>${formData.gender}</td>`))
            newRow.append($(`<td>${formData.landmark}</td>`))
            newRow.append($(`<td>${formData.city}</td>`))
            newRow.append($(`<td>${formData.state}</td>`))
            newRow.append($(`<td>${formData.country}</td>`))
            newRow.append($(`<td>${formData.pin}</td>`))
            newRow.append($(`<button class="btnEdit">Edit</button><button class="btnDelete" id="btn2">Delete</button>`))
            tableBody.append(newRow);
            //to handle the edit and delete function
            attachEventHandlers();
            formModule.resetForm();
        
    }

     function attachEventHandlers() {
        $('.btnEdit').on('click', function() { 
            onEdit();
        });

        $('.btnDelete').on('click', function() {
            deleteCurRow();
        });
    }

    
    function onEdit() {
        $(document).on('click', '.btnEdit', function() {
            // Change the button  Submit -> "Update"
            $('#submit').val("Update");

            // target the row that contains the clicked button
            selectedRow = $(this).closest('tr');
            $(document).trigger('selectedRowUpdated', [selectedRow]); 

            // Populate the form with the current values of the selected row
            $('#fname').val(selectedRow.find('td').eq(0).text());
            $('#lname').val(selectedRow.find('td').eq(1).text());
            $('#phno').val(selectedRow.find('td').eq(2).text());
            $('#email').val(selectedRow.find('td').eq(3).text());
                //gender
            let selectedGender = selectedRow.find('td').eq(4).text();
            $('input[value="'+selectedGender+'"]').prop('checked',true);    

            $('#landmark').val(selectedRow.find('td').eq(5).text());


            $('#city').val(selectedRow.find('td').eq(6).text());
            
            $('#state').val(selectedRow.find('td').eq(7).text());

            let optionCountry = selectedRow.find('td').eq(8).text();
            $('#country option[value="'+optionCountry+'"]').prop('selected', true);

            $('#pin').val(selectedRow.find('td').eq(9).text());
            
        });
       
    }
   
    function updateRecord(selectedRow) {
        //data after editing
        newFormData = {
            // index:newRow.index,
            fname:$('#fname').val(),
            lname:$('#lname').val(),
            pass:$('#pass').val(),
            phno:$('#phno').val(),
            email:$('#email').val(),
            landmark:$('#landmark').val(),
            city:$('#city :selected').text() == "Select City" ? "" : $('#city :selected').text(),
            state:$('#state :selected').text() == "Select State" ? "" : $('#state :selected').text(),
            country:$('#country :selected').text() == "Select Country" ? "" : $('#country :selected').text(),
            pin:$('#pin').val(),
            terms:$('#terms')[0].checked
        }
        

        if($('#male').prop('checked')) {
            newFormData.gender = "Male";
        }
        else if($('#female').prop('checked')){
            newFormData.gender = "Female";
        }
        else if($('#others').prop('checked')){
            newFormData.gender = "Others";
        }else {
            newFormData.gender = null;
        }
        
        // go for validations 

             //update the validated data at the table
        selectedRow.find('td').eq(0).text(newFormData.fname);
        selectedRow.find('td').eq(1).text(newFormData.lname);
        selectedRow.find('td').eq(2).text(newFormData.phno);
        selectedRow.find('td').eq(3).text(newFormData.email);
            //for gender
        selectedRow.find('td').eq(4).text(newFormData.gender); 

        selectedRow.find('td').eq(5).text(newFormData.landmark);
        selectedRow.find('td').eq(6).text(newFormData.city);
        selectedRow.find('td').eq(7).text(newFormData.state);
        selectedRow.find('td').eq(8).text(newFormData.country);
        selectedRow.find('td').eq(9).text(newFormData.pin);


        
        formModule.resetForm();
        selectedRow = null;
        $(document).trigger('selectedRowUpdated', selectedRow); 

        // Change the button  update-> "Submit"
        $('#submit').val("Submit");
        
    }
    function deleteCurRow() {
        $(document).on('click', '.btnDelete', function() {
            let temp = this;
            $('.container').addClass('doBlur');
            pageModule.displayDeletePopup();
            $("#btnDeletePopup").on('click',function(){
                $(temp).closest('tr').remove();  // Remove the  row (tr) that clicked the button .btnDelete
                $(".deletePopup").removeClass('showPopup');
                $('.container').removeClass('doBlur');
            })
            $("#btnCancelPopup").on('click',function(){
                $(".deletePopup").removeClass('showPopup');
                $('.container').removeClass('doBlur');
                temp = null;
            })
        });
    }
   
    function init() {
        // localStorage.clear();   
        if(selectedRow != null){
            showData();
        }
    }

    // Return public methods
    return {
        updateRecord:updateRecord,
        selectedRow:selectedRow,
        init: init,
        showData: showData
    };

})(jQuery);

