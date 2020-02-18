var gegeven = "";
var gegeven2 = "";
var gegeven3 = "";
var resultaat = "";

do{
    do{
        gegeven = parseInt(prompt("Geef uw 1ste getal op"));
    }while(Number.isNaN(gegeven));

    do{
        gegeven2 = parseInt(prompt("Geef uw 2de getal op"));
    }while(Number.isNaN(gegeven2));

    do{
        gegeven3 = parseInt(prompt("Geef uw 3de getal op"));
    }while(Number.isNaN(gegeven3));


    if(gegeven < gegeven2 && gegeven < gegeven3){
        resultaat += "kleinste: " + gegeven + "\n";
    }else if(gegeven2 < gegeven && gegeven2 < gegeven3){
        resultaat += "kleinste: " + gegeven2 + "\n";
    }else{
        resultaat += "kleinste: " + gegeven3 + "\n";
    }

    if(gegeven > gegeven2 && gegeven < gegeven3){
        resultaat += "middelste: " + gegeven + "\n";
    }else if(gegeven2 > gegeven && gegeven2 < gegeven3){
        resultaat += "middelste: " + gegeven2 + "\n";
    }else{
        resultaat += "middelste: " + gegeven3 + "\n";
    }

    if(gegeven > gegeven2 && gegeven > gegeven3){
        resultaat += "grootste: " + gegeven + "\n";
    }else if(gegeven2 > gegeven && gegeven2 > gegeven3){
        resultaat += "grootste: " + gegeven2 + "\n";
    }else{
        resultaat += "grootste: " + gegeven3 + "\n";
    }

    alert(resultaat);
}    
while(Number.isNaN(gegeven));