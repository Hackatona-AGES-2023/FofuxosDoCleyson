function sendTheme(){
    const theme = document.querySelector("#mainInput").value;
    const difficulty = document.querySelector(".isToggled").value;
    console.log(theme);
    //generateQuiz(theme, difficulty);
    //scroll(1024.0);
    window.scrollBy(0, 1024)
}

const input = document.getElementById("#mainInput");
input.addEventListener("keypress", function(e) {
    if(e.key == 'Enter'){
        const theme = document.querySelector("#mainInput").value;
        const difficulty = document.querySelector(".isToggled").value;
        console.log(theme);
        generateQuiz(theme, difficulty);
        //scroll(1024.0);
        window.scrollBy(0, 1024)
    }
});
