// React
import React from "react";

// Component ArtistItem
export const ArtistItem = () => {
  return (
    <div className="artist">
      <input
        className="artist__input visually-hidden"
        type="radio"
        name="answer"
        value="artist-1"
        id="answer-1"
      />
      <label className="artist__name" htmlFor="answer-1">
        <img
          className="artist__picture"
          src="http://placehold.it/134x134"
          alt="Пелагея"
        />
        Пелагея
      </label>
    </div>
  );
};
