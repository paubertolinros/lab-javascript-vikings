// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  };
  attack() {
    return this.strength;
  };
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
  };
};
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;  
  };
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    };
  };
  battleCry() {
    return "Odin Owns You All!";
  };
};
// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    };
  };
};
// War
class War {
  constructor(){
  this.vikingArmy = [];
  this.saxonArmy = [];
  };
  addViking(Viking){
    this.vikingArmy.push(Viking);
  };
   addSaxon(Saxon){
     this.saxonArmy.push(Saxon);
  }; 
//A PARTIR DE AQUÍ ME CUESTA MUCHO, LO HE SACADO CON AYUDA DE LXS COMPAÑERXS Y CON SOLUCIONES DE INTERNET.
//NO ENTIENDO PORQUE EN LA PARTE DE ELIMINAR A LOS SOLDADOS, JASMINE ME DA POR BUENO .POP/.SHIFT/ Y .SLICE SIN EL 1
//(CUÁNTOS ELEMENTOS HAY QUE ELIMINAR), LO HE DEJADO CON SPLICE PORQUE ES EL QUE TIENE MÁS SENTIDO, PERO TAMPOCO
//ACBO DE ENTENDER PORQUE PUEDO PONER EN LOS () DE SPLICE DIRECTAMENTE SAXONRANDOM, QUE NO ES SOLAMENTE UN NÚMERO...
  vikingAttack() {
    let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]; 
    let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let result = saxonRandom.receiveDamage(vikingRandom.strength);
    if (saxonRandom.health <= 0) {
      let newindex =  this.saxonArmy.indexOf(saxonRandom)
      this.saxonArmy.splice(newindex,1)
    };
    return result;
  };
//OTRA OPCIÓN PARA ELIMINAR AL SAXON 
 /* vikingAttack() {
    let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]; 
    let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let result = saxonRandom.receiveDamage(vikingRandom.strength);
    if (saxonRandom.health <= 0) {
      this.saxonArmy.splice(saxonRandom);
    };
    return result;
  };*/ 
  saxonAttack() {
    let vikingRandom = [Math.floor(Math.random() * this.vikingArmy.length)]; 
    let vikingSoldier = this.vikingArmy[vikingRandom];
    let saxonRandom = [Math.floor(Math.random() * this.saxonArmy.length)];
    let saxonSoldier = this.saxonArmy[saxonRandom];
    let result = vikingSoldier.receiveDamage(saxonSoldier.strength);
    if (vikingSoldier.health <= 0) {
      this.vikingArmy.splice(vikingRandom,1);
    };
    return result;
  };
  showStatus(){
    if(this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }else if(this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }else {
      return "Vikings and Saxons are still in the thick of battle.";
    };
  };
};








