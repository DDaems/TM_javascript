var gegeven = "";

do{
    gegeven = parseInt(prompt("Geef een getal op tussen 10 en 20"));

    if(!Number.isNaN(gegeven)){
        switch(true){
            case (gegeven < 10):
                alert("Dit getal is kleiner dan 10");
                gegeven = NaN;
                break;
            case (gegeven > 20):
                alert("Dit getal is groter");
                gegeven = NaN;
                break;
            default:
                alert(gegeven * gegeven);
                gegeven = NaN;
                break;
        }
    }
}    
while(Number.isNaN(gegeven));