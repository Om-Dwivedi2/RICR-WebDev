function start(){
    document.getElementById("restart").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("roll1").disabled = false;
}

function restart(){
    window.location.reload();
}

function roll1(){

    console.log("Player1 playing")
    
    score = Number(document.getElementById("score1").innerText);
    // what is the use of Number.
    
    
    DF = Math.floor(Math.random()*6)+1;

    
        document.getElementById("image1").src = `../DiceGame/asserts/${DF}.png`

    if((score + DF) >= 100){
        document.getElementById("roll1").disabled = true;
        document.getElementById("roll2").disabled = true;
        alert("Player 1 won");

    }

    else if(DF === 6){
        document.getElementById("roll1").disabled = true;
        document.getElementById("roll2").disabled = false;
    }
    else{
        document.getElementById("score1").innerText = score + DF;
    }





}

function roll2(){

console.log("Player2 playing")
    score = Number(document.getElementById("score2").innerText);
    // what is the use of Number.

    DF = Math.floor(Math.random()*6)+1;    
    document.getElementById("image2").src = `../DiceGame/asserts/${DF}.png`

    if((score + DF) >= 100){
        document.getElementById("roll1").disabled = true;
        document.getElementById("roll2").disabled = true;
        alert("Player 2 won");

    }
    
    else if(DF === 6){
        document.getElementById("roll2").disabled = true;
        document.getElementById("roll1").disabled = false;
    }
    else{
        document.getElementById("score2").innerText = score + DF;
    }



}