function ValidateForm()
{
 var validFirstname = false;
 var validLastname = false;
 var validEmail = false;
 var validPhone = false;
 var validUsername = false;
 var validPassword = false;
 var validAddress = false;
 var validCity = false;
 var validZip = false;

 var letters = /^[A-Za-z]+$/;
 var numbers = /^[0-9]+$/;

 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value


/* Validates the first name!
 * required and max 20 char */
 if (myContact.firstname.value.length > 20 || !myContact.firstname.value.match(letters) || myContact.firstname.value==null || myContact.firstname.value=="")
 errorMessages += "<p>The first name is required and must be letters only and up to 20 characters</p>";
 else 
 validFirstname =true;
 console.log(validFirstname);  

 /* Validates the last name!
 * required and max 50 char */
 if (myContact.lastname.value.length > 50 || !myContact.lastname.value.match(letters) || myContact.lastname.value==null || myContact.lastname.value=="")
 errorMessages += "<p>The first name is required and must be letters only and up to 50 characters</p>";
 else 
 validLastname =true;
 console.log(validLastname);  

//  /* Validates the email!
//  * required and max 15 char */


     var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) 
        errorMessages += "<p>Email is required and must be a valid e-mail address</p>";
    else
    validEmail = true;
    
    console.log(validPassword);

/* Validates the phone number!
 * required and max 15 char */
 if (myContact.phone.value.length > 15 ||!myContact.phone.value.match(numbers) || myContact.phone.value==null || myContact.phone.value=="")
 errorMessages += "<p>The phone number is required and must be all numbers and up to 15 characters</p>";
 else 
 validPhone =true;
 console.log(validPhone);  


/*********** VALIDATES USERNAME ******** 
 * required and max 12 char */
 if (myContact.username.value.length > 12 || myContact.username.value==null || myContact.username.value=="")
 errorMessages += "<p>The username is required and must be up to 12 characters</p>";
 else 
 validUsername =true;

 console.log(validUsername);  

 /* Validates the password! */
 if (myContact.password.value==null ||
 myContact.password.value== "" ||
 myContact.password.value.length >7)
 errorMessages += "<p>The password is required and must be up to 7 characters</p>";
 else
 validUserPassword = true; 

console.log(validPassword);

/* Validates the address!
 * required  */
 if (myContact.address.value==null || myContact.address.value=="")
 errorMessages += "<p>The address is required</p>";
 else 
 validAddress =true;

 console.log(validAddress);  

/* Validates the city!
 * required  */
 if (myContact.city.value==null || myContact.city.value=="")
 errorMessages += "<p>The city is required</p>";
 else 
 validCity =true;

 console.log(validCity);  

 /* Validates the Zip!
 * required if in USA */
 if (myContact.countries.value=="United States" && myContact.zipcode.value=="")
 errorMessages += "<p>The zip code is required for addresses in the United States and is 5 numbers</p>";
 else 
 validZip =true;

 console.log(validAddress);  

 document.getElementById("errorMessages").innerHTML = errorMessages;
 
 return (validFirstname && validLastname && validEmail && validPhone && validUsername 
 && validUserPassword && validEmail && validAddress && validCity && validZip);

}

