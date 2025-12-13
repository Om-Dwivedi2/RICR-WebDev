function om() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const number = document.getElementById("number").value.trim();
  const DOB = document.getElementById("DOB").value.trim();

  document.querySelectorAll("span").forEach((element) => {
    element.innerHTML = "";
  });

  if (!name) {
    document.getElementById("NameError").innerText = "Required";
  }

  if (!/^[A-Za-z ]+$/.test(name)) {
    document.getElementById("NameError").innerText = "hello";
    return;
  }

  if (!email) {
    document.getElementById("EmailError").innerText = "Required";
  }

  if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(email)) {
    document.getElementById("EmailError").innerText = "hello";
    return;
  }

  if (!number) {
    document.getElementById("PhoneError").innerText = "Required";
  }

  if (!/^[6-9]+\d{9}$/.test(number)) {
    document.getElementById("PhoneError").innerText = "hello";
    return;
  }

  let date = new Date().getFullYear();

  let birthYear = Number(DOB.split("-")[0]);
  if (date - birthYear < 18) {
    document.getElementById("DOBError").innerText = "Baccha hai tu abhi";

  }
  console.log(date, DOB);

  let data = {
    Name: name,
    Email: email,
    Number: number,
    DOB: DOB,
  };

  // console.log(data);
}
