
const characters = [{'name': 'Vaelwyn', 'image': 'assets/characters/vaelwyn.png', 'rarity': 'Epic', 'color': '#cc66ff'}, {'name': 'Dreadmoor', 'image': 'assets/characters/dreadmoor.png', 'rarity': 'Epic', 'color': '#cc66ff'}, {'name': 'Ilyndra', 'image': 'assets/characters/ilyndra.png', 'rarity': 'Rare', 'color': '#3399ff'}, {'name': 'Kaelthorn', 'image': 'assets/characters/kaelthorn.png', 'rarity': 'Common', 'color': '#ccc'}, {'name': 'Zarok', 'image': 'assets/characters/zarok.png', 'rarity': 'Legendary', 'color': '#ffcc00'}, {'name': 'Myrris', 'image': 'assets/characters/myrris.png', 'rarity': 'Common', 'color': '#ccc'}, {'name': 'Gorvahn', 'image': 'assets/characters/gorvahn.png', 'rarity': 'Common', 'color': '#ccc'}, {'name': 'Selyra', 'image': 'assets/characters/selyra.png', 'rarity': 'Common', 'color': '#ccc'}, {'name': 'Thandor', 'image': 'assets/characters/thandor.png', 'rarity': 'Rare', 'color': '#3399ff'}, {'name': 'Elaria', 'image': 'assets/characters/elaria.png', 'rarity': 'Common', 'color': '#ccc'}];

function getRandomCharacter() {
  const roll = Math.random() * 100;
  let pool;
  if (roll < 1) {
    pool = characters.filter(c => c.rarity === "Legendary");
  } else if (roll < 4) {
    pool = characters.filter(c => c.rarity === "Epic");
  } else if (roll < 20) {
    pool = characters.filter(c => c.rarity === "Rare");
  } else {
    pool = characters.filter(c => c.rarity === "Common");
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

function pullCharacters(count) {
  const results = [];
  for (let i = 0; i < count; i++) {
    results.push(getRandomCharacter());
  }
  return results;
}

let gems = parseInt(localStorage.getItem("gems") || "100000");
const gemsElem = document.getElementById("gems");
gemsElem.textContent = `💎 Gems: ${gems}`;

document.getElementById("pullOne").addEventListener("click", () => {
  const gems = document.getElementById("gems");
  let current = parseInt(gems.textContent.replace(/\D/g, ""));
  if (current >= 100) {
    displayResults(pullCharacters(1));
    current -= 100;
    gemsElem.textContent = `💎 Gems: ${current}`;
  localStorage.setItem("gems", current);
  }
});

document.getElementById("pullTen").addEventListener("click", () => {
  const gems = document.getElementById("gems");
  let current = parseInt(gems.textContent.replace(/\D/g, ""));
  if (current >= 1000) {
    displayResults(pullCharacters(10));
    current -= 1000;
    gemsElem.textContent = `💎 Gems: ${current}`;
  localStorage.setItem("gems", current);
  }
});


function displayResults(results) {
  const container = document.getElementById("result");
  container.innerHTML = "";
  const audio = document.getElementById("sfx");
  audio.currentTime = 0;
  audio.play();

  let collection = JSON.parse(localStorage.getItem("collection") || "[]");
  if (!Array.isArray(collection)) {
    collection = Object.values(collection);
  }

  results.forEach(char => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.opacity = 0;
    card.style.transition = "opacity 1s ease";

    const img = document.createElement("img");
    img.src = char.image;
    img.style.borderColor = char.color;

    const name = document.createElement("h3");
    name.textContent = char.name;
    name.style.color = char.color;

    const rarity = document.createElement("p");
    rarity.textContent = `Rarity: ${char.rarity}`;
    rarity.style.color = char.color;

    const lore = document.createElement("p");
    lore.textContent = {"Vaelwyn": "An elven arcanist who communes with spirits.", "Dreadmoor": "A cursed knight entombed in obsidian armor.", "Ilyndra": "A frost sorceress with a heart of vengeance.", "Kaelthorn": "Dragon-blooded warrior from the Ashen Wastes.", "Zarok": "Shadow assassin, raised in the silence of the void.", "Myrris": "Priestess of light, sworn to the Sunborn Temple.", "Gorvahn": "Orcish warlord wielding a cursed battle axe.", "Selyra": "Mistborn ranger with eyes that see fate.", "Thandor": "Paladin commander of the fallen city Aetherreach.", "Elaria": "Druidess who walks with ancient forest spirits."}[char.name] || "";
    lore.style.fontSize = "0.8em";
    lore.style.marginTop = "5px";
    lore.style.color = "#aaa";

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(rarity);
    card.appendChild(lore);
    container.appendChild(card);

    // fade in
    setTimeout(() => {
      card.style.opacity = 1;
    }, 100);

    collection.push(char);
  });

  localStorage.setItem("collection", JSON.stringify(collection));
}
