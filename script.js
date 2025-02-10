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
