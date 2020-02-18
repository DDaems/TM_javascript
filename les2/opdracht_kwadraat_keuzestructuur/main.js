var gegeven = "";

do{
    gegeven = parseInt(prompt("Geef een getal op tussen 10 en 20"));

    if(!Number.isNaN(gegeven)){
        if(gegeven => 10 && gegeven <= 20){
            alert(gegeven * gegeven);
            gegeven = NaN;           
        }else{
            if(gegeven < 10){
                    alert("Dit getal is kleiner dan 10");
                    gegeven = NaN;
            }
            if(gegeven > 20){
                    alert("Dit getal is groter");
                    gegeven = NaN;
            }
        }
    }
}    
while(Number.isNaN(gegeven));