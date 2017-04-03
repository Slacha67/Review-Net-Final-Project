function login(){
	var user = "Mancuso"
	var pass = "Sacha"
	
	/*var prompt2 = prompt("Please enter your password");
	console.log("haha")*/
	
	var userName=prompt("Username","")
	var PassWord = prompt("Enter password","");
	if (userName === user) {
		if (PassWord === pass){
			document.getElementById("login").innerHTML = "Sacha Mancuso";
			confirm ("welcome, you are logged in");
		}else{
			confirm("wrong username or password");
			}
		}else{
			confirm("wrong username or password");
			}
		
	/**if (prompt1 === user){
		if(prompt2 === pass){
			confirm("You're logged in")
		}
		else confirm("please try again")
	}*/
}