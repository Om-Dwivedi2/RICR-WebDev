function dev() {
  let sweep = document.getElementById("sweep");
  sweep.currentTime = 0;
  sweep.play();
  sweep.onended = () => window.location.reload();
}

function om() {
  let s = document.getElementById("state").value.trim().toUpperCase();
  console.log(s);
  let clickSound = document.getElementById("clickSound");
  clickSound.currentTime = 0;
  clickSound.play();

  let flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";

  if (s === "LADAKH") {
    flag.style.top = "150px";
    flag.style.left = "275px";
    flag.title = `State: ${s}\nCapital: LEH`;
  }

  if (s === "JAMMU AND KASHMIR") {
    flag.style.top = "170px";
    flag.style.left = "220px";
    flag.title = `State: ${s}\nCapital: SRINAGAR`;
  }

  if (s === "HIMACHAL PRADESH") {
    flag.style.top = "235px";
    flag.style.left = "275px";
    flag.title = `State: ${s}\nCapital: SHIMLA`;
  }

  if (s === "PUNJAB") {
    flag.style.top = "260px";
    flag.style.left = "235px";
    flag.title = `State: ${s}\nCapital: CHANDIGARH`;
  }

  if (s === "HARYANA") {
    flag.style.top = "315px";
    flag.style.left = "250px";
    flag.title = `State: ${s}\nCapital: CHANDIGARH`;
  }

  if (s === "UTTARAKHAND") {
    flag.style.top = "290px";
    flag.style.left = "325px";
    flag.title = `State: ${s}\nCapital: DEHRADUN`;
  }

  if (s === "UTTAR PRADESH") {
    flag.style.top = "390px";
    flag.style.left = "360px";
    flag.title = `State: ${s}\nCapital: LUCKNOW`;
  }

  if (s === "BIHAR") {
    flag.style.top = "420px";
    flag.style.left = "480px";
    flag.title = `State: ${s}\nCapital: PATNA`;
  }

  if (s === "RAJASTHAN") {
    flag.style.top = "380px";
    flag.style.left = "180px";
    flag.title = `State: ${s}\nCapital: JAIPUR`;
  }

  if (s === "SIKKIM") {
    flag.style.top = "363px";
    flag.style.left = "543px";
    flag.title = `State: ${s}\nCapital: GANGTOK`;
  }

  if (s === "WEST BENGAL") {
    flag.style.top = "495px";
    flag.style.left = "530px";
    flag.title = `State: ${s}\nCapital: KOLKATA`;
  }

  if (s === "MEGHALAYA") {
    flag.style.top = "425px";
    flag.style.left = "610px";
    flag.title = `State: ${s}\nCapital: SHILLONG`;
  }

  if (s === "ASSAM") {
    flag.style.top = "400px";
    flag.style.left = "650px";
    flag.title = `State: ${s}\nCapital: DISPUR`;
  }

  if (s === "ARUNACHAL PRADESH") {
    flag.style.top = "330px";
    flag.style.left = "695px";
    flag.title = `State: ${s}\nCapital: ITANAGAR`;
  }

  if (s === "NAGALAND") {
    flag.style.top = "400px";
    flag.style.left = "690px";
    flag.title = `State: ${s}\nCapital: KOHIMA`;
  }

  if (s === "MANIPUR") {
    flag.style.top = "440px";
    flag.style.left = "680px";
    flag.title = `State: ${s}\nCapital: IMPHAL`;
  }

  if (s === "MIZORAM") {
    flag.style.top = "490px";
    flag.style.left = "655px";
    flag.title = `State: ${s}\nCapital: AIZAWL`;
  }

  if (s === "TRIPURA") {
    flag.style.top = "475px";
    flag.style.left = "625px";
    flag.title = `State: ${s}\nCapital: AGARTALA`;
  }

  if (s === "JHARKHAND") {
    flag.style.top = "490px";
    flag.style.left = "455px";
    flag.title = `State: ${s}\nCapital: RANCHI`;
  }

  if (s === "ODISHA") {
    flag.style.top = "575px";
    flag.style.left = "450px";
    flag.title = `State: ${s}\nCapital: BHUBANESWAR`;
  }

  if (s === "CHHATTISGARH") {
    flag.style.top = "550px";
    flag.style.left = "380px";
    flag.title = `State: ${s}\nCapital: RAIPUR`;
  }

  if (s === "MADHYA PRADESH") {
    flag.style.top = "485px";
    flag.style.left = "280px";
    flag.title = `State: ${s}\nCapital: BHOPAL`;
  }

  if (s === "GUJARAT") {
    flag.style.top = "485px";
    flag.style.left = "125px";
    flag.title = `State: ${s}\nCapital: GANDHINAGAR`;
  }

  if (s === "MAHARASHTRA") {
    flag.style.top = "610px";
    flag.style.left = "215px";
    flag.title = `State: ${s}\nCapital: MUMBAI`;
  }

  if (s === "TELANGANA") {
    flag.style.top = "650px";
    flag.style.left = "300px";
    flag.title = `State: ${s}\nCapital: HYDERABAD`;
  }

  if (s === "GOA") {
    flag.style.top = "720px";
    flag.style.left = "170px";
    flag.title = `State: ${s}\nCapital: PANAJI`;
  }

  if (s === "KARNATAKA") {
    flag.style.top = "760px";
    flag.style.left = "210px";
    flag.title = `State: ${s}\nCapital: BENGALURU`;
  }

  if (s === "ANDHRA PRADESH") {
    flag.style.top = "740px";
    flag.style.left = "300px";
    flag.title = `State: ${s}\nCapital: AMARAVATI`;
  }

  if (s === "KERALA") {
    flag.style.top = "870px";
    flag.style.left = "222px";
    flag.title = `State: ${s}\nCapital: THIRUVANANTHAPURAM`;
  }

  if (s === "TAMIL NADU") {
    flag.style.top = "870px";
    flag.style.left = "280px";
    flag.title = `State: ${s}\nCapital: CHENNAI`;
  }

  if (s === "ANDAMAN AND NICOBAR ISLANDS") {
    flag.style.top = "810px";
    flag.style.left = "673px";
    flag.title = `State: ${s}\nCapital: PORT BLAIR`;
  }

  if (s === "DADRA AND NAGAR HAVELI AND DAMAN AND DIU") {
    flag.style.top = "570px";
    flag.style.left = "152px";
    flag.title = `State: ${s}\nCapital: DAMAN`;
  }

  if (s === "DELHI") {
    flag.style.top = "327px";
    flag.style.left = "270px";
    flag.title = `State: ${s}\nCapital: NEW DELHI`;
  }

  if (s === "LAKSHADWEEP") {
    flag.style.top = "852px";
    flag.style.left = "133px";
    flag.title = `State: ${s}\nCapital: KAVARATTI`;
  }

  if (s === "PUDUCHERRY") {
    flag.style.top = "840px";
    flag.style.left = "320px";
    flag.title = `State: ${s}\nCapital: PUDUCHERRY`;
  }

  document.getElementById("india").appendChild(flag);

  document.getElementById("state").value = "";
}

function add() {
  let complete = document.getElementById("complete");
  complete.currentTime = 0;
  complete.play();

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "150px";
  flag.style.left = "275px";
  flag.title = `State: LADAKH\nCapital: LEH`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "170px";
  flag.style.left = "220px";
  flag.title = `State: JAMMU AND KASHMIR\nCapital: SRINAGAR`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "235px";
  flag.style.left = "275px";
  flag.title = `State: HIMACHAL PRADESH\nCapital: SHIMLA`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "260px";
  flag.style.left = "235px";
  flag.title = `State: HARYANA\nCapital: CHANDIGARH`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "315px";
  flag.style.left = "250px";
  flag.title = `State: PUNJAB\nCapital: CHANDIGARH`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "290px";
  flag.style.left = "325px";
  flag.title = `State: UTTARAKHAND\nCapital: DEHRADUN`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "390px";
  flag.style.left = "360px";
  flag.title = `State: UTTAR PRADESH\nCapital: LUCKNOW`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "420px";
  flag.style.left = "480px";
  flag.title = `State: BIHAR\nCapital: PATNA`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "380px";
  flag.style.left = "180px";
  flag.title = `State: RAJASTHAN\nCapital: JAIPUR`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "363px";
  flag.style.left = "543px";
  flag.title = `State: SIKKIM\nCapital: GANGTOK`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "495px";
  flag.style.left = "530px";
  flag.title = `State: WEST BENGAL\nCapital: KOLKATA`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "425px";
  flag.style.left = "610px";
  flag.title = `State: MEGHALAYA\nCapital: SHILLONG`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "400px";
  flag.style.left = "650px";
  flag.title = `State: ASSAM\nCapital: DISPUR`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "330px";
  flag.style.left = "695px";
  flag.title = `State: ARUNACHAL PRADESH\nCapital: ITANAGAR`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "400px";
  flag.style.left = "690px";
  flag.title = `State: NAGALAND\nCapital: KOHIMA`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "440px";
  flag.style.left = "680px";
  flag.title = `State: MANIPUR\nCapital: IMPHAL`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "490px";
  flag.style.left = "655px";
  flag.title = `State: MIZORAM\nCapital: AIZAWL`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "475px";
  flag.style.left = "625px";
  flag.title = `State: TRIPURA\nCapital: AGARTALA`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "490px";
  flag.style.left = "455px";
  flag.title = `State: JHARKHAND\nCapital: RANCHI`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "575px";
  flag.style.left = "450px";
  flag.title = `State: ODISHA\nCapital: BHUBANESWAR`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "550px";
  flag.style.left = "380px";
  flag.title = `State: CHHATTISGARH\nCapital: RAIPUR`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "485px";
  flag.style.left = "280px";
  flag.title = `State: MADHYA PRADESH\nCapital: BHOPAL`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "485px";
  flag.style.left = "125px";
  flag.title = `State: GUJARAT\nCapital: GANDHINAGAR`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "610px";
  flag.style.left = "215px";
  flag.title = `State: MAHARASHTRA\nCapital: MUMBAI`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "650px";
  flag.style.left = "300px";
  flag.title = `State: TELANGANA\nCapital: HYDERABAD`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "720px";
  flag.style.left = "170px";
  flag.title = `State: GOA\nCapital: PANAJI`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "760px";
  flag.style.left = "210px";
  flag.title = `State: KARNATAKA\nCapital: BENGALURU`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "740px";
  flag.style.left = "300px";
  flag.title = `State: ANDHRA PRADESH\nCapital: AMARAVATI`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "870px";
  flag.style.left = "222px";
  flag.title = `State: KERALA\nCapital: THIRUVANANTHAPURAM`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "870px";
  flag.style.left = "280px";
  flag.title = `State: TAMIL NADU\nCapital: CHENNAI`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "810px";
  flag.style.left = "673px";
  flag.title = `State: ANDAMAN AND NICOBAR ISLANDS\nCapital: PORT BLAIR`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "570px";
  flag.style.left = "152px";
  flag.title = `State: DADRA AND NAGAR HAVELI AND DAMAN AND DIU\nCapital: DAMAN`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "327px";
  flag.style.left = "270px";
  flag.title = `State: DELHI\nCapital: NEW DELHI`;
  document.getElementById("india").appendChild(flag);

  var flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "852px";
  flag.style.left = "133px";
  flag.title = `State: LAKSHADWEEP\nCapital: KAVARATTI`;
  document.getElementById("india").appendChild(flag);

  levarlag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "position-absolute");
  flag.style.color = "red";
  flag.style.top = "840px";
  flag.style.left = "320px";
  flag.title = `State: PUDUCHERRY\nCapital: PUDUCHERRY`;
  document.getElementById("india").appendChild(flag);
}

let check = true;
function sound() {
  let audioIcon = document.getElementById("audioCheck");
  let sound = document.querySelectorAll("audio");
  
  if (check) {
    audioIcon.innerHTML = `<i class="bi bi-volume-mute"></i>`;
    check = false;
    sound.forEach((element) => {
      element.muted = true;
      
    });
  } else {

    audioIcon.innerHTML = `<i class="bi bi-volume-down"></i>`;
    check = true;
    sound.forEach((element) => {
        element.muted = false;
    });
    
    

  }
}
