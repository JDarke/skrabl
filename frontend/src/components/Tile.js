import React from "react";
import "../styles/Tile.css";
import { Draggable } from "react-beautiful-dnd";

const Tile = ({
  tile,
  handleClickTile,
  tilesToExchange,
  selectedTile,
  lang,
  isInRack,
  handleClickPlacedTile,
  index,
}) => {
  let tileSelected;
  if (tilesToExchange) {
    tileSelected =
      tilesToExchange.filter((item) => item.id === tile.id).length > 0 ||
      selectedTile === tile
        ? true
        : false;
  }

  const getLetter = (tile) => {
    let letter;
    if (lang === "tr" && tile.letter === "i") {
      letter = "İ";
    } else if (lang === "tr" && tile.letter === "ı") {
      letter = "I";
    } else {
      letter = tile.letter.toUpperCase();
    }
    return letter;
  };

  let handleClick;
  if (isInRack) {
    handleClick = handleClickTile;
  } else {
    handleClick = handleClickPlacedTile;
  }

  return (
    <Draggable draggableId={JSON.stringify(tile.id)} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`tile__wrapper ${
              tileSelected ? "tile__wrapper--selected" : ""
            } ${isInRack ? "tile__wrapper--rack" : "tile__wrapper--board"}
          `}
            onClick={() => handleClick(tile)}
          >
            <span className="tile__letter">{getLetter(tile)}</span>
            <span
              className={`${isInRack ? "tile__points" : "tile-points--sm"}`}
            >
              {tile.points}
            </span>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Tile;
