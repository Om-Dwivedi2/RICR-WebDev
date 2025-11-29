function submit(){

    console.log("Submit button is clicked");

    const name = document.getElementById("Name").value;
    const number = document.getElementById("Number").value;
    const email = document.getElementById("Email").value;
    const qualification  = document.getElementById("Qualification").value;
    const college = document.getElementById("College").value;
    const year = document.getElementById("Year").value;
    const branch = document.getElementById("Branch").value;
    const source = document.getElementById("Sources").value;
    const executive = document.getElementById("Executive").value;

    ar = [];
    document.querySelectorAll("input[name = Course]:checked").forEach(element => {ar.push(element.value)});
    console.log(ar)

    console.log("Student's Name is :- "+ name);
    console.log("Contact Details:- "+ number);
    console.log("Email :- " + email);
    console.log("Qualification is :- " + qualification);
    console.log("College :- " + college);
    console.log("Year :- " + year);
    console.log("Branch :- " + branch);
    console.log("Sources :- " + source);
    console.log("Executive :- " + executive);

    alert("Form Submited");

    document.getElementById("Name").value="";
    document.getElementById("Number").value="";
    document.getElementById("Email").value="";
    document.getElementById("Qualification").value="";
    document.getElementById("College").value="";
    document.getElementById("Year").value="";
    document.getElementById("Branch").value="";
    document.getElementById("Sources").value="";
    document.getElementById("Executive").value="";
}