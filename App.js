let pierre = document.querySelector("#p")
let feuille = document.querySelector("#f")
let ciseaux = document.querySelector("#c")
let scoreTxt = document.querySelector("#score")
let scoreValeur = 0;
const pierrepapierCiseaux = ["pierre", "papier", "ciseaux"]
 function randomResult()     {
    return Math.floor(Math.random()* 3);
 }
 let ordiSign = randomResult();

function choixPierre() {
    if (pierrepapierCiseaux[ordiSign] == "pierre") {
       ordiSign = randomResult();
       console.log("nouveau resultat :"+pierrepapierCiseaux[ordiSign]);
    }
    if (pierrepapierCiseaux[ordiSign] == "papier") {
        console.log("perdu")
    }
    if (pierrepapierCiseaux[ordiSign] == "ciseaux") {
        console.log("gagné")
        scoreValeur += 1;
    }
    score.textContent = "SCORE: "+ scoreValeur
}

function choixCiseaux() {
    if (pierrepapierCiseaux[ordiSign] == "pierre") {
        console.log("perdu")
    }
    if (pierrepapierCiseaux[ordiSign] == "papier") {
        console.log("gagné")
        scoreValeur += 1;
    }
    if (pierrepapierCiseaux[ordiSign] == "ciseaux") {
        ordiSign = randomResult();
        console.log("égalités")
        console.log("nouveau resultat :"+pierrepapierCiseaux[ordiSign]);
    }
    score.textContent = "SCORE: "+ scoreValeur
}
function choixFeuille() {
    if (pierrepapierCiseaux[ordiSign] == "pierre") {
        console.log("gagné")
        scoreValeur += 1;
    }
    if (pierrepapierCiseaux[ordiSign] == "papier") {
        console.log("égalité")
        ordiSign = randomResult();
        console.log("nouveau resultat :"+pierrepapierCiseaux[ordiSign]);
    }
    if (pierrepapierCiseaux[ordiSign] == "ciseaux") {
        console.log("perdu")
    }
    score.textContent = "SCORE: "+ scoreValeur
}

console.log(pierrepapierCiseaux[ordiSign])
ciseaux.addEventListener("click", choixCiseaux);
pierre.addEventListener("click", choixPierre);
feuille.addEventListener("click", choixFeuille);