getal1 = parseInt(prompt("Geef getal 1 op."));
getal2 = parseInt(prompt("Geef getal 2 op."));

window.onload = function(){
    if(Number.isNaN(getal1) && Number.isNaN(getal2)){
        alert("1 van de getallen was niet geldig!");
    }else{
        let som = getal1+getal2;
        document.getElementById('msg').innerHTML = getal1 + " plus " + getal2 + " = " + som;
    }
}