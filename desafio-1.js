let nomePokemon = ["Poochyena", "Zigzagoon", "Dragonite", "Pikachu", "Hurmple"];

let herois = [
    { nomePokemon: "Poochyena", XP: 1200 },
    { nomePokemon: "Zigzagoon", XP: 4500 },
    { nomePokemon: "Dragonite", XP: 7500 },
    { nomePokemon: "Pikachu", XP: 500 },
    { nomePokemon: "Hurmple", XP: 10001 }
];

let XP = 10000;
let nivel;

if (XP < 1000) {
    nivel = "Ferro";
} else if (XP >= 1001 && XP <= 2000) {
    nivel = "Bronze";
} else if (XP >= 2001 && XP <= 5000) {
    nivel = "Prata";
} else if (XP >= 5001 && XP <= 7000) {
    nivel = "Ouro";
} else if (XP >= 7001 && XP <= 8000) {
    nivel = "Platina";
} else if (XP >= 8001 && XP <= 9000) {
    nivel = "Ascendente";
} else if (XP >= 9001 && XP <= 10000) {
    nivel = "Imortal";
} else if (XP >= 10001) {
    nivel = "Radiante";
} else {
    nivel = "Indefinido"; // Caso algo dê errado
}

for (let i = 0; i < herois.length; i++) {
    let heroi = herois[i];
    let nome = heroi.nomePokemon;
    let XPHeroi = heroi.XP;

    console.log("O Herói de nome " + nome + " está no nível de " + nivel);
}
