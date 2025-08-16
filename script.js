
const characters = [
  {
    "name": "Eiraveil",
    "rarity": "Epic",
    "color": "#9b59b6",
    "image": "assets/characters/eiraveil.png"
  },
  {
    "name": "Myragaze",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/myragaze.png"
  },
  {
    "name": "Myrathorn",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/myrathorn.png"
  },
  {
    "name": "Skelsong",
    "rarity": "Epic",
    "color": "#9b59b6",
    "image": "assets/characters/skelsong.png"
  },
  {
    "name": "Kaellance",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/kaellance.png"
  },
  {
    "name": "Kaelthorn",
    "rarity": "Epic",
    "color": "#9b59b6",
    "image": "assets/characters/kaelthorn.png"
  },
  {
    "name": "Skelsoul",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/skelsoul.png"
  },
  {
    "name": "Ravsong",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/ravsong.png"
  },
  {
    "name": "Thalthorn",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/thalthorn.png"
  },
  {
    "name": "Ravshade",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/ravshade.png"
  }
];
let gems = 1000;
let collection = {};

function updateGemsDisplay() {
  document.getElementById("gems").textContent = `💎 Gems: ${gems}`;
}

function updateGallery() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  Object.values(collection).forEach((char) => {
    const item = document.createElement("div");
    item.classList.add("card");

    const img = document.createElement("img");
    img.src = char.image;
    img.style.borderColor = char.color;

    const name = document.createElement("h3");
    name.textContent = char.name;
    name.style.color = char.color;

    const rarity = document.createElement("p");
    rarity.textContent = `Rarity: ${char.rarity}`;
    rarity.style.color = char.color;

    item.appendChild(img);
    item.appendChild(name);
    item.appendChild(rarity);
    gallery.appendChild(item);
  });
}

function weightedRandomPick() {
  const weights = {
    "Common": 50,
    "Rare": 30,
    "Epic": 16,
    "Legendary": 3,
    "Mythic": 1
  };
  const pool = [];

  characters.forEach((char) => {
    const weight = weights[char.rarity] || 1;
    for (let i = 0; i < weight; i++) {
      pool.push(char);
    }
  });

  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

function pullCharacters(amount = 1) {
  const cost = amount === 10 ? 900 : 100;
  if (gems < cost) {
    alert("Not enough gems!");
    return;
  }
  gems -= cost;
  updateGemsDisplay();

  const container = document.getElementById("result");
  container.innerHTML = "";

  const audio = document.getElementById("sfx");
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }

  for (let i = 0; i < amount; i++) {
    const char = weightedRandomPick();
    if (!collection[char.name]) {
      collection[char.name] = char;
    }

    const card = document.createElement("div");
    card.classList.add("card", "animated");

    const img = document.createElement("img");
    img.src = char.image;
    img.style.borderColor = char.color;

    const name = document.createElement("h3");
    name.textContent = char.name;
    name.style.color = char.color;

    const rarity = document.createElement("p");
    rarity.textContent = `Rarity: ${char.rarity}`;
    rarity.style.color = char.color;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(rarity);
    container.appendChild(card);
  }

  updateGallery();
}

document.getElementById("pullOne").addEventListener("click", () => pullCharacters(1));
document.getElementById("pullTen").addEventListener("click", () => pullCharacters(10));
updateGemsDisplay();
updateGallery();
