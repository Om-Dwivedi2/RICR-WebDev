// INCOMPLETE

function refresh() {
  
}


function om() {
  let unit = document.getElementById("unit").value;

  if (unit === "" || Number(unit) < 0) {
    document.getElementById("warning").classList.remove("d-none");
    document.getElementById("bill").classList.add("d-none");
    return;
  } else if (Number(unit) >= 0) {
    document.getElementById("warning").classList.add("d-none");
  }

  document.getElementById("bill").classList.remove("d-none");

  if (Number(unit) <= 10) {
    document.getElementById("bill").innerHTML = `
      <div>Total Bill: <span class="float-end">₹${(Number(unit)*11).toFixed(2)}</span></div>
      <div>First 10KM: <span class="float-end">₹${(Number(unit)*11).toFixed(2)}</span></div>
      <div>Above 10KM: <span class="float-end">₹0</span></div>`;
  }

  if (Number(unit) >= 10) {
    document.getElementById("bill").innerHTML = `
      <div>Total Bill: <span class="float-end">₹${(((Number(unit)-10)*11) + 110).toFixed(2)}</span></div>
      <div>First 10KM: <span class="float-end">₹${(10*11).toFixed(2)}</span></div>
      <div>Above 10KM: <span class="float-end">₹${((Number(unit)-10)*11).toFixed(2)}</span></div>`;
  }
}
