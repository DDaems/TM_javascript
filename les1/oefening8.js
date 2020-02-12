// De pagina moet eerst geladen zijn, vooralleer wij een listener
// kunnen toevoegen.

window.onload = function() {

    let el = document.getElementById('knop');
    
    if(el){
        el.addEventListener('click', informatie_verkrijgen);
    }
}

function informatie_verkrijgen() {
    document.getElementById('msg').innerHTML =
    'U gebruik: ' + window.navigator.appName 
    + ', Versie: ' + window.navigator.appVersion; 
}