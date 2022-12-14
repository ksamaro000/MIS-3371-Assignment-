//This is to set cookies//
	  function setCookie(cname, cvalue, exdays) {
	    const d = new Date();
	    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	    let expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	  }

	  function getCookie(cname) {
	    let name = cname + "=";
	    let ca = document.cookie.split(';');
	    for(let i = 0; i < ca.length; i++) {
	      let c = ca[i];
	      while (c.charAt(0) == ' ') {
	        c = c.substring(1);
	      }
	      if (c.indexOf(name) == 0) {
	        return c.substring(name.length, c.length);
	      }
	    }
	    return "";
	  }

	  function checkCookie() {
	    let user = getCookie("username");
	    if (user != "") {
	      alert("Welcome again " + user);
	    } else {
	      user = prompt("Please enter your name:", "");
	      if (user != "" && user != null) {
	        setCookie("username", user, 365);
	      }
	    }
	  }
	

document.getElementById("current_date").innerHTML = Date();

//This is to set cookies//


//This one is for Password Validation//
   function validator() {
       var pw1 = document.getElementById("password").value;
       var pw2 = document.getElementById("password2").value;

       if(pw1 == "") {
         document.getElementById("message1").innerHTML = "Fill the password please!";
         return false;
       }

       if(pw2 == "") {
         document.getElementById("message2").innerHTML = "Enter the password please!";
         return false;
       }

       if(pw1.length < 8) {
         document.getElementById("message1").innerHTML = "Password length must be atleast 8 characters";
         return false;
       }

       if(pw1.length > 15) {
         document.getElementById("message1").innerHTML = "Password length must not exceed 15 characters";
         return false;
       }

       if(pw1 != pw2) {
         document.getElementById("message2").innerHTML = "**Passwords are not same";
         return false;
       } else {

       }
    }
  //This one is for Password Validation// 
    
  //This is for SSN validation
    function formatSSN(value) {
      if (!value) return value;
      const ssn = value.replace(/[^\d]/g, '');
      const ssnLength = ssn.length;

      if (ssnLength < 4) return ssn;

      if (ssnLength < 6) {
        return `${ssn.slice(0, 3)}-${ssn.slice(3)}`;
      }

      return `${ssn.slice(0, 3)}-${ssn.slice(3, 5)}-${ssn.slice(5, 8)}`;
    }

    function ssnFormatter() {
      const inputField = document.getElementById('ssn');
      const formattedInputValue = formatSSN(inputField.value);
      inputField.value = formattedInputValue;
    }
  //This is for SSN validation 
    
 //This is for the Slide 
    
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function() {
      output.innerHTML = this.value;
    }
 //TBH IDK what this is for 
    <script defer src="script.js" ></script>
    
    
   //Password Stuff
    function validator() {
            //collect form data in JavaScript variables
            var pw1 = document.getElementById("password").value;
            var pw2 = document.getElementById("password2").value;

            //check empty password field
            if(pw1 == "") {
              document.getElementById("message1").innerHTML = "Fill the password please!";
              return false;
            }

            //check empty confirm password field
            if(pw2 == "") {
              document.getElementById("message2").innerHTML = "Enter the password please!";
              return false;
            }

            //minimum password length validation
            if(pw1.length < 8) {
              document.getElementById("message1").innerHTML = "Password length must be atleast 8 characters";
              return false;
            }

            //maximum length of password validation
            if(pw1.length > 15) {
              document.getElementById("message1").innerHTML = "Password length must not exceed 15 characters";
              return false;
            }

            if(pw1 != pw2) {
              document.getElementById("message2").innerHTML = "**Passwords are not same";
              return false;
            } else {

            }
         }
   //Password stuff
    
    
    
    