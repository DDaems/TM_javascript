
let gegeven = "";
let melding = "Wat is jou leeftijd?";

do{
    gegeven = parseInt(prompt(melding));
    melding = "Wat is jou leeftijd?";

    if(!Number.isNaN(gegeven)){
        switch(true){
            case (gegeven > 5 && gegeven <= 12):
                alert("Halve prijs");
                gegeven = NaN;
                break;
            case (gegeven >= 13 && gegeven <= 54):
                alert("Vol tarief");
                gegeven = NaN;
                break;
            default:
                alert("Gratis");
                gegeven = NaN;
                break;
        }
    }else{
        melding = "Geef een getal op!";
    }
}    
while(Number.isNaN(gegeven));