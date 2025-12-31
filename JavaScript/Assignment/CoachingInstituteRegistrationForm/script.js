function Go(){

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value;
    const DOB = document.getElementById("DOB").value;
    const Qualification = document.getElementById("Qualification").value.trim();
    const percentage = document.getElementById("Percentage").value.trim();
    const course = document.getElementById("Course").value.trim();
    let batch = [];
    batch = document.querySelectorAll("input[name = batch]:checked");
    let result = []
    batch.forEach(e => {
        result.push(e.value);
    });
    
    const address = document.getElementById("Address").value.trim();
    const city = document.getElementById("City").value.trim();
    const pin = document.getElementById("Pin").value.trim();
    const guadianName = document.getElementById("GuadianName").value.trim();
    const guadianNumber = document.getElementById("GuadianNumber").value;
    const source = document.getElementById("Source").value.trim();
    

    document.querySelectorAll(".xyz").classList.add("d-none");

    if(!/^[A-Za-z ]+$/.test(name)){
        document.getElementById("warningName").classList.remove("d-none")
        return;
    }

    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        document.getElementById("warningEmail").classList.remove("d-none")
        return;
    }

    else if (!/^[6-9]\d{9}$/.test(number)) {
        document.getElementById("warningNumber").classList.remove("d-none")
        return;
    }

    
    




}