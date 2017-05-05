function login(){
	
	/** I am prompting the user enter their username and password**/
	var user = prompt("Username")
	var pass = prompt("Enter password","");
	
	
	/**Here i am naming my variables for the login**/
	
	var userarray = ["Anthony", "Anthony2", "Anthony3", "Anthony4", "Sacha", "t"]
	var passarray = ["Anania", "Smeros", "McCall", "Perna", "Mancuso", "r"]
	
	/**Here the if is checking to see if the username and passowrd is correct**/
	
	for (j = 0; j <= userarray.length; j++){
		if ((user === userarray[j]) && (pass === passarray[j])){
            log = true;
            break;
        }else{
            log = false;
        }
    }
			
			
		if (log === true){
			document.getElementById("userarray").innerHTML = "Sup" + " " + userarray[j];
		}else{
			/**if the username or password is wrong the user will prompt saying its wrong**/
			confirm("wrong username or password");
			}
	    }
		
