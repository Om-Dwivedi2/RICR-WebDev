let random = Math.floor(Math.random() * 10) + 1;

document.addEventListener("keydown" , (e) =>{
    if (e.key === "Enter") {
       let number = document.getElementById("number").value;
    console.log(number);
    
    if (number === "") {
        alert("Enter the Number");
        return;
    }
    else if (number > 10 || number < 1) {
        alert("Your Number is out of Range");
        document.getElementById("number").value = "";
        return;
    }
    
    else{

        if (random === Number(number)) {
            alert("Congratulations you won the Game!!!");
            window.location.reload();
            return;
        }
        else if (Number(number) > random) {
            alert("OOPS! SORRY!!! TRY A SMALLER NUMBER");
            document.getElementById("number").value = "";
            return;
        }

        else{
            alert("OOPS! SORRY!!! TRY A LARGER NUMBER");
            document.getElementById("number").value = "";
            return;
        }

    } 
        
    }
})

let submit = document.getElementById("submit");

submit.addEventListener("click" , ()=>{
    let number = document.getElementById("number").value;
    console.log(number);
    
    if (number === "") {
        alert("Enter the Number");
        return;
    }
    else if (number > 10 || number < 1) {
        alert("Your Number is out of Range");
        document.getElementById("number").value = "";
        return;
    }
    
    else{

        if (random === Number(number)) {
            alert("Congratulations you won the Game!!!");
            window.location.reload();
            return;
        }
        else if (Number(number) > random) {
            alert("OOPS! SORRY!!! TRY A SMALLER NUMBER");
            document.getElementById("number").value = "";
            return;
        }

        else{
            alert("OOPS! SORRY!!! TRY A LARGER NUMBER");
            document.getElementById("number").value = "";
            return;
        }

    }    
})

