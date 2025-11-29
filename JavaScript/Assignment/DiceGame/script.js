function start(){
    console.log("Game Started");

    document.getElementById("rolldice1").disabled = false;
    document.getElementById("restart").disabled = false;
    document.getElementById("start").disabled = true;

}

function restart(){
    window.location.reload();
}

function p1Play(){
    console.log("Player1 Playing");
    let score = Number(document.getElementById("score1").innerText);

    const DF = Math.floor((Math.random()*6) + 1);

    document.getElementById("image1").src = `../DiceGame/asserts/${DF}.png`

    if(DF === 6){
        document.getElementById("rolldice1").disabled = true;
        document.getElementById("rolldice2").disabled = false;
    }
    else{
        score = score + DF;
        document.getElementById("score1").innerText = score;
    }



}

function p2Play(){
    console.log("Player2 Playing");

     let score = Number(document.getElementById("score2").innerText);

    const DF = Math.floor((Math.random()*6) + 1);


     document.getElementById("image2").src = `../DiceGame/asserts/${DF}.png`
    

    if(DF === 6){
        document.getElementById("rolldice1").disabled = false;
        document.getElementById("rolldice2").disabled = true;
    }
    else{
        score = score + DF;
        document.getElementById("score2").innerText = score;
    }
}


