



function validation() {
    let compteur = 0
   
    let motDePasse = document.getElementById("mdp").value;
    let messageAAfficher = document.getElementById("message")


    const pattern_chiffre = /[0-9]/;
    const pattern_minuscule = /[a-z]/;
    const pattern_majuscule = /[A-Z]/;
    const pattern_speciaux = /\W/;  
    const pattern_taille= /(.{,8,})/;


    if (motDePasse.match(pattern_chiffre)) {
        compteur = compteur+1;
        
        if (motDePasse.match(pattern_minuscule)) {
            compteur = compteur+1;
        }
    
        if (motDePasse.match(pattern_majuscule)) {
            compteur = compteur+1;    
        } 
    
        if (motDePasse.match(pattern_speciaux)) {
            compteur = compteur+1;  
        } 
    
        if (motDePasse<pattern_taille) {
            compteur = compteur-1;
        }
    } 

switch (compteur) { 
    case 4:  
    messageAAfficher.innerHTML = "Mot de passe très sécurisée";
    messageAAfficher.style.background = "green";
    break;
    case 3:
        messageAAfficher.innerHTML="Mot de passe sécurisée"
        messageAAfficher.style.background = "blue";
    break;
    case 2:
        messageAAfficher.innerHTML="Mot de passe moyen"
        messageAAfficher.style.background = "orange";
    break;
    case 1 :
    case 0:
        messageAAfficher.innerHTML="Mot de passe dangereux"
        messageAAfficher.style.background = "red";
    break;
}

}