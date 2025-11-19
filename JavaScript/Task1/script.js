function login() {
    console.log("Login Button Clicked");

    // const dala hai jisse hamara fetch kiya hua data koi change naa kar sake
    // niche document 1 universal class hai JS ki jisme html ke code hota hai
    const om = document.getElementById("LoginEmail").value;
    const dev = document.getElementById("LoginPassword").value; 
    console.log("Login:- " + om);
    console.log("Password:- " + dev);
    
    alert("Login Done");

    document.getElementById("LoginEmail").value = "";
    document.getElementById("LoginPassword").value = "";



}

function registration(){
    console.log("Registration Button Clicked");

    const a = document.getElementById("RegistrationName").value;
    const b = document.getElementById("RegistrationEmail").value;
    const c = document.getElementById("RegistrationPassword").value;
    const d = document.getElementById("ConfirmPassword").value;

    console.log("Name:- " + a);
    console.log("Email:- " + b);
    console.log("Password:- " + c);
    console.log("Confirm Password:- " + c);




    alert("Login Done");

    document.getElementById("RegistrationName").value = "";
    document.getElementById("RegistrationEmail").value = "";
    document.getElementById("RegistrationPassword").value = "";
    document.getElementById("ConfirmPassword").value = "";


}