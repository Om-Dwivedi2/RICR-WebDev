function Input(data){

  if(data === '='){
    document.getElementById("display").value = eval(document.getElementById("display").value);

  }

  else if (data === "C") {
    document.getElementById("display").value = "";
  }

  else{
    document.getElementById("display").value = document.getElementById("display").value + data;
  }


}