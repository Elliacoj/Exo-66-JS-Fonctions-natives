let pUn = document.getElementById("entier");
let pDeux = document.getElementById("flottant");
let pTrois = document.getElementById("non-numerique");
let pQuatre = document.getElementById("random");
let pCinq = document.getElementById("trunc");
let pSix = document.getElementById("replace");
let operande = 10

pUn.innerHTML = parseInt(pUn.innerText) * operande;
pDeux.innerHTML = parseFloat(pDeux.innerText) * operande + parseInt(pUn.innerText);

if (isNaN(pTrois.innerText)) {
    pTrois.innerHTML = "0";
}

pQuatre.innerHTML = Math.random();
pCinq.innerHTML = Math.trunc(pCinq.innerText);
pSix.innerHTML = pSix.innerText.replace("Hello world", "Jocaille Amaury");

console.log(random());