const characters = [
  {
    "name": "Aetherclaw",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/aetherclaw.png"
  },
  {
    "name": "Aethergaze",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/aethergaze.png"
  },
  {
    "name": "Aetherheart",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/aetherheart.png"
  },
  {
    "name": "Aetherveil",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/aetherveil.png"
  },
  {
    "name": "Blazeshade",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/blazeshade.png"
  },
  {
    "name": "Blazesong",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/blazesong.png"
  },
  {
    "name": "Blazeveil",
    "rarity": "Epic",
    "color": "#9b59b6",
    "image": "assets/characters/blazeveil.png"
  },
  {
    "name": "Drakeblade",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/drakeblade.png"
  },
  {
    "name": "Elarablade",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/elarablade.png"
  },
  {
    "name": "Elarasong",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/elarasong.png"
  },
  {
    "name": "Kairogaze",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/kairogaze.png"
  },
  {
    "name": "Kairoheart",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/kairoheart.png"
  },
  {
    "name": "Kairoveil",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/kairoveil.png"
  },
  {
    "name": "Luxabloom",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/luxabloom.png"
  },
  {
    "name": "Luxagaze",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/luxagaze.png"
  },
  {
    "name": "Luxaveil",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/luxaveil.png"
  },
  {
    "name": "Mirabloom",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/mirabloom.png"
  },
  {
    "name": "Miraclaw",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/miraclaw.png"
  },
  {
    "name": "Miragaze",
    "rarity": "Epic",
    "color": "#9b59b6",
    "image": "assets/characters/miragaze.png"
  },
  {
    "name": "Mirashade",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/mirashade.png"
  },
  {
    "name": "Mirasong",
    "rarity": "Epic",
    "color": "#9b59b6",
    "image": "assets/characters/mirasong.png"
  },
  {
    "name": "Miraveil",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/miraveil.png"
  },
  {
    "name": "Nocturnebloom",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/nocturnebloom.png"
  },
  {
    "name": "Nocturnelight",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/nocturnelight.png"
  },
  {
    "name": "Nocturneveil",
    "rarity": "Epic",
    "color": "#9b59b6",
    "image": "assets/characters/nocturneveil.png"
  },
  {
    "name": "Nyxgaze",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/nyxgaze.png"
  },
  {
    "name": "Nyxheart",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/nyxheart.png"
  },
  {
    "name": "Nyxveil",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/nyxveil.png"
  },
  {
    "name": "Oblivionblade",
    "rarity": "Epic",
    "color": "#9b59b6",
    "image": "assets/characters/oblivionblade.png"
  },
  {
    "name": "Oblivionbloom",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/oblivionbloom.png"
  },
  {
    "name": "Obliviongaze",
    "rarity": "Epic",
    "color": "#9b59b6",
    "image": "assets/characters/obliviongaze.png"
  },
  {
    "name": "Oblivionsong",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/oblivionsong.png"
  },
  {
    "name": "Rivenbloom",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/rivenbloom.png"
  },
  {
    "name": "Rivenheart",
    "rarity": "Legendary",
    "color": "#f1c40f",
    "image": "assets/characters/rivenheart.png"
  },
  {
    "name": "Rivenshade",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/rivenshade.png"
  },
  {
    "name": "Thornegaze",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/thornegaze.png"
  },
  {
    "name": "Thornelight",
    "rarity": "Epic",
    "color": "#9b59b6",
    "image": "assets/characters/thornelight.png"
  },
  {
    "name": "Valenblade",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/valenblade.png"
  },
  {
    "name": "Valenclaw",
    "rarity": "Epic",
    "color": "#9b59b6",
    "image": "assets/characters/valenclaw.png"
  },
  {
    "name": "Valenlight",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/valenlight.png"
  },
  {
    "name": "Valenshade",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/valenshade.png"
  },
  {
    "name": "Valensong",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/valensong.png"
  },
  {
    "name": "Valenstrike",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/valenstrike.png"
  },
  {
    "name": "Valenveil",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/valenveil.png"
  },
  {
    "name": "Vexblade",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/vexblade.png"
  },
  {
    "name": "Vexgaze",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/vexgaze.png"
  },
  {
    "name": "Vexshade",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/vexshade.png"
  },
  {
    "name": "Vexstrike",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/vexstrike.png"
  },
  {
    "name": "Vexveil",
    "rarity": "Rare",
    "color": "#4a90e2",
    "image": "assets/characters/vexveil.png"
  },
  {
    "name": "Zarastrike",
    "rarity": "Common",
    "color": "#b0b0b0",
    "image": "assets/characters/zarastrike.png"
  }
];

function weightedRandomPick() {
  const weights = {
    "Common": 50,
    "Rare": 30,
    "Epic": 16,
    "Legendary": 3,
    "Mythic": 1
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

function pullCharacters(amount = 1) {
  const container = document.getElementById('result');
  container.innerHTML = '';

  const audio = document.getElementById('sfx');
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }

  for (let i = 0; i < amount; i++) {
    const char = weightedRandomPick();

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = char.image;

    const name = document.createElement('h3');
    name.textContent = char.name;
    name.style.color = char.color;

    const rarity = document.createElement('p');
    rarity.textContent = `Rarity: ${char.rarity}`;
    rarity.style.color = char.color;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(rarity);
    container.appendChild(card);
  }
}

document.getElementById('pullOne').addEventListener('click', () => pullCharacters(1));
document.getElementById('pullTen').addEventListener('click', () => pullCharacters(10));
