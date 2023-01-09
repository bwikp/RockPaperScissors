let pierre = document.querySelector("#p")
let feuille = document.querySelector("#f")
let ciseaux = document.querySelector("#c")
let scoreTxt = document.querySelector("#score")
let scoreJoueur = 0;
let scoreOrdi = 0;
const pierrepapierCiseaux = ["pierre", "papier", "ciseaux"]
let ordiSign = randomResult();
score.textContent =  "Joueur:"+scoreJoueur +" " +scoreOrdi+ ":Ordi";

let divResulte = document.createElement("div");
let buttonRejouer = document.createElement("div")
let interface = document.querySelector("#interface")
let choixOrdi = document.createElement("img")
    divResulte.appendChild(buttonRejouer)    
    divResulte.appendChild(choixOrdi)
function randomResult() {
    return Math.floor(Math.random() * 3);
}
function DivTada(couleur) {
    interface.appendChild(divResulte)
    divResulte.appendChild(choixOrdi)
    divResulte.classList.add("div-resulte")
    buttonRejouer.classList.add("boutton-rejouer")
    if(pierrepapierCiseaux[ordiSign] == "pierre")
     {
        choixOrdi.src="image/pierre.png"
        
     } else {
    choixOrdi.src ="image/"+pierrepapierCiseaux[ordiSign]+".jpg"
     }
    divResulte.style.backgroundColor = couleur;
        buttonRejouer.textContent = "REJOUER"
        document.querySelector("#interface").appendChild(divResulte)
        divResulte.appendChild(buttonRejouer)

        if (couleur == "#efeee933")
        {   buttonRejouer.textContent ="EGALITE"
           setTimeout(()=>{
            interface.removeChild(divResulte)
            divResulte.removeChild(choixOrdi)
           },500)
        }
}
function rejouer(){
    interface.removeChild(divResulte)
    divResulte.removeChild(choixOrdi)
}

buttonRejouer.addEventListener("click",rejouer)  

function choixPierre() {
    if (pierrepapierCiseaux[ordiSign] == "pierre") {
            DivTada("#efeee933");
    }
    if (pierrepapierCiseaux[ordiSign] == "papier") {
        DivTada("#ff000038");
        scoreOrdi += 1;
    }
    if (pierrepapierCiseaux[ordiSign] == "ciseaux") {
        DivTada("#0080004f")
        scoreJoueur += 1;
    }
    ordiSign = randomResult();
    score.textContent =  "Joueur:"+scoreJoueur +" " +scoreOrdi+ ":Ordi";
    console.log("nouveau resultat :" + pierrepapierCiseaux[ordiSign]);

}

function choixCiseaux() {
    if (pierrepapierCiseaux[ordiSign] == "pierre") {
        DivTada("#ff000038");
        scoreOrdi += 1;
    }
    if (pierrepapierCiseaux[ordiSign] == "papier") {
        DivTada("#0080004f");
        scoreJoueur += 1;
    }
    if (pierrepapierCiseaux[ordiSign] == "ciseaux") {
        DivTada("#efeee933");
    }
    console.log("nouveau resultat :" + pierrepapierCiseaux[ordiSign]);
    score.textContent =  "Joueur:"+scoreJoueur +" " +scoreOrdi+ ":Ordi";
    ordiSign = randomResult();

    score.textContent = "SCORE: " + scoreValeur
}
function choixFeuille() {
    if (pierrepapierCiseaux[ordiSign] == "pierre") {
        DivTada("#0080004f")
        scoreJoueur += 1;

    }
    if (pierrepapierCiseaux[ordiSign] == "papier") {
        DivTada("#efeee933");
    }
    if (pierrepapierCiseaux[ordiSign] == "ciseaux") {
        DivTada("#ff000038");
        scoreOrdi += 1;


    }
    ordiSign = randomResult();
    score.textContent =  "Joueur:"+scoreJoueur +" " +scoreOrdi+ ":Ordi";
    console.log("nouveau resultat :" + pierrepapierCiseaux[ordiSign]);
}

console.log(pierrepapierCiseaux[ordiSign])
ciseaux.addEventListener("click", choixCiseaux);
pierre.addEventListener("click", choixPierre);
feuille.addEventListener("click", choixFeuille);