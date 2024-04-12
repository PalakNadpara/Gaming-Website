
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
	
	
	include_once('config.php');


  
if ($_SERVER["REQUEST_METHOD"] == "POST") {
     
    $username = $_POST["username"];
    $password = $_POST["password"];
    $stmt = $conn->prepare("SELECT * FROM users");
    $stmt->execute();
    $users = $stmt->fetchAll();
     
    foreach($users as $user) {
         
        if(($user['username'] == $username) && 
            ($user['password'] == $password)) {
                $_SESSION["uname"] = $username;
                
        }
        else {
			header("location: login.php");
            die();
        }
    }
}
?>
    <h2>Let's Play</h2>
<div class="container" id="container">
	<div class="form-container sign-in-container">
		<form action="#" method="POST">
			<h1>Sign in</h1>
			<!-- <div class="social-container">
				<a href="#" class="social"><img src="facebook.png" alt=""></a>
				<a href="#" class="social"><img src="twiter1.png" alt=""></a>
				<a href="#" class="social"><img src="instagram.png" alt=""></a>
			</div> -->
			<span>or use your account</span>
			<input type="text" placeholder="Username" name="username" />
			<input type="password" placeholder="Password" name="password"/>
			<!-- <h3 id="lb"></h3> -->
			<button><a href="index.php">Sign In</a></button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
            <div class="overlay-panel overlay-right">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" name="login" id="signIn"><a href="Signup.php">Sign Up</a></button>
			</div>
		</div>
	</div>
</div>

<!-- <script src="index.js"></script> -->

</body>
</html>