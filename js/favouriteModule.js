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

    var loginProfileEmail = localStorage.getItem('loginProfileEmail');
    var i = 0;

    function readFavouriteData() {
        let formDataArray = JSON.parse(localStorage.getItem('formDataArray'));
        
        $(".Favourite-btn").on('click',function(e) {
            e.preventDefault();
            
            
            let name = $("#favouriteName").val();
            let item = $("#favouriteItem").val();
            if(name != "" && item != "" ) {
                data = {
                    [name] : item               //To use a variable as key we have take []
                }
                for(i = 0;i < formDataArray.length;i++) {
                    if(loginProfileEmail == formDataArray[i].email){
                        profileFormData = JSON.parse(localStorage.getItem('formDataArray'))[i];
                        let favouriteArr = profileFormData.favourite == null?[]:profileFormData.favourite;
                        favouriteArr.push(data)
                        profileFormData.favourite = favouriteArr;
                        formDataArray[i] = profileFormData;
                        localStorage.setItem('formDataArray',JSON.stringify(formDataArray));
                        break;
                    }
                }
                
                $("#favouriteForm")[0].reset();
            }
            //to show the cuurent added favourite
            $('.temp')?.remove();
            if(JSON.parse(localStorage.getItem('formDataArray'))[i].favourite != null)
                showData(i);
        });
        
            //to show the previous favourite data
        $(".favouriteIcon").on('click',function(){
            let formDataArray = JSON.parse(localStorage.getItem('formDataArray'));
            for(i = 0;i < formDataArray.length;i++){
                if(formDataArray[i].email == localStorage.getItem('loginProfileEmail')){
                    $('.temp')?.remove();
                    let favouriteArr = formDataArray[i].favourite;
                    if(favouriteArr != null){
                        showData(i);
                        break;
                    }
                }
            }
        });

        
    }

    function showData(i) {
       let formDataArray = JSON.parse(localStorage.getItem('formDataArray'));
       let favouriteArr = formDataArray[i]?.favourite;
       favouriteArr?.forEach(element => {
            var newRow = $("<tr class='temp' >''</tr>");
            for(let key in element) {
                let name = key;
                let item = element[key]
                newRow.append($(`<td>${name}</td>`))
                newRow.append($(`<td>${item}</td>`))
                newRow.append($(`<i class="fa-solid fa-trash  btnDelete" style="color: #ff0a0a;"></i>`));
            }
            $(".emptyRow").before(newRow);

       });
       
       $(".btnDelete").on('click',function() {
            let formDataArray = JSON.parse(localStorage.getItem('formDataArray'));
            let favouriteArr = formDataArray[i]?.favourite;
            var row = $(this).closest('tr'); // Get the row
            var rowIndex = row.index();

            let rr = favouriteArr.splice(rowIndex,rowIndex+1);   //delete the row from favourite array
            console.log(favouriteArr);
            formDataArray[i].favourite = favouriteArr;
            localStorage.setItem('formDataArray',JSON.stringify(formDataArray));

           $(this).closest('tr').remove();   //delete the row from page
       })
    }
    
   
    function init(){
        
        readFavouriteData();
        // showData();
    }
    return {
        init:init,
        readFavouriteData:readFavouriteData
    }
})(jQuery);