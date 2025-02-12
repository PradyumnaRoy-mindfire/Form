<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/profile.css">


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

    <?php
        $profileJsonFile = '/var/www/html/test/Form/profileData.json';
        $profileJsonData = file_get_contents($profileJsonFile);
        $profileData = json_decode($profileJsonData, true);

        $jsonFile = '/var/www/html/test/Form/data.json';
        $jsonData = file_get_contents($jsonFile);
        $data = json_decode($jsonData,true);
        
        if($_SERVER['REQUEST_METHOD'] == "POST") {
            $fname = isset($_POST['fname']) ? $_POST['fname']:$profileData['fname'] ;
            $lname = isset($_POST['lname']) ? $_POST['lname']:$profileData['lname'] ;
            $email = isset($_POST['email']) ? $_POST['email']:$profileData['email'] ;
            $phno = isset($_POST['phno']) ? $_POST['phno']:$profileData['phno'] ;
            $address = isset($_POST['address']) ? $_POST['address']:$profileData['address'] ;
            
            $i = 0;
            
            for( ;$i < sizeof($data);$i++) {
                if($data[$i]['email'] == $profileData['email']) {
                    $data[$i]['fname'] = $fname;
                    $data[$i]['lname'] = $lname;
                    $data[$i]['email'] = $email;
                    $data[$i]['phno'] = $phno;
                    $data[$i]['address'] = $address;
                        //Update both profileData.json and data.json
                    $profileData['fname'] = $fname;
                    $profileData['lname'] = $lname;
                    $profileData['email'] = $email;
                    $profileData['phno'] = $phno;
                    $profileData['address'] = $address;

                    break;
                }
            }
            $favouriteArray = $data[$i]['favourite'];
            
            $jsonData = json_encode($data,JSON_PRETTY_PRINT);
            file_put_contents($jsonFile,$jsonData);

            $profileJsonData = json_encode($profileData,JSON_PRETTY_PRINT);
            file_put_contents($profileJsonFile,$profileJsonData);

                //For favourite 
            if (isset($_POST['favouriteName']) && isset($_POST['favouriteItem'])) {
                $favouriteName = $_POST['favouriteName'];
                $favouriteItem = $_POST['favouriteItem'];
                $j = 0;
                for ( ; $j < sizeof($data); $j++) {
                    if ($data[$j]['email'] == $profileData['email']) {
                        $data[$j]['favourite'][] = [
                            'name' => $favouriteName,
                            'item' => $favouriteItem
                        ];
                        
                        
                        file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT));
                        // header("Location: http://localhost/test/Form/php/profile.php",true,301);
                        break;
                    }
                }
            }
        }
       
        // if(isset($_POST['action'])) {
        //     echo $_POST['id'],"Not prinit";
        //     if($_POST['action'] == 'delete') {
            
        //         // $key = array_search($_POST['id'] , array_column($data[$i]['favourite'],'id'));
        //         echo $_POST['id'];
        //     }
        // }
        if(isset($_GET['id'])) {
            $id = $_GET['id'];
            $k = 0;
            for( ;$k < sizeof($data);$k++) {
                if($data[$k]['email'] == $profileData['email'])
                    break;
            }
            $favouriteDataArray = $data[$k]['favourite'];
            unset($favouriteDataArray[$id-1]);
            // echo var_dump($favouriteDataArray);
            $data[$k]['favourite'] = $favouriteDataArray;
            // echo $favouriteData,"fav array";
            $jsonData = json_encode($data,JSON_PRETTY_PRINT);
            file_put_contents($jsonFile,$jsonData);
        }
        
        
    ?>
 

    <title>Profile</title>
</head>
<body>
    <div class="container">
        <div class="login-box">
        
            <form action="/test/Form/php/profile.php" id="profile-form" method="POST">
                <div class="profileIcon" >
                    <i class="fa-solid fa-circle-user fa-flip fa-2xl" style="color: #f37932;"></i>

                    <img src="<?php echo substr($profileData['photo'],13) ?>" alt="Profil Photo" class="photo fa-circle-user  fa-2xl " >   
                 </div>
                 <h3>My Profile </h3>
                        <!--For Favourite Item -->
                 <div class="favourite">
                    <i class="fa-regular fa-heart fa-xl favouriteIcon" style="color: #f53d1c;" title="Favourite"></i>
                 </div>

                <div class="inpDiv" id="username">
                    <i class="fa-solid fa-user  fa-lg icon"></i>
                    <input type="text" name="fname" id="fnameProfile">
                    <input type="text" name="lname" id="lnameProfile">
                </div>
    
                <div class="inpDiv" id="phnopf">
                    <i class="fa-solid fa-square-phone  fa-lg icon "></i>
                    <input type="number" name="phno" id="phnoProfile">
                </div>
    
                <div class="inpDiv" id="emailpf">
                    <i class="fa-solid fa-envelope  fa-lg icon"></i>
                    <input type="email" name="email" id="emailProfile">
                </div>
    
                <div class="inpDiv" id="addresspf">
                    <i class="fa-solid fa-location-dot fa-lg icon"></i>
                    <input type="text" name="address" id="addressProfile">
                </div>

                <!-- for lo g out -->
                <div class="logout">
                    <i class="fa-solid fa-right-from-bracket fa-lg logoutIcon" style="color: #f53d1c;" title="Log out"></i>
                 </div>
    
                <div class="update inpDiv">
                    <input type="submit" value="Update" id="btnUpdate">
                </div>
            </form>

        </div>

       
    </div>
    <div class="container2">
        <div class="closeIconDiv">
            <i class="fa-solid fa-xmark fa-xl closeFavourite" style="color: #ffffff;" title="Hide favourite"></i>
        </div>
        <h2>Favourites</h2>
        <table id="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Item</th>
                    <th>Action</th>
                </tr>
                <?php
                    $id = 0;
                    $k = 0;
                    for( ;$k < sizeof($data);$k++) {
                        if($data[$k]['email'] == $profileData['email'])
                          break;
                    }
                    foreach($data[$k]['favourite'] as $row):?>
                        <tr>
                            <td> <?php echo htmlspecialchars($row['name']) ?></td>
                            <td> <?php echo htmlspecialchars($row['item']) ?></td>
                            <td> <i class="fa-solid fa-trash  btnDelete" style="color: #ff0a0a;" data-id="<?php echo $id ?>"></i></td>
                        </tr>
                <?php endforeach ?>
                    
                

            </thead>

            <tbody>
                <!-- Prepend to this row -->
                <tr class="emptyRow">
                    <td colspan="3" style=" text-align: center;"><button id="openForm">New</button></td>
                </tr>
            </tbody>
        </table>
        <div class="dropdown-form" >
            <form id="favouriteForm" action="/test/Form/php/profile.php" method="POST">
              <input type="text" id="favouriteName" class="favouriteFormInput" name="favouriteName" required placeholder="Name"><br><br>
      
              <input type="text" id="favouriteItem" class="favouriteFormInput" name="favouriteItem" required placeholder="Item"><br><br>
                
              <button type="submit" class="Favourite-btn">Add to Favourite</button>
            </form>
        </div>
    </div>
    
    <div class="updatePopup">
        <div class="updateContent">
            <span><i class="fa-regular fa-circle-check fa-beat" style="color: #31ed47;" id="successIcon"></i></span>
            <h4>THANK YOU</h4>
            <p>Your Data is <b>Updated Successfully</b>...</p>
        </div>
    </div>

   
    
    <div class="logoutPopup">
        <div class="logoutContent">
            <span><i class="fa-solid fa-circle-exclamation fa-shake" id="logoutWarnIcon"style="color: #f56224;" title="Logout"></i></i></span>
            <h4>Log Out</h4>
            <p>Are you sure, you want to log out?</p>
            <div class="btn">
                <button id="btnLogoutPopup"><b>Yes,Logout</b></button>
                <button id="btnCancelPopup"><b>CENCEL</b></button>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script> 
    <script src="../js/script.js"></script>
    <script src="../js/formModule.js"></script>
    <script src="../js/favouriteModule.js"></script>
    <script src="../js/validationModule.js"></script>
    <script src="../js/pageModule.js"></script>
    <script>
            $("#fnameProfile").val("<?php echo $profileData['fname']?>");
            $("#lnameProfile").val("<?php echo $profileData['lname']?>");
            $("#phnoProfile").val("<?php echo $profileData['phno']?>");
            $("#emailProfile").val("<?php echo $profileData['email']?>");
            $("#addressProfile").val("<?php echo $profileData['address']?>");
            
            $(".btnDelete").on('click',function() {
                var row = $(this).closest('tr'); // Get the row
                var id = row.index();   
                $(this).closest('tr').remove();   //delete the row from page
                // $.ajax({
                //     url:"/test/Form/php/profile.php",
                //     type:"POST",
                //     data:{
                //         action:'delete',
                //         id:id,
                //         success:function(response) {
                //             console.log(response);
                //         }
                //     }
                // })
                window.location.href = "http://localhost/test/Form/php/profile.php?id=" + encodeURIComponent(id);
               
            })
            
    </script>
</body>
</html>