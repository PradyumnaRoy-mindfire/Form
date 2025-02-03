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

    function readFavouriteData() {
        let i = 0;
        let arr = []
        $(".Favourite-btn").on('click',function(e) {
            e.preventDefault();
            
            
            let name = $("#favouriteName").val();
            let item = $("#favouriteItem").val();
            if(name != "" && item != "" ) {
                data = {
                    [name] : item               //To use a variable as key we have take []
                }
                data = JSON.stringify(data)
                arr.push(data)
                localStorage.setItem('favourite',JSON.stringify(arr));
                $("#favouriteForm")[0].reset();
            }
        });
        $(".Favourite-btn").on('click',function(){
            $('.temp')?.remove();
            if(arr != null)
                showData();
        })
        
    }

    function showData() {
       let arr = localStorage.getItem('favourite');
       arr = JSON.parse(arr);
       arr?.forEach(element => {
            element = JSON.parse(element)   //Stringify the whole array
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
            let arr = localStorage.getItem('favourite');
            arr = JSON.parse(arr);
            var row = $(this).closest('tr'); // Get the row
            var rowIndex = row.index();

            let rr = arr.splice(rowIndex,rowIndex+1);
            console.log(arr);
            localStorage.setItem('favourite',JSON.stringify(arr));

           $(this).closest('tr').remove();
       })
    }
    
   
    function init(){
        
        readFavouriteData();
        showData();
    }
    return {
        init:init,
        readFavouriteData:readFavouriteData
    }
})(jQuery);