function login(){
	
	/** I am prompting the user enter their username and password**/
	var user = prompt("Username")
	var pass = prompt("Enter password","");
	
	
	/**Here i am naming my variables for the login**/
	
	var userarray = ["Anthony", "Anthony2", "Anthony3", "Anthony4", "Sacha", "Antonio"]
	var passarray = ["Anania", "Smeros", "McCall", "Perna", "Mancuso", "Barrafato"]
	

	for (j = 0; j <= userarray.length; j++){
		/**Here the if is checking to see if the username and passowrd is correct**/
		if ((user === userarray[j]) && (pass === passarray[j])){
            log = true;
		/** if the login = true then it will stop the code and move towards the other if statement underneath**/
            break;
        }else{
            log = false;
        }
    }
			
			/** if the login is true, it will change my HTML code "click the button to login" with "sup" and add the username afterwards**/
		if (log === true){
			document.getElementById("userarray").innerHTML = "Sup" + " " + userarray[j];
		}else{
			/**if the username or password is wrong the user will prompt saying its wrong**/
			confirm("wrong username or password");
			}
	    }
		
