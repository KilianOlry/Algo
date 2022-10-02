/*Les habitants de Zorglub paient l'impôt selon les règles suivantes :
les hommes de plus de 20 ans paient l'impôt
les femmes paient l'impôt si elles ont entre 18 et 35 ans
les autres ne paient pas d'impôt
Le programme demandera donc l'âge et le sexe du Zorglubien, et se prononcera donc ensuite sur le fait que l'habitant est imposable ou non.*/


const ageInput = document.getElementById("age");
const sexeInput = document.getElementById("sexe");
const envoiINput = document.getElementById("submit");

let age;
let sexe;

function verif() {
     age = parseInt(ageInput.value);
     sexe = sexeInput.value;

if((sexe == "Homme" && age>20) || (sexe == "Femme" && age >=18 && age<=35) ){

    alert("Vous êtes imposable")


}else{
    alert("Vous n'êtes pas imposable")
    
}
};

envoiINput.addEventListener("click", verif);

