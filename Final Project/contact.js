function ValidateForm()
{
 var validEmail = false;
 var validUsername = false;
 var validComment = false;


 var letters = /^[A-Za-z]+$/;
 var numbers = /^[0-9]+$/;

 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value


//  /*********** VALIDATES EMAIL ******** 
//  * required and max 15 char */
//  if (myContact.email.value==null || myContact.email.value=="")
//  errorMessages += "<p>The email address is required and must be a valid email</p>";
//  else 
//  validEmail =true;
//  console.log(validEmail);  

    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) 
        errorMessages += "<p>Email is required and must be a valid e-mail address</p>";
    else
    validEmail = true;
    
    console.log(validEmail);


/*********** VALIDATES USERNAME ******** 
 * required and max 30 char */
 if (myContact.username.value.length > 30 || myContact.username.value==null || myContact.username.value=="")
 errorMessages += "<p>The username is required and must be up to 30 characters</p>";
 else 
 validUsername =true;

 console.log(validUsername);   

 if (myContact.commentbox.value==null || myContact.commentbox.value=="")
 errorMessages += "<p>Enter a message before submitting</p>";
 else 
 validComment =true;

 console.log(validComment);  

 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validEmail && validUsername && validComment);

}

