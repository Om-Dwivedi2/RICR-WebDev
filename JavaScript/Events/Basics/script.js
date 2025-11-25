function On(){
    document.getElementById("bulb").style.backgroundColor = "yellow";
}

function Off(){
    document.getElementById("bulb").style.backgroundColor = "white";
    // yaha par jo hamne style likha isse hamare code me real time par inline CSS add ho raha hai jab bhi hum click karte hai
}

function Red(){
    document.getElementById("bulb").style.backgroundColor = "red";
}

function Blue(){
    document.getElementById("bulb").style.backgroundColor = "blue";
}

const userColor = document.getElementById("color");

userColor.addEventListener('change' , ()=>changeBulbColor(userColor.value));

function changeBulbColor(color){
    document.getElementById("bulb").style.backgroundColor = color;
}


function SB_Control(){
    const btn = document.getElementById("SB_btn");
    if(btn.innerText === "On"){
        document.getElementById("SB_btn").innerText = "Off";
        document.getElementById("smartBulb").classList.add("on");
        
    }

    else{
        document.getElementById("SB_btn").innerText = "On";
        document.getElementById("smartBulb").classList.remove("on");
    }
}


function color(){
    //document.getElementById("bulb").style.backgroundColor = document.getElementById("color").value;

    document.getElementById('smartbulb').classList.toggle("on");


}