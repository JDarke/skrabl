import React from "react";
import "../styles/Board.css";
import Star from "../images/star.svg";
import Tile from "./Tile";
import { Droppable } from "react-beautiful-dnd";

const getBonusClassName = (square) => {
  let bonusClassName = "";

  switch (square.letterMultiplier) {
    case 2:
      bonusClassName = "double-letter";
      break;
    case 3:
      bonusClassName = "triple-letter";
      break;
    default:
      bonusClassName = bonusClassName;
  }
  switch (square.wordMultiplier) {
    case 2:
      bonusClassName = "double-word";
      break;
    case 3:
      bonusClassName = "triple-word";
      break;
    default:
      bonusClassName = bonusClassName;
  }

  return bonusClassName;
};

const getBonusText = (square) => {
  let bonusText = "";
  switch (square.letterMultiplier) {
    case 2:
      bonusText = "2L";
      break;
    case 3:
      bonusText = "3L";
      break;
    default:
      bonusText = bonusText;
  }
  switch (square.wordMultiplier) {
    case 2:
      bonusText = "2W";
      break;
    case 3:
      bonusText = "3W";
      break;
    default:
      bonusText = bonusText;
  }
  if (square.index === 112) {
    bonusText = "";
  }
  return bonusText;
};

const Board = ({
  handleClickSquare,
  handleClickPlacedTile,
  boardState,
  isDisabled,
  lang,
}) => {
  return (
    <div className="board__wrapper">
      <div className={"board__board " + (isDisabled ? "disabled" : "")}>
        {boardState &&
          boardState.length > 0 &&
          boardState.map((square, index) => (
            <Droppable
              droppableId={JSON.stringify(index)}
              type="tile"
              key={index}
              isDropDisabled={!!square.tile}
            >
              {(provided, snapshot) => {
                const bonusClassName = getBonusClassName(square);
                let placedTile;
                return (
                  <div
                    className={`board__square ${bonusClassName} ${
                      index === 112 && "board__centre"
                    } ${snapshot.isDraggingOver && "board__draggingOver"}`}
                    key={index}
                    onClick={(e) => handleClickSquare(square)}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {!placedTile && (
                      <span className="board__bonus-text">
                        {getBonusText(square)}
                      </span>
                    )}
                    {!placedTile && index === 112 && (
                      <img className="center__star" src={Star} />
                    )}
                    {square.tile && (
                      <Tile
                        handleClickPlacedTile={handleClickPlacedTile}
                        tile={square.tile}
                        index={index + 7}
                      />
                    )}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          ))}
      </div>
    </div>
  );
};

export default Board;
