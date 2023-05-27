function scrollDown(){
    let x = document.querySelector("#count").innerHTML;
    x++
    document.querySelectorAll(".everything")[x].scrollIntoView({behavior:"smooth"});
    
}

function scrollUp(){
    const x = document.getElementById("#count").innerHTML;
    x--
    document.querySelectorAll(".everything")[x].scrollIntoView({behavior:"smooth"});
    
}