const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
};

// adventurer.inventory.forEach((item) => console.log(item));
for (let i = 0; i < adventurer.inventory.length; i++) {
  console.log(adventurer.inventory[i]);
}

adventurer.companion = { name: "Leo", type: "Cat" };

console.log(adventurer);

const leo = adventurer.companion;
// adventurer.companion.companion

leo.companion = {
  name: "Frank",
  type: "Flea",
  belongings: ["hat", "sunglasses"],
};

adventurer.roll = function (mod = 0) {
  const result = Math.floor(Math.random() * 20) + 1 + mod;
  console.log(`${this.name} rolled a ${result}`);
};

adventurer.roll();
adventurer.roll();
adventurer.roll();

// Many Characters make class instead

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
    this.companion = {};
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}`);
  }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo"); // reusability
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);
console.log(robin.roll());

//! Part 3
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role;
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  explore() {
    console.log(`${this.name} is exploring the surroundings...`);
    super.roll();
  }
  navigate() {
    console.log(`${this.name} is trying to find the best route.`);
    super.roll();
  }
  attack(target) {
    console.log(`${this.name} attacks ${target} with their weapon!`);
    super.roll();
  }
  defend() {
    console.log(`${this.name} braces for impact!`);
    super.roll();
  }
  rest() {
    console.log(`${this.name} is resting to recover strength.`);
  }
}

class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  heal(target) {
    console.log(`${this.name} heals ${target.name}, restoring some health.`);
    target.health += 10; // Example healing value
    console.log(`${target.name} now has ${target.health} health.`);
  }

  encourage(target) {
    console.log(
      `${this.name} encourages ${target.name}, boosting their morale.`
    );
    target.health += 5; // Small morale-based buff
  }
}
