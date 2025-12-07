function dev(){
    window.location.reload();
}

function om (){


    let s = document.getElementById("state").value.trim().toUpperCase();
    console.log(s);
    
    let flag = document.createElement("i");
    flag.classList.add("bi", "bi-flag-fill", "position-absolute")
    flag.style.color = "red";

    if (s === "LADAKH") {

        flag.style.top = "150px";
        flag.style.left = "275px";
        

        flag.title = `State: ${s}\nCapital: LEH`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "JAMMU AND KASHMIR") {

        flag.style.top = "170px";
        flag.style.left = "220px";
        

        flag.title = `State: ${s}\nCapital: SRINAGAR`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "HIMACHAL PRADESH") {

        flag.style.top = "235px";
        flag.style.left = "275px";
        

        flag.title = `State: ${s}\nCapital: SHIMLA`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "PUNJAB") {

        flag.style.top = "260px";
        flag.style.left = "235px";
        

        flag.title = `State: ${s}\nCapital: CHANDIGARH`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "HARYANA") {

        flag.style.top = "315px";
        flag.style.left = "250px";
        

        flag.title = `State: ${s}\nCapital: CHANDIGARH`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "UTTARAKHAND") {

        flag.style.top = "290px";
        flag.style.left = "325px";
        

        flag.title = `State: ${s}\nCapital: DEHRADUN`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "UTTAR PRADESH") {

        flag.style.top = "390px";
        flag.style.left = "360px";
        

        flag.title = `State: ${s}\nCapital: LUCKNOW`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "BIHAR") {

        flag.style.top = "420px";
        flag.style.left = "480px";
        

        flag.title = `State: ${s}\nCapital: PATNA`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "RAJASTHAN") {

        flag.style.top = "380px";
        flag.style.left = "180px";
        

        flag.title = `State: ${s}\nCapital: JAIPUR`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "SIKKIM") {

        flag.style.top = "363px";
        flag.style.left = "543px";
        

        flag.title = `State: ${s}\nCapital: GANGTOK`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "WEST BENGAL") {

        flag.style.top = "495px";
        flag.style.left = "530px";
        

        flag.title = `State: ${s}\nCapital: KOLKATA`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "MEGHALAYA") {

        flag.style.top = "425px";
        flag.style.left = "610px";
        

        flag.title = `State: ${s}\nCapital: SHILLONG`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "ASSAM") {

        flag.style.top = "400px";
        flag.style.left = "650px";
        

        flag.title = `State: ${s}\nCapital: DISPUR`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "ARUNACHAL PRADESH") {

        flag.style.top = "330px";
        flag.style.left = "695px";
        

        flag.title = `State: ${s}\nCapital: ITANAGAR`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "NAGALAND") {

        flag.style.top = "400px";
        flag.style.left = "690px";
        

        flag.title = `State: ${s}\nCapital: KOHIMA`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "MANIPUR") {

        flag.style.top = "440px";
        flag.style.left = "680px";
        

        flag.title = `State: ${s}\nCapital: IMPHAL`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "MIZORAM") {

        flag.style.top = "490px";
        flag.style.left = "655px";
        

        flag.title = `State: ${s}\nCapital: AIZAWL`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "TRIPURA") {

        flag.style.top = "475px";
        flag.style.left = "625px";
        

        flag.title = `State: ${s}\nCapital: AGARTALA`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "JHARKHAND") {

        flag.style.top = "490px";
        flag.style.left = "455px";
        

        flag.title = `State: ${s}\nCapital: RANCHI`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "ODISHA") {

        flag.style.top = "575px";
        flag.style.left = "450px";
        

        flag.title = `State: ${s}\nCapital: BHUBANESWAR`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "CHHATTISGARH") {

        flag.style.top = "550px";
        flag.style.left = "380px";
        

        flag.title = `State: ${s}\nCapital: RAIPUR`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "MADHYA PRADESH") {

        flag.style.top = "485px";
        flag.style.left = "280px";
        

        flag.title = `State: ${s}\nCapital: BHOPAL`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "GUJARAT") {

        flag.style.top = "485px";
        flag.style.left = "125px";
        

        flag.title = `State: ${s}\nCapital: GANDHINAGAR`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "MAHARASHTRA") {

        flag.style.top = "610px";
        flag.style.left = "215px";
        

        flag.title = `State: ${s}\nCapital: MUMBAI`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "TELANGANA") {

        flag.style.top = "650px";
        flag.style.left = "300px";
        

        flag.title = `State: ${s}\nCapital: HYDERABAD`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "GOA") {

        flag.style.top = "720px";
        flag.style.left = "170px";
        

        flag.title = `State: ${s}\nCapital: PANAJI`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "KARNATAKA") {

        flag.style.top = "760px";
        flag.style.left = "210px";
        

        flag.title = `State: ${s}\nCapital: BENGALURU`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "ANDHRA PRADESH") {

        flag.style.top = "740px";
        flag.style.left = "300px";
        

        flag.title = `State: ${s}\nCapital: AMARAVATI`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "KERALA") {

        flag.style.top = "870px";
        flag.style.left = "222px";
        

        flag.title = `State: ${s}\nCapital: THIRUVANANTHAPURAM`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "TAMIL NADU") {

        flag.style.top = "870px";
        flag.style.left = "280px";
        

        flag.title = `State: ${s}\nCapital: CHENNAI`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "ANDAMAN AND NICOBAR ISLANDS") {

        flag.style.top = "810px";
        flag.style.left = "673px";
        

        flag.title = `State: ${s}\nCapital: PORT BLAIR`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "DADRA AND NAGAR HAVELI AND DAMAN AND DIU") {

        flag.style.top = "570px";
        flag.style.left = "152px";
        

        flag.title = `State: ${s}\nCapital: DAMAN`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "DELHI") {

        flag.style.top = "327px";
        flag.style.left = "270px";
        

        flag.title = `State: ${s}\nCapital: NEW DELHI`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "LAKSHADWEEP") {

        flag.style.top = "852px";
        flag.style.left = "133px";
        

        flag.title = `State: ${s}\nCapital: KAVARATTI`;
        document.getElementById("india").appendChild(flag);
    }

    if (s === "PUDUCHERRY") {

        flag.style.top = "840px";
        flag.style.left = "320px";
        

        flag.title = `State: ${s}\nCapital: PUDUCHERRY`;
        document.getElementById("india").appendChild(flag);
    }


   











    

    document.getElementById("state").value ="--Select State Name--";

}


