function change(rang)
{
    document.getElementById("rainbow").style.backgroundColor = rang;
}

function change2(rang){
    document.getElementById("rainbow").style.borderColor = rang;
}

document.getElementById("c1").addEventListener("mouseenter" , ()=>{
    change(document.getElementById("c1").style.backgroundColor)
})

document.getElementById("c1").addEventListener("mouseenter" , ()=>{
    change2(document.getElementById("c1").style.backgroundColor)
})

document.getElementById("c1").addEventListener("mouseleave" , ()=>{
    change("white")
})

document.getElementById("c2").addEventListener("mouseenter" , ()=>{
    change(document.getElementById("c2").style.backgroundColor)
});

document.getElementById("c2").addEventListener("mouseenter" , ()=>{
    change2(document.getElementById("c2").style.backgroundColor)
});

document.getElementById("c2").addEventListener("mouseleave" , ()=>{
    change("white")
});

document.getElementById("c3").addEventListener("mouseenter" , ()=>{
    change(document.getElementById("c3").style.backgroundColor)
});

document.getElementById("c3").addEventListener("mouseenter" , ()=>{
    change2(document.getElementById("c3").style.backgroundColor)
});

document.getElementById("c3").addEventListener("mouseleave" , ()=>{
    change("white")
});

document.getElementById("c4").addEventListener("mouseenter" , ()=>{
    change(document.getElementById("c4").style.backgroundColor)
});

document.getElementById("c4").addEventListener("mouseenter" , ()=>{
    change2(document.getElementById("c4").style.backgroundColor)
});

document.getElementById("c4").addEventListener("mouseleave" , ()=>{
    change("white")
});

document.getElementById("c5").addEventListener("mouseenter" , ()=>{
    change(document.getElementById("c5").style.backgroundColor)
});

document.getElementById("c5").addEventListener("mouseenter" , ()=>{
    change2(document.getElementById("c5").style.backgroundColor)
});

document.getElementById("c5").addEventListener("mouseleave" , ()=>{
    change("white")
});

document.getElementById("c6").addEventListener("mouseenter" , ()=>{
    change(document.getElementById("c6").style.backgroundColor)
});

document.getElementById("c6").addEventListener("mouseenter" , ()=>{
    change2(document.getElementById("c6").style.backgroundColor)
});

document.getElementById("c6").addEventListener("mouseleave" , ()=>{
    change("white")
});

document.getElementById("c7").addEventListener("mouseenter" , ()=>{
    change(document.getElementById("c7").style.backgroundColor)
});

document.getElementById("c7").addEventListener("mouseenter" , ()=>{
    change2(document.getElementById("c7").style.backgroundColor)
});

document.getElementById("c7").addEventListener("mouseleave" , ()=>{
    change("white")
});