window.onload = function(){  
    let snelheid = document.getElementById("snelheid");
    let toegelaten = document.getElementById("snelheidToegelaten");
    let button = document.getElementById("schrijfBoete");
    
    function onEnter(e){
        if (e.keyCode === 13) { // "Enter"
            if(button) button.click();
        }
    };

    if(snelheid) { snelheid.addEventListener("keyup", onEnter, false); }
    if(toegelaten) { toegelaten.addEventListener("keyup", onEnter, false); }
    if(button) {
        document.getElementById("schrijfBoete").addEventListener("click", function(){
            let toonHelp = "";

            if(!parseInt(snelheid.value)) toonHelp += 'Geef een numeriek karakter in als snelheid.';
            if(toonHelp !== "") toonHelp += "\n"; 
            if(!parseInt(toegelaten.value)) toonHelp += 'Geef een numeriek karkater in voor toegelaten snelheid.';

            if(toonHelp) { document.getElementById("resultaat").innerText = toonHelp; return; }

            //De boete bedraagt steeds een vast bedrag van € 100 en € 2,5 per km/u
            let teveel = parseInt(snelheid.value) - parseInt(toegelaten.value);
            if(teveel > 0){
                let boete = 100 + (teveel * 2.5);
                document.getElementById("resultaat").innerText = `De boete bedraagt € ${boete}.
                                                                Gemeten snelheid: ${snelheid.value} km/u.
                                                                Toegelaten snelheid: ${toegelaten.value} km/u.`;
            }else{
                document.getElementById("resultaat").innerText = "Prima we hebben geen overtreding vastgesteld!";
            }
        });
    }    
}
