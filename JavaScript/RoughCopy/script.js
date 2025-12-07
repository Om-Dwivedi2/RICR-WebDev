let om = document.getElementById("me");



    
    om.addEventListener("click" , () => {
        console.log("hello");
        if (om.textContent === "Click Me!") {
            let b = document.createElement("button");
            b.classList.add("m-5" , "ram");
            b.innerText = "Om Dwivedi";
            om.textContent = "Remove";

            let body = document.querySelector("body");
            body.appendChild(b);
        }

        else{
            document.querySelector("body").removeChild(document.querySelector(".ram")); 
            om.textContent = "Click Me!";
        }
    });



