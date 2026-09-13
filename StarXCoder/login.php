<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="box">
        <div class="form">
            <h2>Sign in</h2>
            <div class="inputBox">
                <input type="text" required="required">
                <span>Username</span>
                <i></i>
            </div>
            <div class="inputBox">
                <input type="password" required="required">
                <span>Password</span>
                <i></i>
            </div>
            <div class="links">
                <a href="#">Forgot password</a>
                <a href="#">Signup</a>
            </div>
            <input type="submit" value="login">
            <?php
                $_POST(Username);
                $_POST(password_get_info);
                echo "You are Successfully Login";

                ?>
        </div>
    </div>
</body>
</html>




