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
    function storeFavouriteData(){
        
        $(".Favourite-btn").on('click',function(e) {
            e.preventDefault();
            
            let favData = {};
            let name = $("#favouriteName").val();
            let item = $("#favouriteItem").val();
            if(name != "" && item != "" ) {
                favData = {
                    'name' : name,
                    'item' : item               //To use a variable as key we have take []
                }
                $.ajax({
                    url:'/test/Form/php/profile.php',
                    type:"GET",
                    data: {
                        action :'storeFavouriteData',
                        favData : favData
                    },
                    success: function() {
                        //add row in the fav table
                        var newRow = $("<tr class='temp' >''</tr>");
                        newRow.append($(`<td>${favData.name}</td>`))
                        newRow.append($(`<td>${favData.item}</td>`))
                        newRow.append($(`<i class="fa-solid fa-trash  btnDelete" style="color: #ff0a0a;"></i>`));
                        $(".emptyRow").before(newRow);
                    }
                });
                
                $("#favouriteForm")[0].reset();
            }
        });
    }
    
    function favouriteDelete(){
        $(".btnDelete").on('click', function() {
            var row = $(this).closest('tr'); 
            var id = row.index();
            
            $.ajax({
                url: '/test/Form/php/profile.php', 
                type: 'GET', //  GET request sending to php
                data: {
                    action: 'delete', 
                    id: id-1, // in array it is 0-base indexing and row in table row 1-base indexing
                },
                success: function(response) {
                    // if the deletion is successful
                    row.remove();
                }
                
            });
        });
    }
    
    function logOut() {
        $('.logoutIcon').on('click',function() {
            $.ajax({
                url:'/test/Form/php/profile.php',
                type : 'GET',
                data : {
                    action : 'logout'
                },
                success : function(){
                    pageModule.displayLogoutPopup('.logputPopup')
            
                    window.location.href = "http://localhost/test/Form/php/login.php";
                }
            });
            
        });
    }

    function init(){
       logOut();
       favouriteDelete();
       storeFavouriteData();
    }
    return {
        init:init,
    }
})(jQuery);