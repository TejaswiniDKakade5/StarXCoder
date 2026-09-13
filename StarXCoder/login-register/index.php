<?php
session_start();
if (!isset($_SESSION["user"])) {
   
//    header("Location: login.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="login.css">
    <title>User Dashboard</title>
</head>
<body>

        
     <div class="new">
        <div class="res" style="margin-bottom: 140px; margin-top: 160px; height:40vh; width:45vw;  background-color: #1b0431; box-shadow: 2px 2px 2px 2px wheat; padding: 50px;" >
        
       
        <h2 style="color: wheat; font-size:2rem;">WELCOME TO 𝕊𝕥𝕒𝕣𝕏𝕮𝖔𝖉𝖊𝖗 Dashboard</h2>

      
        <style>
            .lists li:hover{
                     background-color:#49365a;

            }
        </style>
        <div class="lists">
            <br>
            <li style="list-style:none; border: .2rem solid wheat; padding: 10px;
    border-radius: 7px;  margin:100px 0px 0px 0px; text-align:center; width: 320px; margin-left:180px"><a style="color: white;" href="logout.php" >Logout</a></li>
        </div>
        </div>


<footer class="foot">
    <h3 style="text-align: center; color: bisque; font-size:1rem; margin-top:20px;"> 𝕊𝕥𝕒𝕣𝕏𝕮𝖔𝖉𝖊𝖗.com copyright © All rights reserved</h3><br>
    <a style="text-align: center; color: bisque; align-items: center; margin-left: 380px; " href="http://127.0.0.1:5500/clgproject/privacy%20policy.html" target="_blank">Privacy Policy</a>
  </footer>
</div>
</body>
</html>