console.log("start getal: 5")
let testGetal = 5;


console.log('getal i++: '); console.log(testGetal++);
console.log('huidig getal: ' + testGetal);  
console.log('getal ++i: '); console.log(++testGetal);
console.log('huidig getal: ' + testGetal);

// Loops, er is hier geen verschil
// ++i is soms sneller, maar nooit niet trager dan i++
// niet relevant voor integers maar kan wel merkzaam zijn met objecten
// omdat er voor i++ eerst tijdelijk naar het geheugen word geschreven
console.warn("--- loops ---");
console.log("we starten van 0 en gebruiken nu i++");
for(let i = 0; i < 10; i++){
    console.log(i);
}

console.log("we starten van 0 en gebruiken nu ++i");
for(let i = 0; i < 10; ++i){
    console.log(i);
}