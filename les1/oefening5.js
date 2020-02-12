//parseInt() converteert een string naar een type 'number' 
//als het geen geldig nummer is geeft het 'NaN' terug. 
// (note: 'NaN' is ook van het type 'number')

getal1 = parseInt(prompt("Geef getal 1 op."));
getal2 = parseInt(prompt("Geef getal 2 op."));

//isNaN() converteert eerst de string naar number en kijkt dan of deze 'NaN' is.
//Number.isNaN() converteert niet eerst. 

if(Number.isNaN(getal1) && Number.isNaN(getal2)){
    alert("1 van de getallen was niet geldig!");
}else{
    let som = getal1+getal2;
    alert("De som van " + getal1 + " + " + getal2 + " is " + som); 
}