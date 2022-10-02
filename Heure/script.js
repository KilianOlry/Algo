let heures = document.getElementById('Heure');
let minute = document.getElementById('Minute');
let seconde = document.getElementById('Seconde');
let envoiInput = document.getElementById('submit');
let messageAAfficher = document.getElementById('newHeure')




//Pour stocker les valeurs eds variables//

let h = parseInt(heures.value);
let m = parseInt(minute.value);
let s = parseInt(seconde.value);




function verif() {

if(s === 59){
    s = 0;

    if (m === 59) {
        m = 0;

        if(h === 24){
            h = 0;
        }else{
            h = h + 1;
        }

    }else{
        m = + 1;
    }



}else{
    s = s + 1;
    messageAAfficher.innerHTML=`Dans une minute il sera${h}`;
};

}








envoiInput.addEventListener("click", verif);