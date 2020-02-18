var tekst = "Bereken mijn gewicht op... \nA. Maan \nB. Jupiter \nC. Mars \nD. Venus \nE. Neptunus \n";

var gegeven = "";
var keuze = "";

window.onload = function(){
    document.getElementById("berekenen").addEventListener("click", function(){

        do{
            gegeven = parseInt(prompt("Geef je gewicht op."));
        }while(Number.isNaN(gegeven));

        do{
            keuze = prompt(tekst);
        }while(keuze.toUpperCase() != "A" &&
               keuze.toUpperCase() != "B" &&
               keuze.toUpperCase() != "C" &&
               keuze.toUpperCase() != "D" &&
               keuze.toUpperCase() != "E");
               //Geef de melding “Verkeerde keuze” of “Je koos voor…” in de div #mijnGewicht

        switch(keuze){
            case ("A"):
                document.getElementById("imgPlaneet").src = "img/maan.jpg"; 
                document.getElementById("mijnGewicht").innerText =`Je koos voor "Maan" en je gewicht is ${gegeven-2} kg`;
                break; 
            case ("B"):
                document.getElementById("imgPlaneet").src = "img/jupiter.jpg";
                document.getElementById("mijnGewicht").innerText =`Je koos voor "Jupiter" en je gewicht is ${gegeven-2} kg`;
                break;
            case ("C"):
                document.getElementById("imgPlaneet").src = "img/mars.jpg";
                document.getElementById("mijnGewicht").innerText =`Je koos voor "Mars" en je gewicht is ${gegeven-2} kg`;
            break;
            case ("D"):
                document.getElementById("imgPlaneet").src = "img/venus.jpg";
                document.getElementById("mijnGewicht").innerText =`Je koos voor "Venus" en je gewicht is ${gegeven-2} kg`;
            break;
            case ("E"):
                document.getElementById("imgPlaneet").src = "img/neptunus.jpg";
                document.getElementById("mijnGewicht").innerText =`Je koos voor "Neptunus" en je gewicht is ${gegeven-2} kg`;
            break;
        }
    });

}
