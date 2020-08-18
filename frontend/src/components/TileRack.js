import React from "react";
import Tile from "../components/Tile";
import "../styles/TileRack.css";
import { Droppable } from "react-beautiful-dnd";

const TileRack = ({
  playerRackTiles,
  handleClickTile,
  tilesToExchange,
  selectedTile,
  lang,
  turn,
  boardIsDisabled,
}) => {
  return (
    <Droppable
      droppableId="rack"
      type="tile"
      key={Math.random()}
      direction="horizontal"
    >
      {(provided) => (
        <div
          className="tileRack__wrapper"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {playerRackTiles &&
            playerRackTiles.length > 0 &&
            playerRackTiles.map((tile, index) => (
              <Tile
                tile={tile}
                handleClickTile={handleClickTile}
                tilesToExchange={tilesToExchange}
                selectedTile={selectedTile}
                lang={lang}
                turn={turn}
                boardIsDisabled={boardIsDisabled}
                isInRack={true}
                key={index}
                index={index}
              />
            ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TileRack;
