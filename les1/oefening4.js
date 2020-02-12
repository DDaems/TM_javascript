naam = prompt('Wat is je naam?');
var result = confirm(naam + "?");

if(result){ 
    document.write('Welkom op deze pagina ' + naam); 
}