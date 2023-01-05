let pierre = document.querySelector("#p")
let feuille = document.querySelector("#f")
let ciseaux = document.querySelector("#c")
let scoreTxt = document.querySelector("#score")
let scoreValeur = 0;
const pierrepapierCiseaux = ["pierre", "papier", "ciseaux"]
let ordiSign = randomResult();
score.textContent = "SCORE: " + scoreValeur


function randomResult() {
    return Math.floor(Math.random() * 3);
}
function DivTada(couleur) {
    let divResulte = document.createElement("div");
    let buttonRejouer = document.createElement("div")
    document.querySelector("#interface").appendChild(divResulte)
    divResulte.appendChild(buttonRejouer)
    divResulte.classList.add("div-resulte")
    buttonRejouer.classList.add("boutton-rejouer")
    divResulte.style.backgroundColor = couleur;
        buttonRejouer.textContent = "REJOUER"

}

function choixPierre() {
    if (pierrepapierCiseaux[ordiSign] == "pierre") {
    }
    if (pierrepapierCiseaux[ordiSign] == "papier") {
        console.log("perdu")
        DivTada("#ff000038");
        scoreValeur -= 1;
    }
    if (pierrepapierCiseaux[ordiSign] == "ciseaux") {
        console.log("gagné")
        DivTada("#0080004f")
        scoreValeur += 1;
    }
    ordiSign = randomResult();
    score.textContent = "SCORE: " + scoreValeur
    console.log("nouveau resultat :" + pierrepapierCiseaux[ordiSign]);

}

function choixCiseaux() {
    if (pierrepapierCiseaux[ordiSign] == "pierre") {
        DivTada("#ff000038");
        scoreValeur -= 1;
    }
    if (pierrepapierCiseaux[ordiSign] == "papier") {
        DivTada("#0080004f");
        scoreValeur += 1;
    }
    if (pierrepapierCiseaux[ordiSign] == "ciseaux") {
        console.log("égalités")

    }
    console.log("nouveau resultat :" + pierrepapierCiseaux[ordiSign]);
    ordiSign = randomResult();

    score.textContent = "SCORE: " + scoreValeur
}
function choixFeuille() {
    if (pierrepapierCiseaux[ordiSign] == "pierre") {
        DivTada("#0080004f")
        scoreValeur += 1;

    }
    if (pierrepapierCiseaux[ordiSign] == "papier") {
        console.log("égalité")
        ordiSign = randomResult();

    }
    if (pierrepapierCiseaux[ordiSign] == "ciseaux") {
        DivTada("#ff000038");
        scoreValeur -= 1;


    }
    ordiSign = randomResult();
    score.textContent = "SCORE: " + scoreValeur
    console.log("nouveau resultat :" + pierrepapierCiseaux[ordiSign]);
}

console.log(pierrepapierCiseaux[ordiSign])
ciseaux.addEventListener("click", choixCiseaux);
pierre.addEventListener("click", choixPierre);
feuille.addEventListener("click", choixFeuille);