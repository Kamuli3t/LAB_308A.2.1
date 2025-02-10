//* I'm using JS debug Terminal from VS code.

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
