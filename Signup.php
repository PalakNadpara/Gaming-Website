<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="loginpage.css">
</head>
<body>
<?php
    require('db.php');
    // When form submitted, insert values into the database.
    if (isset($_REQUEST['username'])) {
        // removes backslashes
        $username = stripslashes($_REQUEST['username']);
        //escapes special characters in a string
        $username = mysqli_real_escape_string($con, $username);
        $email    = stripslashes($_REQUEST['email']);
        $email    = mysqli_real_escape_string($con, $email);
        $password = stripslashes($_REQUEST['password']);
        $password = mysqli_real_escape_string($con, $password);
        
        $query    = "INSERT into `users` (username, password, email)
                     VALUES ('$username', '$password', '$email')";
        $result   = mysqli_query($con, $query);
        if ($result) {
				  header("location:login.php");
				  
        } else {
            echo "<div class='form'>
                  <h3>Required fields are missing.</h3><br/>
                  <p class='link'>Click here to <a href='registration.php'>registration</a> again.</p>
                  </div>";
        }
    } else {
?>
    <h2>Let's Play</h2>
<div class="container" id="container">
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Create Account</h1>
			<!-- <div class="social-container">
				<a href="#" class="social"><img src="facebook.png" alt=""></a>
				<a href="#" class="social"><img src="twiter1.png" alt=""></a>
				<a href="#" class="social"><img src="instagram.png" alt=""></a>
			</div> -->
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" name="username" />
			<input type="email" placeholder="Email" name="email"/>
			<input type="password" placeholder="Password" name="password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp"><a href="login.php">Sign In</a></button>
			</div>
		</div>
	</div>
</div>
<?php
    }
?>
<!-- <script src="index.js"></script> -->
</body>
</html>