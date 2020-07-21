import React from "react";

const Players = ({ allPlayers, user, acceptInvite, handleRequestGame }) => {
  return (
    <div>
      <h1>Players Online</h1>
      <form onSubmit={acceptInvite}>
        <input type="text" id="invite" placeholder="Enter invite code" />
        <button type="submit">Accept Invite</button>
      </form>
      Clink on a player to invite them for a game
      <ul>
        {allPlayers.length > 0 &&
          allPlayers.map((player, index) => {
            if (player.id !== user.id)
              return (
                <li
                  key={index}
                  value={player}
                  onClick={() => {
                    handleRequestGame(player);
                  }}
                >
                  {player.name}
                </li>
              );
            else return;
          })}
      </ul>
    </div>
  );
};

export default Players;
