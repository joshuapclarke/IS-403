const facts = [
  "Bananas are berries, but strawberries aren’t.",
  "Octopuses have three hearts.",
  "Honey never spoils — edible honey has been found in ancient tombs!",
  "Sharks existed before trees.",
  "Wombat poop is cube-shaped.",
  "Sloths can hold their breath longer than dolphins.",
  "There are more stars in the universe than grains of sand on Earth."
];

const factElement = document.getElementById("fact");
const newFactBtn = document.getElementById("newFactBtn");

newFactBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factElement.textContent = facts[randomIndex];
});
