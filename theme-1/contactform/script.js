function displayMessage()
{
    var firstname = document.getElementById("firstname").addEventListener("input");
    var lastname = document.getElementById("lastname").addEventListener("input");
    var email = document.getElementById("email").addEventListener("input");
    var phoneno = document.getElementById("phoneno").addEventListener("input");
    var compname = document.getElementById("companyname").addEventListener("input");
    var designation = document.getElementById("designation").addEventListener("input");
    var message = document.getElementById("message").addEventListener("input");

    var msgThanks = "Thank You for Submitting your details! We will get back to you shortly."<br>"Have a Nice Day!";

    const contactform = [
        "First Name: "+firstname,
        "Last Name: "+lastname,
        "Email ID: "+email,
        "Phone No: "+phoneno,
        "Company Name: "+compname,
        "Designation: "+designation,
        "Message: "+message
    ];

    console.log(contactform);

    document.getElementById("message").innerHTML(msgThanks);
    return msgThanks;
}