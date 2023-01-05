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
 score.textContent = "SCORE: "+ scoreValeur
  function DivTada(couleur) {
    let divResulte = document.createElement("div");
    divResulte.style.height = "100%";
         divResulte.style.width = "100%"
         divResulte.style.backgroundColor = couleur;
         divResulte.style.position ="absolute";
         divResulte.style.top = '0px';
         divResulte.style.opacity = "0.5";
         divResulte.style.display = "flex";
         divResulte.style.justifyContent = "center";
         divResulte.style.alignContent ="center";
         document.body.appendChild(divResulte)
  }
 function choixPierre() {
    if (pierrepapierCiseaux[ordiSign] == "pierre") {
    }
    if (pierrepapierCiseaux[ordiSign] == "papier") {
        console.log("perdu")
        DivTada("red");
        scoreValeur -=1 ;
    }
    if (pierrepapierCiseaux[ordiSign] == "ciseaux") {
        console.log("gagné")
        scoreValeur += 1;
    }
    ordiSign = randomResult();
    score.textContent = "SCORE: "+ scoreValeur
    console.log("nouveau resultat :"+pierrepapierCiseaux[ordiSign]);

}

function choixCiseaux() {
    if (pierrepapierCiseaux[ordiSign] == "pierre") {
         DivTada("red");
        console.log('red')
    }
    if (pierrepapierCiseaux[ordiSign] == "papier") {
        console.log("gagné")
        DivTada("green")
        scoreValeur += 1;
    }
    if (pierrepapierCiseaux[ordiSign] == "ciseaux") {
        console.log("égalités")
        
    }
    console.log("nouveau resultat :"+pierrepapierCiseaux[ordiSign]);
    ordiSign = randomResult();
 
    score.textContent = "SCORE: "+ scoreValeur
}
function choixFeuille() {
    if (pierrepapierCiseaux[ordiSign] == "pierre") {
        console.log("gagné")
        DivTada("green")
        scoreValeur += 1;
      
    }
    if (pierrepapierCiseaux[ordiSign] == "papier") {
        console.log("égalité")
        ordiSign = randomResult();
       
    }
    if (pierrepapierCiseaux[ordiSign] == "ciseaux") {
        console.log("perdu")
        DivTada("red");
        scoreValeur -=1 ;
        
        
    }
    ordiSign = randomResult();
    score.textContent = "SCORE: "+ scoreValeur
    console.log("nouveau resultat :"+pierrepapierCiseaux[ordiSign]);
}

console.log(pierrepapierCiseaux[ordiSign])
ciseaux.addEventListener("click", choixCiseaux);
pierre.addEventListener("click", choixPierre);
feuille.addEventListener("click", choixFeuille);