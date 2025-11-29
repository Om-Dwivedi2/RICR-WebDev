function Input(data){

  if(data === '='){
    try{
       document.getElementById("display").value = eval(document.getElementById("display").value);
    }

    catch(error){
      alert("Invalid Statement");
      document.getElementById("display").value = ""
      
    }

  }

  else if (data === "C") {
    document.getElementById("display").value = "";
  }

  else{
    document.getElementById("display").value = document.getElementById("display").value + data;
  }


}