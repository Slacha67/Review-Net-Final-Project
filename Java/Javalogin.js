function login(){
	var user = "Mancusos"
	var pass = "Cool"
	var prompt1 = prompt("Please enter your username");
	var prompt2 = prompt("Please enter your password");
	console.log("haha")
	if (prompt1 === user){
		if(prompt2 === pass){
			confirm("You're logged in")
		}
	}
}