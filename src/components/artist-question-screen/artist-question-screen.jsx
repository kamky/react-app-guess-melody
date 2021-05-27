// React
import React from "react";

// Components
import {ArtistItem} from "../artist-item/artist-item";

// Component ArtistQuestionScreen
export const ArtistQuestionScreen = () => {
  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          <button
            className="track__button track__button--play"
            type="button"
          ></button>
          <div className="track__status">
            <audio />
          </div>
        </div>
      </div>

      <form className="game__artist">
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
      </form>
    </section>
  );
};
