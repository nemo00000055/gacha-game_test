const characters = [
  { name: "Aether", rarity: "Common", image: "assets/characters/aether.png" },
  { name: "Blaze", rarity: "Common", image: "assets/characters/blaze.png" },
  { name: "Nyx", rarity: "Rare", image: "assets/characters/nyx.png" },
  { name: "Kairo", rarity: "Rare", image: "assets/characters/kairo.png" },
  { name: "Luxa", rarity: "Epic", image: "assets/characters/luxa.png" },
  { name: "Riven", rarity: "Epic", image: "assets/characters/riven.png" },
  { name: "Nocturne", rarity: "Legendary", image: "assets/characters/nocturne.png" },
  { name: "Zara", rarity: "Legendary", image: "assets/characters/zara.png" },
  { name: "Oblivion", rarity: "Mythic", image: "assets/characters/oblivion.png" },
  { name: "Vex", rarity: "Rare", image: "assets/characters/vex.png" }
];

function weightedRandomPick() {
  const weights = {
    "Common": 50,
    "Rare": 25,
    "Epic": 15,
    "Legendary": 8,
    "Mythic": 2
  };

  const pool = [];

  characters.forEach(char => {
    const weight = weights[char.rarity] || 1;
    for (let i = 0; i < weight; i++) {
      pool.push(char);
    }
  });

  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

document.getElementById('pullBtn').addEventListener('click', () => {
  const result = weightedRandomPick();

  document.getElementById('charImg').src = result.image;
  document.getElementById('charName').textContent = result.name;
  document.getElementById('charRarity').textContent = `Rarity: ${result.rarity}`;
});
