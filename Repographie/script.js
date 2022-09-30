let nombreDePhotocopies = document.getElementById('nbr')
let messageAAficher = document.getElementById('prix')
let envoiInput = document.getElementById('submit')
let prix


/*Pour stocker la valeur du nombre des photocopies*/

let stockagePhotocopie;

/*LA FONCTION SE LANCE AU CLICK DE ENVOIiNPUT*/

function verif() {

        stockagePhotocopie = parseInt(nombreDePhotocopies.value);
/*SI LE NOMBRE DE PHOTOCOPIES EST INFÉRIEUR à 10 LE PRIX EST DE 0.10 PAR PHOTOCOPIES*/ 
    if (stockagePhotocopie<=10) {
        prix = 0.10;
        messageAAficher.innerHTML="Le prix est de " + stockagePhotocopie * 0.10;
/*SINON SI LE NOMBRE DE PHOTOCOPIES EST SUPÉRIEUR à 10 MAIS INFÉRIEUR à 30 le prix SERA 0.10 POUR LES 10 PREMIèRE ET 0.09 POUR LES 20 AUTRES*/ 
    } else {

        /*SINON SI LE NOMBRE DE PHOTOCOPIES EST SUPÉRIEUR à 10 MAIS INFÉRIEUR à 30 le prix SERA 0.10 POUR LES 10 PREMIèRE ET 0.09 POUR LES 20 AUTRES*/ 

        if (stockagePhotocopie<=30) {
            prix = (0.10 * 10) + (stockagePhotocopie - 10)*0.09;
            messageAAficher.innerHTML="Le prix est de " + prix;

/*SI LE NOMBRE DE PHOTCOPIES EST SUPÉRIEUR à 30*/   
        } else {
            prix = (stockagePhotocopie - 30)*0.08 + 2.8;
            messageAAficher.innerHTML="Le prix est de " + prix;
        }
    }
    
};

envoiInput.addEventListener("click", verif);