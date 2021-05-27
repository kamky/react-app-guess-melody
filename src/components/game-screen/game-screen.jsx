// React
import React from "react";

// Components
import {GameHeader} from "../game-header/game-header";

// Component GameScreen
export const GameScreen = () => {
  return (
    // game-artist or game-genre
    <section className="game game--">
      <GameHeader />
      {/* there should be children */}
    </section>
  );
};
