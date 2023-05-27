function scrollDown(){
    let x = document.getElementById("#count");
    x.value = x.value+1;
    document.querySelectorAll(".everything")[x].scrollIntoView({behavior:"smooth"});
    
}

function scrollUp(){
    const x = document.getElementById("#count").value;
    x.value = x.value-1;
    document.querySelectorAll(".everything")[x].scrollIntoView({behavior:"smooth"});
    
}