<?php
session_start();
if (isset($_SESSION["user"])) {
   header("Location: index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="container">
        <?php
        if (isset($_POST["submit"])) {
           $fullName = $_POST["fullname"];
           $email = $_POST["email"];
           $mobile = $_POST["mobile"];
           $password = $_POST["password"];
           $passwordRepeat = $_POST["repeat_password"];
           
           $passwordHash = password_hash($password, PASSWORD_DEFAULT);

           $errors = array();
           
           if (empty($fullName) OR empty($email) OR empty($mobile) OR empty($password) OR empty($passwordRepeat)) {
            array_push($errors,"All fields are required");
           }
           if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            array_push($errors, "Email is not valid");
           }
           if (strlen($mobile)<=10) {
            array_push($errors,"Mobile number must be 10 charactes long");
           }
           if (strlen($password)<8) {
            array_push($errors,"Password must be at least 8 charactes long");
           }
           if ($password!==$passwordRepeat) {
            array_push($errors,"Password does not match");
           }
           require_once "database.php";
           $sql = "SELECT * FROM users WHERE email = '$email'";
           $result = mysqli_query($conn, $sql);
           $rowCount = mysqli_num_rows($result);
           if ($rowCount>0) {
            array_push($errors,"Email already exists!");
           }
           if (count($errors)>0) {
            foreach ($errors as  $error) {
                echo "<div class='alert alert-danger'>$error</div>";
            }
           }else{
            
            $sql = "INSERT INTO users (full_name, email, mobile, password) VALUES ( ?, ?, ?, ?)";
            $stmt = mysqli_stmt_init($conn);
            $prepareStmt = mysqli_stmt_prepare($stmt,$sql);
            if ($prepareStmt) {
                mysqli_stmt_bind_param($stmt,"ssss",$fullName, $email, $mobile, $passwordHash);
                mysqli_stmt_execute($stmt);
                echo "<div class='alert alert-success'>You are registered successfully.</div>";
            }else{
                die("Something went wrong");
            }
           }
          

        }
        ?>


<div class="box1">
    <div class="form">
    <form action="registration.php" method="post">
        <h2>Sign up</h2>

        <div class="nam" style="display: flex;">
        <div class="inputBox">
            <input type="text" required="required" name="fullname">
            <span>Full name</span>
            <i></i>
        </div>
        <!-- <div class="inputBox">
            <input type="text" required="required" name="fullname">
            <span>Middle name</span>
            <i></i>
        </div>
        <div class="inputBox">
            <input type="text" required="required" name="fullname">
            <span>Lastname</span>
            <i></i>
        </div> -->
    </div>


        <div class="inputBox">
            <input type="email" required="required" name="email">
            <span>Email</span>
            <i></i>
        </div>

        <div class="inputBox">
            <input type="tel" required="required" minlength="10" maxlength="12" regex="/^\d*$/" name="mobile">
            <span>Mobile no.</span>
            <i></i>
        </div>

        <div class="inputBox">
            <input type="password" required="required" minlength="8" name="password">
            <span>Password</span>
            <i></i>
        </div>

        <div class="inputBox">
            <input type="password" required="required" minlength="8" name="repeat_password">
            <span>Confirm Password</span>
            <i></i>
        </div>

        <br> <br><br>
        <input type="submit" value="sign in" name="submit" >
    </form>
        <div>
    <div><p  style="color:#787a65; margin-top:5px; text-align:center;">Already Registered <a href="login.php">Login Here</a></p></div>
    </div>
    </div>
</div>
</body>
</html>