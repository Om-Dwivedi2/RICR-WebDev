const var1 = document.getElementById("bg");
var1.addEventListener('change' , ()=> om(var1.value));

function om(x){
    document.getElementById("inner1").style.backgroundColor = x;
}

const var2 = document.getElementById("heading");
var2.addEventListener('change' , ()=> baiju(var2.value));

function baiju(y){
    document.getElementById("h1").style.color = y; 

}



const var3 = document.getElementById("paragraph");
var3.addEventListener('change' , ()=> raj(var3.value))

function raj(z){
    document.getElementById("para").style.color = z;
}