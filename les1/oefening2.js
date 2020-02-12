var getal = 0; 
var teller = 10; 
var naam = "Jan"; 
var kleiner = true; 
var ok = false; 
getal += 10; 
teller++; 
getal += teller; 
getal++; 
kleiner = (getal<20); 
ok = (naam != "jan") && kleiner;

document.write("getal: " + getal 
+ "<br />teller: " + teller
+ "<br />naam:" + naam
+ "<br />kleiner: " + kleiner
+ "<br />Ok? " + ok
);