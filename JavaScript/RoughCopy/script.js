let file = document.getElementById("file");

function om() {
  file.click();
}

function abc() {
  let x = document.getElementById("switch").innerText;
  if (x === "ON") {
    document.getElementById("switch").innerText = "OFF";
  }
  else{
    document.getElementById("switch").innerText = "ON";
  }
}
