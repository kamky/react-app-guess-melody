// React
import React from "react";

// Component TrackItem
export const TrackItem = () => {
  return (
    <div className="track">
      <button
        className="track__button track__button--play"
        type="button"
      ></button>
      <div className="track__status">
        <audio />
      </div>
      <div className="game__answer">
        <input
          className="game__input visually-hidden"
          type="checkbox"
          name="answer"
          value="answer-1"
          id="answer-2"
        />
        <label className="game__check" htmlFor="answer-2">
          Отметить
        </label>
      </div>
    </div>
  );
};
