function scrollDown(){
    let x = document.querySelector("#count").innerHTML;
    if(x == 9) {
        document.querySelector('.app').scrollIntoView({behavior: 'smooth'});
        document.querySelector("#count").innerHTML = 0;
    }
    x++
    document.querySelectorAll(".everything")[x].scrollIntoView({behavior:"smooth"});
    document.querySelector("#count").innerHTML = x;
    
}

function scrollFirst(){
    let x = document.querySelector("#count").innerHTML;
    document.querySelectorAll(".everything")[x].scrollIntoView({behavior:"smooth"}); 
}

function scrollUp(){
    let x = document.getElementById("count").innerHTML;
    if(x == 0) {
        document.querySelector('.app').scrollIntoView({behavior: 'smooth'});
        document.querySelector("#count").innerHTML = 0;
    }
    x--
    document.querySelectorAll(".everything")[x].scrollIntoView({behavior:"smooth"});
    document.querySelector("#count").innerHTML = x;
}