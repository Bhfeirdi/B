var hero = document.getElementById("hero");

var block = document.getElementById("block");

function jump(){
    hero.classList.add("animate");
    setTimeout(function()){
        CharacterData.classList.remove("animate");
    } ,500);
}