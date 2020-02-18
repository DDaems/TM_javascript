// isNaN('');        // false: the empty string is converted to 0 which is not NaN
// isNaN(' ');       // false: a string with spaces is converted to 0 which is not NaN
var gegeven = "";

do{
    gegeven = parseInt(prompt("Geef een getal op"));
    
    if(!Number.isNaN(gegeven)){
        if(gegeven % 2){
            alert("dit is een oneven getal");
            gegeven = NaN;
        }else{
            alert("dit is een even getal");
            gegeven = NaN;
        }
    }
}    
while(isNaN(gegeven));