/* this is my function login that will be called in my html page*/
function login(){
	/*Here i am naming my variables for the login*/
	var user = "Mancuso"
	var pass = "Sacha"
	
	/* I am prompting the user enter their username and password*/
	var userName=prompt("Username","")
	var PassWord = prompt("Enter password","");
	/* Here the if is checking to see if the username and passowrd is correct*/
	if (userName === user) {
		if (PassWord === pass){
			/* if ikts true it will promt that the user is logged in and change a text saying the name of the user*/
			document.getElementById("login").innerHTML = "Sacha Mancuso";
			confirm ("welcome, you are logged in");
		}else{
			/* if the username or password is wrong the user will prompt saying its wrong*/
			confirm("wrong username or password");
			}
	
		
}