const startingTiles = require("../assets/startingTiles");
const shuffle = require("../utils/shuffle");

const initializePouch = (lang) => {
  let initialPouch = [];
  const tiles = startingTiles[lang];
  let index = 1;
  Object.keys(tiles).forEach((key) =>
    tiles[key].forEach((tile) => {
      for (let i = 0; i < key; i++) {
        const newTile = { ...tile, id: index };
        initialPouch.push(newTile);
        index++;
      }
    })
  );
  const shuffled = shuffle(initialPouch);
  return shuffled;
};

module.exports = initializePouch;
