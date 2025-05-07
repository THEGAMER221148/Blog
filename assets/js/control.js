class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    // attack(playerToAttack){
    //     playerToAttack.health -= this.damage;
    //     console.log(`${this.wielder.name} has attacked ${playerToAttack.name} with ${this.name}, dealing ${this.damage} damage!`)
    // }
}
class Character {
    constructor(name, slot){
        this.hp = 100;
        this.weapon = undefined;
        this.element = document.getElementById(`slot${slot}`);
        this.name = name;
    }
    attack(playerToAttack){
        chars[chars.indexOf(playerToAttack)].hp -= this.weapon.damage;
        document.getElementById("log").innerHTML += `${this.name} has attacked ${playerToAttack.name} with ${this.weapon.name}, dealing ${this.weapon.damage} damage! <br><br>`;
        if(playerToAttack.hp <= 0){
            document.getElementById("log").innerHTML += `${this.name} has killedd ${playerToAttack.name}! <br>`;
            playerToAttack.element.remove();
            chars.splice(chars.indexOf(playerToAttack), 1);
        }
    }
    
}
let chars = [];
let weaponNames = [
    new Weapon("wooden sword", 5),
    new Weapon("efficiency 6 netherite pickaxe", 20),
    new Weapon("laser", 10),
    new Weapon("his hands", 8),
    new Weapon("baseball bat", 8),
];
let charNames = [
    "Nave",
    "Tsew",
    "Bob",
    "Joe",
    "Peter",
    "Retep",
    "Spongebob",
    Math.random() > 0.1? "Tyler" : "freakbob",
];
console.log(charNames);
function startGame(){
    let tempNames = charNames;
    for(let i = 1; i < 5; i++){
        let nameSelected = Math.floor(Math.random()*charNames.length)
        chars.push(new Character(tempNames[nameSelected], i));
        tempNames.splice(nameSelected, 1);
    }
    chars.forEach((item) => {
        item.element.innerText = `${item.name}: ${item.hp}hp`;
    });
}
function step(){
    document.getElementById("log").innerText = "";
    chars.forEach((item) => {
        item.weapon = weaponNames[Math.floor(Math.random()*weaponNames.length)];
        console.log(item.weapon);
    });
    chars.forEach((item) => {
        item.attack(chars[Math.floor(Math.random()*chars.length)]);
    });
    chars.forEach((item) => {
        item.element.innerText = `${item.name}: ${item.hp}hp`;
    });
    if(chars.length == 1){
        document.getElementById("log").innerText = `${chars[0].name} has won the battle!`;
    }
    console.log(chars);
}
startGame();
document.getElementById("b").addEventListener("click", step);