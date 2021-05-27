// React
import React from "react";

// Components
import {TrackItem} from "../track-item/track-item";

// Component GenreQuestionScreen
export const GenreQuestionScreen = () => {
  return (
    <section className="game__screen">
      <h2 className="game__title">Выберите инди-рок треки</h2>
      <form className="game__tracks">
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <TrackItem />
        <button className="game__submit button" type="submit">
          Ответить
        </button>
      </form>
    </section>
  );
};
