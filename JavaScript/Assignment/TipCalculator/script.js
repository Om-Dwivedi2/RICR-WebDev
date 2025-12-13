function om() {
  let amount = document.getElementById("amount").value;
  let service = document.getElementById("service").value;
  let people = document.getElementById("people").value;


   if (amount === "" || service === "" || people === "") {
    alert("Enter the Details Correctly");
    return;
  }

  let p = document.createElement("div");
  let c1 = document.createElement("p");

  let result = ((amount * (service / 100)) / people);

 
  console.log(result);
  
  p.classList.add("container", "bg-light","text-center","my-4","w-50","fs-3","rounded-3" );

  c1.innerText = `Tip Amount\n ${result} each`;

  p.appendChild(c1);
  document.getElementById("main").appendChild(p);

}
