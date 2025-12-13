let btn = document.getElementById("btn");
    
btn.addEventListener("click" , ()=>{
    let DOB = document.getElementById("DOB").value;
    let CD = document.getElementById("CD").value;

    let DOBYear = new Date(DOB).getFullYear();
    let CDYear = new Date(CD).getFullYear();

    let age = CDYear-DOBYear;

    let result = document.createElement("h1");
    result.innerText = `Your age is ${age} Year`;
    document.querySelector("main").appendChild(result);


    

    console.log(age);
    
})
