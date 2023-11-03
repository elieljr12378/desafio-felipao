const nome = "ELIEL";
let XP = 1.000;
let nivel = "";

if (XP <= 1.000) {
    nivel +="Ferro";   
} else if (XP >= 1.001 && XP <= 2.000){
    nivel += "Bronze";
} else if (XP >= 2.001 && XP <= 6.000){
    nivel += "Prata";
} else if (XP >= 6.001 && XP <= 7.000){
    nivel += "Ouro";
} else if (XP >= 7.001 && XP <= 8.000){
    nivel += "Platina";
} else if (XP >= 8.001 && XP <= 9.000){
    nivel += "Ascendente";
} else if (XP >= 9.001 && XP <= 10.000){
    nivel += "Imortal";
} else {
    nivel += "Radiante";  
} 
console.log("O Herói ",nome,"está no nível de",nivel)