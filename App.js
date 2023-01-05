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
    divResulte.style.height = "100%";
    divResulte.style.width = "100%"
    divResulte.style.backgroundColor = couleur;
    divResulte.style.position = "absolute";
    divResulte.style.top = '0px';
    // divResulte.style.opacity = "0.75";
    divResulte.style.display = "flex";
    divResulte.style.zIndex = 99;
    divResulte.style.justifyContent = "center";
    divResulte.style.alignItems = "center";
        buttonRejouer.style.height = "250px";
        buttonRejouer.style.width = "250px";
        buttonRejouer.style.background = "gold"
        buttonRejouer.textContent = "REJOUER"
        buttonRejouer.style.fontSize = "32px"
        buttonRejouer.style.display ="flex"
        buttonRejouer.style.justifyContent = "center";
        buttonRejouer.style.alignItems = "center";
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
        DivTada("green")
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
        DivTada("green");
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
        console.log("gagné")
        DivTada("#ff000038")
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